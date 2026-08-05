[PRD] Notion 연동 1페이지 포트폴리오 웹앱


1. 개요 (Overview)

목적: Notion 데이터베이스를 CMS(콘텐츠 관리 시스템)로 활용하여 관리자가 별도의 코드 수정 없이 Notion에서 프로젝트 정보를 업데이트하면 실시간으로 반영되는 1페이지 포트폴리오 웹앱을 구축한다.

배포 및 관리: Vercel에 배포하며, Claude MCP(Model Context Protocol) 연동을 통해 빌드 및 배포 상태 관리를 효율화한다.


2. 기술 스택 (Tech Stack)

Frontend: React (JavaScript)
Backend: Flask (Python)
Database / CMS: Notion DB
Deployment & Integration: Vercel (Claude Vercel MCP 연결)


3. 주요 기능 요구사항 (Functional Requirements)

3.1 Notion DB 연동

API 호출: Flask 백엔드는 @notionhq/client 또는 Python notion-client 라이브러리를 사용해 Notion API와 통신한다.
데이터 필터링: Notion DB 속성 중 Published(Checkbox)가 True인 항목만 웹앱에 노출하도록 조회 파이프라인을 구축한다.

3.2 포트폴리오 데이터 항목 (Notion Properties)

Title (title): 프로젝트 이름
Description (rich_text): 프로젝트 요약 설명
URL (url): 포트폴리오 서비스/데모 바로가기 링크
Github (URL): GitHub 저장소 링크
TechStack (multi_select): 사용 기술 태그 (예: React, Flask, Python)


3.3 백엔드 API (Flask)
GET /api/portfolio: Notion DB에서 노출 대상 데이터를 조회·가공하여 React 프론트엔드로 전달할 JSON API 엔드포인트를 제공한다.
CORS(Cross-Origin Resource Sharing) 설정을 적용하여 React 프론트엔드 통신을 허용한다.


3.4 프론트엔드 UI/UX (React)
1페이지 Layout:
Header: 자기소개 및 포트폴리오 메인 타이틀 영역
Project List/Grid: Notion에서 가져온 프로젝트 데이터를 카드 형태로 나열
링크 연결: Notion의 URL 필드 데이터가 존재할 경우, 클릭 시 외부 데모 링크로 연결한다.


3.5 배포 및 MCP 통합
Vercel 배포: GitHub 리포지토리와 Vercel을 연결하여 자동 CI/CD 구축.
환경 변수 관리: NOTION_API_KEY, NOTION_DATABASE_ID 등 보안 토큰은 Vercel Environment Variables에 등록하여 사용.
Claude MCP 연결: Vercel 인증을 진행하여 Claude 인스턴스에서 직접 빌드 모니터링, 오류 로그 확인, 환경 변수 검증을 수행 가능하도록 설정.


4. 비기능적 요구사항 (Non-Functional Requirements)
보안: Notion API Key 및 Database ID가 프론트엔드 코드나 퍼블릭 저장소에 노출되지 않도록 서버사이드(Flask/Environment Variables)에서만 취급한다.

성능: 1페이지 단순 웹앱 특성에 맞게 빠른 렌더링 및 로딩 속도를 유지한다.