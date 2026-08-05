# CLAUDE-webapp.md

Notion DB를 CMS로 사용하는 1페이지 포트폴리오 웹앱. 전체 요구사항은 [prd-webapp.md](./prd-webapp.md) 참고.

새 DB를 만들지 않고, sync-repos가 관리하는 기존 `GitHub 리포지토리 관리` DB(`vibecoding` integration 연결됨)를 그대로 조회한다.

## 기술 스택

- Frontend: React (JavaScript)
- Backend: Flask (Python)
- Database / CMS: Notion DB
- Deployment: Vercel (Claude Vercel MCP 연동)

## 폴더 구조

```
260805/
├── index.html                        # 프로젝트 루트에 위치, /webapp/frontend/src/main.jsx 참조
│
└── webapp/
    ├── backend/                      # Flask
    │   ├── app.py                    # GET /api/portfolio, CORS 설정
    │   ├── notion_service.py         # Notion API 조회/필터링 (Published=true) — notion-client 패키지와 이름 충돌 방지
    │   ├── requirements.txt          # flask, flask-cors, notion-client, python-dotenv
    │   └── .env.example              # NOTION_API_KEY, NOTION_DATABASE_ID, NOTION_DATA_SOURCE_ID
    │
    ├── frontend/                     # React
    │   ├── package.json
    │   ├── vite.config.js            # root: '../..', build.outDir 등 조정
    │   └── src/
    │       ├── main.jsx
    │       ├── App.jsx               # 1페이지: Header + ProjectGrid
    │       └── components/
    │           ├── Header.jsx
    │           ├── ProjectGrid.jsx
    │           └── ProjectCard.jsx   # URL 있으면 링크, 없으면 미노출
    │
    └── vercel.json                   # 프론트/백엔드 라우팅, 배포 설정
```

## 규칙

1. **[Notion 연동]** Flask 백엔드는 Python `notion-client`(3.x) 라이브러리로 Notion API와 통신한다. 조회는 `client.data_sources.query()`를 사용한다(3.x부터 `client.databases.query()`는 지원되지 않음). `NOTION_API_KEY`, `NOTION_DATABASE_ID`, `NOTION_DATA_SOURCE_ID`는 서버사이드 환경변수로만 다루고, 프론트엔드 코드나 퍼블릭 저장소에 절대 노출하지 않는다.

2. **[노출 필터]** `GitHub 리포지토리 관리` DB의 `포트폴리오 노출`(checkbox)이 `true`인 항목만 조회·응답한다.

3. **[포트폴리오 데이터 항목]** `GitHub 리포지토리 관리` DB의 아래 속성만 사용한다.

   | Notion 속성명 | 타입 | API 응답 필드 |
   |---|---|---|
   | 저장소명 | title | title |
   | 설명 | rich_text | description |
   | URL | url | github (GitHub 저장소 링크) |
   | 버셀 배포 URL | url | url (데모/서비스 바로가기) |
   | 기술태그 | multi_select | techStack |

4. **[백엔드 API]** `GET /api/portfolio` 하나로 노출 대상 데이터를 조회·가공해 JSON으로 반환한다. React 프론트엔드 도메인에 대해 CORS를 허용한다.

5. **[프론트엔드 레이아웃]** 1페이지 구성으로 Header(자기소개) → Project Grid(카드 목록) 순서를 지킨다. 카드에 `URL` 값이 있으면 클릭 시 새 탭으로 연결하고, 없으면 링크를 렌더링하지 않는다.

6. **[배포]** GitHub 리포지토리와 Vercel을 연결해 push 시 자동 배포되도록 구성한다. 빌드 상태 확인, 오류 로그 조회, 환경변수 검증은 Claude Vercel MCP 도구로 수행한다.

7. **[보안]** Notion API 키/DB ID는 서버사이드 환경변수 외 어디에도 하드코딩하지 않는다.
