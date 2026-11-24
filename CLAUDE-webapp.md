# CLAUDE-webapp.md

React Router 다중 페이지 포트폴리오 웹앱(메인 1페이지 + 사례 상세 3페이지). 디자인 시스템은 `html_ds/design-system/`(로컬 참고 자료, git 미추적)을 기준으로 한다. 과거 PRD(`prd-webapp.md`)는 Notion DB를 CMS로 쓰는 1페이지 버전을 전제로 작성되었고 현재 구조와는 다르다 — 이 문서가 최신 기준이다.

## 기술 스택

- Frontend: React 18 + React Router 7 + Tailwind CSS v4(`@tailwindcss/vite`) + Vite 5
- Backend: Flask (Python) — Notion 연동용, 현재 화면에는 연결되어 있지 않음(아래 "레거시 Notion 연동" 참고)
- Deployment: Vercel (`vercel.json` — `@vercel/static-build` + `@vercel/python`)
- 폰트: Pretendard Variable (jsDelivr CDN)

## 폴더 구조

```
vibeCoding/                               # 저장소 루트 = Vite root
├── index.html                            # Pretendard 폰트 link, /webapp/frontend/src/main.jsx 참조
├── vercel.json                           # 루트 vercel.json이 실제 배포에 사용됨
├── public/
│   ├── *.png                             # 레거시 Notion 화면용 프로젝트 썸네일 (cafelist.png 등)
│   └── images/
│       ├── hero-bg.png, page-bg.png      # 배경 이미지
│       └── <slug>/                       # 대표작별 스크린샷 (pc.jpg, mobile.jpg, extra-N.*)
│
└── webapp/
    ├── backend/                          # Flask, 레거시 Notion 연동 — 코드는 유지하되 화면 미연결
    │   ├── app.py                        # GET /api/portfolio
    │   └── notion_service.py
    │
    └── frontend/
        ├── package.json
        ├── vite.config.js                # root: "../..", @tailwindcss/vite 플러그인
        └── src/
            ├── main.jsx                  # BrowserRouter
            ├── App.jsx                   # Route 정의: "/" , "/work/:slug" + ScrollToTop(라우트 전환 시 스크롤 최상단 리셋)
            ├── index.css                 # @import "tailwindcss" + @theme 디자인 토큰
            ├── data/
            │   └── works.js              # 전체 작품 데이터(대표작 + 기타 작업) — 유일한 콘텐츠 소스
            ├── pages/
            │   ├── Home.jsx              # 메인: Hero + 대표작 그리드 + 기타 작업 섹션
            │   └── WorkDetail.jsx        # 사례 상세: /work/:slug
            ├── components/
            │   ├── Reveal.jsx            # 스크롤 진입 시 아래→위 페이드인 래퍼(IntersectionObserver), delay(ms)로 시차 지정
            │   ├── ScrollTopButton.jsx   # 우측 하단 고정, 400px 이상 스크롤 시 노출되는 맨 위로 가기 버튼. 전역(App.jsx)에 배치
            │   ├── home/                 # HeroSection, FeaturedGrid/Card, OtherWorkGrid/Card, CardMedia, ParallaxBg
            │   │                         # CardMedia: 대표작/기타 작업 카드 공용 썸네일(4:3 고정) — PC는 BrowserBar, SkyPick은 PhoneFrame의 StatusBar를 상단에 얹고 나머지를 이미지가 채움
            │   │                         # ParallaxBg: 페이지 고정 배경, 스크롤에 따라 느리게 이동(패럴랙스) + 확대/페이드 브리딩 애니메이션(bg-breathe) 루프
            │   └── work/                 # TopBar, DetailHero, Screenshot, BrowserFrame, PhoneFrame,
            │                             # ScreenshotSection(slug별 분기), MetaBand, ProblemSection,
            │                             # RoleSection/RoleCards, DecisionsSection/DecisionCard,
            │                             # LessonSection, TechSection, PrevNextNav
            └── legacy/
                ├── NotionPortfolio.jsx   # 예전 App.jsx 로직 그대로 보존, 라우트에 연결 안 됨
                └── legacy.css            # 예전 index.css(BEM) 그대로 보존
```

## 데이터 구조 (`src/data/works.js`)

모든 콘텐츠는 이 파일 하나의 `works` 배열에서 나온다. 백엔드 API를 호출하지 않는다.

