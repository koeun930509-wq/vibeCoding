/**
 * Work {
 *   slug: string
 *   title: string
 *   summary: string
 *   featured: boolean        // true=대표작(상세 페이지 있음), false=기타 작업(메인 카드만)
 *   status?: string          // 'testing' 등. 없으면 일반(Live 버튼 노출)
 *   caseLabel?: string       // "대표작 01" 등, featured만 사용
 *   chips?: string[]         // 분류 칩 텍스트, featured만 사용 (SkyPick은 2개)
 *   links?: { live?: string, github?: string }
 *   role?: { mine: string[], ai: string[] }   // featured만 사용
 *   roleSummary?: string     // 역할 섹션 하단 요약 문장, featured만 사용
 *   period?: string          // featured만 사용
 *   stack: string[]          // 기술 스택(메인 카드 + 상세 공용)
 *   problem?: string         // featured만 사용
 *   decisions?: { title: string, body: string }[]  // featured만 사용, 3개
 *   lesson?: string          // featured만 사용
 *   screenshots?: {          // featured만 사용, slug별 구조가 다름
 *     pc?: string, pcCaption?: string,
 *     mobile?: string, mobileCaption?: string,
 *     extra?: { src: string, caption: string, alt: string }[],   // gurumeTabi 전용
 *     phones?: { src: string, caption: string, alt: string }[],  // SkyPick 전용
 *   }
 *   thumbnail?: string|null  // 기타 작업 전용
 * }
 */

