# Portfolio

React Router 기반 1인 포트폴리오 웹앱. 메인 페이지(소개 + 대표작 + 기타 작업)와 사례 상세 페이지(gurumeTabi / inGong / SkyPick) 3개로 구성된다.

자세한 구조와 규칙은 [CLAUDE-webapp.md](./CLAUDE-webapp.md)를 참고. 이 저장소의 또 다른 축인 GitHub ↔ Notion 동기화 워크플로우(`/sync-repos`)는 [CLAUDE.md](./CLAUDE.md) 참고.

## 실행

```bash
cd webapp/frontend
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드 (webapp/frontend/dist)
```

## 콘텐츠 수정

모든 텍스트/링크/스크린샷 경로는 `webapp/frontend/src/data/works.js` 한 파일에 있다. 스크린샷 이미지는 `public/images/<slug>/`에 넣으면 자동으로 반영된다(파일이 없으면 placeholder로 대체). 메인 히어로 소개문구·이름·이메일은 `webapp/frontend/src/components/home/HeroSection.jsx`에서 직접 수정한다.

## 배포

`vercel.json`(루트)을 통해 Vercel에 배포된다. GitHub `main` 브랜치에 push하면 자동 재배포된다.