- `featured: true` — 대표작(gurumeTabi, inGong, SkyPick). `/work/:slug` 상세 페이지를 가지며 `role`/`period`/`stack`/`problem`/`decisions`/`lesson`/`screenshots` 전체 필드를 채운다.
- `featured: false` — 기타 작업(StongPlayGround, tripgogo, kcal, orders, refrigeratorRecipe). 메인 카드에만 쓰이며 `title`/`summary`/`stack`/`links`/`thumbnail`만 사용한다.
- `screenshots.pc`/`mobile`/`extra[]`/`phones[]` 경로는 `public/images/<slug>/` 아래 파일을 가리킨다. 파일이 없거나 로드에 실패하면 `Screenshot` 컴포넌트가 자동으로 연보라 placeholder(`bg-placeholder-fill` + 점선 `border-placeholder-line`)로 대체한다 — 코드 수정 없이 이미지만 넣으면 반영된다.
- `[ ]` 대괄호로 남아있는 값(예: `period: "[기간 입력]"`)은 실제 정보가 아직 확정되지 않았다는 표시다. 사용자가 명시적으로 값을 주기 전에는 임의로 채우지 않는다.

## 디자인 시스템

색상·타이포·spacing·radius 토큰은 `webapp/frontend/src/index.css`의 `@theme` 블록에 정의되어 있다(Tailwind v4 방식, `tailwind.config.js` 없음). 핵심 원칙:

- 강조색은 `accent`(#5B4BDB) 하나만 사용. 그림자(`shadow-*`)와 그라디언트(`bg-gradient-*`) 유틸리티는 쓰지 않는다 — 구분은 1px 선(`line`)과 면 색 차이로만 한다.
- 폰트는 Pretendard Variable 하나(`--font-sans`).
- 콘텐츠 최대 폭은 `max-w-[1280px]`로 모든 섹션 컨테이너에서 통일.
- 카드 hover는 기본적으로 테두리색 변화(`border-line` → `hover:border-line-strong`)만 사용한다. 대표작 카드(`FeaturedCard`)는 예외로 테두리색 변화에 더해 떠오르는 효과(`hover:-translate-y-1.5`)와 그림자(`hover:shadow-[...]`)를 사용하며, 애니메이션은 expo-out 커브(`duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`)로 처리하고 `motion-reduce`에서 비활성화한다.
- 브레이크포인트는 Tailwind 기본값(`sm` 640 / `md` 768 / `lg` 1024)을 쓰되, 그리드 열 수 전환은 주로 `md`/`lg`에서, 타이포그래피는 기본값→`sm`→`lg` 3단으로 처리한다.
- 등장 애니메이션은 두 종류로 통일한다: 첫 화면 요소(히어로, 상세 히어로)는 `animate-fade-up`로 순차 페이드업(각 요소 `animationDelay`를 120ms씩 늘려 시차), 스크롤로 들어오는 하위 섹션/카드는 `Reveal` 컴포넌트로 감싼다. 둘 다 expo-out 커브(`cubic-bezier(0.16,1,0.3,1)`)를 쓰고 `motion-reduce`에서 비활성화한다.
- 버튼(Live/GitHub/이전·다음 케이스)은 hover 시 `-translate-y-0.5`로 살짝 떠오르며 그림자가 강해지는 패턴을 공통으로 쓴다(`duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`).
- 페이지 배경(`ParallaxBg`)은 스크롤 속도보다 느리게 움직이는 패럴랙스에 더해, 16초→12초 주기로 천천히 확대(scale 1→1.15)되고 투명도가 오르내리는 브리딩 애니메이션을 더해 정적인 배경에 생동감을 준다.

## 레거시 Notion 연동

`webapp/backend/`(Flask, `GET /api/portfolio`)와 `src/legacy/NotionPortfolio.jsx`는 예전 1페이지 버전의 코드로, 삭제하지 않고 그대로 보존되어 있다. 현재 `App.jsx`의 라우트에는 연결되어 있지 않다 — 되살리려면 `App.jsx`에 Route를 추가하면 된다. Notion API 키/DB ID는 서버사이드 환경변수로만 다루고 프론트엔드나 퍼블릭 저장소에 노출하지 않는다는 원칙은 계속 유효하다.

## 배포

`vercel.json`(루트)이 실제 배포에 쓰인다. `builds` + `routes`의 레거시 방식을 사용하므로 `{ "handle": "filesystem" }`을 쓰면 안 된다(정적 자산까지 `index.html`로 폴백되어 사이트 전체가 깨짐) — 대신 확장자 유무로 분기하는 명시적 정규식 라우트를 쓴다:

```json
{ "src": "/(.*\\.[a-zA-Z0-9]+)", "dest": "webapp/frontend/$1" },
{ "src": "/(.*)", "dest": "webapp/frontend/index.html" }
```

React Router의 클라이언트 사이드 라우트(`/work/gurumetabi` 등)는 새로고침 시 이 폴백을 통해 `index.html`로 서빙된 뒤 클라이언트에서 렌더링된다.

## 커밋 규칙

- 커밋 메시지는 한국어로 작성한다.
- push 전에 `webapp/frontend`에서 `npm run build`를 실행하고, 실패하면 push하지 않는다.
- 새로 만든 파일도 반드시 함께 커밋한다.