export const works = [
  // 대표작 (featured, 상세 페이지 있음)
  {
    slug: "gurumetabi",
    title: "gurumeTabi",
    summary: "광고에 가려지지 않는 일본 맛집을 찾고 리뷰를 남기는 여행자용 웹앱",
    featured: true,
    caseLabel: "대표작 01",
    chips: ["여행 · 맛집 · 웹앱"],
    links: { live: "#", github: "#" },
    role: {
      mine: ["서비스 기획", "UI 디자인", "퍼블리싱 수정"],
      ai: ["로고 제작 (ChatGPT)", "React 구현 · 스크랩 · Google API (Claude)"],
    },
    roleSummary: "방향과 화면은 제가 정하고, 구현은 AI와 협업해 완성했습니다.",
    period: "[기간 입력]",
    stack: ["React", "Vite", "Tailwind CSS", "Supabase", "Google Places API", "Google Maps API", "네이버 API"],
    problem:
      "일본 여행 중 맛집을 찾으면 광고성 후기가 많고, 일본어 정보는 읽기 어렵고, 정보가 여러 앱에 흩어져 있어서 비교하기 힘들었습니다. 한 곳에서 믿을 만한 정보를 보고 저장까지 하고 싶었습니다.",
    decisions: [
      {
        title: "구글 홈페이지처럼 단순한 첫 화면",
        body: "처음 방문한 사람이 무엇을 해야 하는지 바로 알 수 있도록 첫 화면을 검색창 하나 중심으로 구성했습니다. 여행 중에는 메뉴를 고민할 시간이 없어서, 들어오자마자 검색할 수 있는 구조가 가장 쓰기 쉽다고 판단했습니다.",
      },
      {
        title: "Google Places 실데이터 사용",
        body: "임의의 목업이 아니라 실제 가게 정보와 리뷰로 동작하게 해서, 바로 여행에서 쓸 수 있게 했습니다. [이유를 한 줄 더 입력]",
      },
      {
        title: "로그인과 스크랩",
        body: "가고 싶은 곳을 저장해 두고 현지에서 다시 꺼내 볼 수 있게 했습니다. [실제 이유와 다르면 수정]",
      },
    ],
    lesson:
      "머릿속의 디자인이 AI 구현에서 그대로 나오지 않아 여러 번 막혔습니다. 그때마다 [해결 방법: 레퍼런스 제공, 간격·색 값 지정, 화면 단위로 나눠 요청 등]으로 조정하면서, AI에게 디자인 의도를 정확히 전달하는 방법을 익혔습니다.",
    screenshots: {
      pc: "/images/gurumetabi/pc.jpg",
      pcCaption: "[PC 스크린샷 · 첫 화면(검색창 중심)]",
      mobile: "/images/gurumetabi/mobile.jpg",
      mobileCaption: "[모바일 스크린샷]",
      extra: [
        { src: "/images/gurumetabi/extra-0.jpg", caption: "검색 결과", alt: "[스크린샷 · 검색 결과]" },
        { src: "/images/gurumetabi/extra-1.webp", caption: "검색 결과 상세보기", alt: "[스크린샷 · 검색 결과 상세보기]" },
      ],
    },
  },
  {
    slug: "ingong",
    title: "inGong",
    summary: "인천공항 출국 전, 어느 게이트가 덜 붐비는지 한눈에 보여주는 혼잡도 대시보드",
    featured: true,
    caseLabel: "대표작 02",
    chips: ["공항 · 혼잡도 · 대시보드"],
    links: { live: "#", github: "#" },
    role: {
      mine: ["서비스 기획", "사이트 대부분의 UI 디자인", "퍼블리싱 수정"],
      ai: ["공공데이터 · 날씨 API 연동", "혼잡도 그래프 구현"],
    },
    roleSummary: "무엇을 보여줄지와 화면 구성은 제가 정하고, 데이터 연동과 그래프는 AI와 협업해 완성했습니다.",
    period: "[기간 입력]",
    stack: ["JavaScript", "React", "Vite", "Recharts", "Supabase", "공공데이터포털 API", "OpenWeatherMap"],
    problem:
      "공항에 도착하기 전에 어느 게이트로 가야 출국심사를 빨리 받을 수 있는지 알고 싶었습니다. 하지만 공공데이터는 숫자 목록이라 한눈에 판단하기 어려웠습니다.",
    decisions: [
      {
        title: "숫자 목록 대신 시간대별 카드",
        body: "출국 시간에 맞춰 그때 어디가 덜 붐비는지만 보면 되도록, 원본의 숫자 목록을 시간대별 카드와 그래프로 정리했습니다.",
      },
      {
        title: "터미널 비교 (T1 vs T2)",
        body: "어느 쪽이 더 한산한지 바로 판단할 수 있도록 비교 화면을 넣었습니다. [실제 사용 장면이 있다면 한 줄 추가]",
      },
      {
        title: "날씨 정보를 함께 표시",
        body: "[날씨를 넣은 이유를 한 줄로 입력. 없으면 이 카드는 삭제]",
      },
    ],
    lesson:
      "구루메타비와 마찬가지로 디자인이 의도대로 나오지 않아 여러 번 막혔습니다. 그때마다 [해결 방법]으로 조정하면서, AI에게 디자인 의도를 전달하는 감각을 쌓았습니다.",
    screenshots: {
      pc: "/images/ingong/pc.png",
      pcCaption: "[PC 스크린샷 · 혼잡도 대시보드]",
      mobile: "/images/ingong/mobile.png",
      mobileCaption: "[모바일 스크린샷]",
    },
  },
  {
    slug: "skypick",
    title: "SkyPick",
    summary: "비엔 우산, 자외선엔 양산. 지금 챙길 시간을 알려주는 날씨 앱",
    featured: true,
    status: "testing",
    caseLabel: "대표작 03 · 테스트 중",
    chips: ["모바일 앱 · 날씨", "테스트 진행 중"],
    links: {},
    role: {
      mine: ["[서비스 기획]", "[UI 디자인]", "[퍼블리싱 수정]"],
      ai: ["[앱 구현 · API 연동]"],
    },
    roleSummary: "방향과 화면은 제가 정하고, 구현은 AI와 협업해 완성했습니다. [실제와 다르면 수정]",
    period: "[기간 입력]",
    stack: ["[기술 1]", "[기술 2]", "[기술 3]"],
    problem:
      "날씨 앱은 기온과 강수확률 같은 숫자만 보여줘서, 정작 오늘 우산을 챙겨야 하는지, 뭘 입어야 하는지는 직접 판단해야 했습니다. [실제로 겪은 불편에 맞게 수정]",
    decisions: [
      {
        title: '숫자 대신 "무엇을 챙길지" 알려주기',
        body: '기온과 강수확률을 그대로 보여주는 대신, "우산 꼭 챙기세요"처럼 행동으로 바꿔 말해 주는 알림 배너를 홈 화면 중앙에 두었습니다. [실제 의도에 맞게 수정]',
      },
      {
        title: "오늘의 옷차림 추천",
        body: '기온 구간에 맞는 옷을 일러스트와 함께 보여줘서, 매일 아침 "뭘 입지?"를 바로 해결하도록 했습니다. [실제 의도에 맞게 수정]',
      },
      {
        title: "하단 탭 4개로 단순한 구조",
        body: "홈, 옷차림, 음성, 설정만 남겨 한 손으로 쓰기 쉽게 했습니다. [음성 기능을 넣은 이유를 한 줄 추가]",
      },
    ],
    lesson: "[배운 점 입력. 예: 앱은 웹과 달리 테스트 기간 동안 사용자 피드백을 받아 고쳐 가는 과정이 필요했습니다.]",
    screenshots: {
      phones: [
        { src: "/images/skypick/extra-0.png", caption: "[스플래시]", alt: "[스크린샷 1]" },
        { src: "/images/skypick/extra-1.png", caption: "[홈 화면]", alt: "[스크린샷 2]" },
        { src: "/images/skypick/extra-2.png", caption: "[화면 이름]", alt: "[스크린샷 3]" },
        { src: "/images/skypick/extra-3.png", caption: "[화면 이름]", alt: "[스크린샷 4]" },
      ],
    },
  },

  // 기타 작업 (featured: false, 상세 페이지 없음, 메인 카드만)
  {
    slug: "stongplayground",
    title: "StongPlayGround",
    summary: "추억의 어린시절 강한 자만 살아남았던 놀이터를 3D로 구현",
    featured: false,
    stack: ["three.js", "Supabase"],
    links: { live: "#", github: "#" },
    thumbnail: null,
  },
  {
    slug: "tripgogo",
    title: "tripgogo",
    summary: "여행할 지역과 일정을 입력하면 현지 관광지와 맛집을 추천해준다",
    featured: false,
    stack: ["React", "Flask", "Gemini API"],
    links: { live: "#", github: "#" },
    thumbnail: "/tripgogo.png",
  },
  {
    slug: "kcal",
    title: "kcal",
    summary: "음식 사진을 올리면 칼로리 정보와 소비에 필요한 운동 시간을 알려준다",
    featured: false,
    stack: ["React", "Flask", "Gemini API"],
    links: { live: "#", github: "#" },
    thumbnail: "/kcal.png",
  },
  {
    slug: "orders",
    title: "orders",
    summary: "인기 소금빵 카페 Vetong의 주문을 기다리지 않고 온라인으로 할 수 있다",
    featured: false,
    stack: ["React", "Tailwind CSS", "Supabase"],
    links: { live: "#", github: "#" },
    thumbnail: "/orders.png",
  },
  {
    slug: "refrigeratorrecipe",
    title: "refrigeratorRecipe",
    summary: "냉장고 속 사진을 올리면 레시피를 추천합니다",
    featured: false,
    stack: ["Python", "Flask", "OpenRouter API"],
    links: { live: "#", github: "#" },
    thumbnail: "/refrigerator.png",
  },
];

export const featuredWorks = works.filter((w) => w.featured);
export const otherWorks = works.filter((w) => !w.featured);

export function getWorkBySlug(slug) {
  return works.find((w) => w.slug === slug);
}

export function getAdjacentWorks(slug) {
  const idx = featuredWorks.findIndex((w) => w.slug === slug);
  return {
    prev: idx > 0 ? featuredWorks[idx - 1] : null,
    next: idx < featuredWorks.length - 1 ? featuredWorks[idx + 1] : null,
  };
}
