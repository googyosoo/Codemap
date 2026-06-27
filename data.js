/* 코드맵 학습 데이터 — 개념/로드맵/실습/비교/퀴즈 */
/* ===== 카테고리 ===== */
const CATS = [
  {id:"basics", name:"코딩 기초",        color:"#6c8cff", icon:"🧱"},
  {id:"web",    name:"웹 작동 원리",      color:"#4dd2ff", icon:"🌐"},
  {id:"api",    name:"API · 데이터",      color:"#3ddc97", icon:"🔌"},
  {id:"auth",   name:"인증 · 보안",       color:"#ffb454", icon:"🔐"},
  {id:"ui",     name:"UI · UX 설계",      color:"#ff8ad4", icon:"🎨"},
  {id:"design", name:"좋은 코드 설계",     color:"#b48aff", icon:"📐"},
  {id:"tools",  name:"개발 도구",         color:"#7ee787", icon:"🛠️"},
  {id:"test",   name:"테스트 · 디버깅",    color:"#ff6b8a", icon:"🐞"},
  {id:"vibe",   name:"바이브 코딩 · AI도구",color:"#8a6cff", icon:"✨"},
  {id:"ai",     name:"AI · LLM 심화",     color:"#ffd166", icon:"🧠"},
];
const IMG = f => "images/" + f;

/* ===== 개념 카탈로그 ===== */
const CONCEPTS = [
/* ---------- 코딩 기초 ---------- */
{
  id:"lang", cat:"basics", level:"입문", title:"프로그래밍 언어란?",
  key:"컴퓨터에게 말 거는 법",
  summary:"프로그래밍 언어는 사람이 컴퓨터에게 일을 시키기 위한 약속된 문법입니다. 언어마다 잘하는 분야가 다릅니다.",
  points:[
    "컴퓨터는 0과 1만 이해 → 사람이 읽기 쉬운 언어로 쓰면 번역되어 실행됩니다.",
    "Python은 배우기 쉬워 입문·AI에, JavaScript는 웹 화면에 주로 씁니다.",
    "'문법(syntax)'은 언어마다 다르지만, '논리'는 공통입니다.",
  ],
  analogy:"요리 레시피와 같습니다. 같은 요리도 한국어 레시피·영어 레시피가 있듯, 같은 기능도 언어마다 표현법이 다릅니다.",
  apply:"만들 것이 웹사이트면 JavaScript, 데이터·AI면 Python으로 시작하면 무난합니다.",
  images:[{src:"프로그래밍 언어란.jpg",cap:"프로그래밍 언어의 개념"},{src:"코딩언어와 웹 기술.jpg",cap:"코딩 언어와 웹 기술의 관계"}]
},
{
  id:"devterms", cat:"basics", level:"입문", title:"개발 용어 한눈에 정리",
  key:"현장에서 쓰는 말들",
  summary:"개발 대화에 자주 등장하는 기본 용어를 분야별로 묶어 정리했습니다. 용어만 알아도 소통의 절반은 해결됩니다.",
  points:[
    "코드 기본 개념: 변수·함수·조건·반복 등 모든 언어 공통 요소.",
    "서비스 흐름: 요청 → 처리 → 응답으로 이어지는 동작 순서.",
    "운영·품질·출시: 배포, 모니터링, 테스트 등 만든 뒤의 단계.",
  ],
  analogy:"새 직장의 '사내 용어집'과 같습니다. 뜻만 익히면 회의 내용이 들리기 시작합니다.",
  apply:"모르는 용어가 나오면 이 카드의 그림에서 카테고리를 먼저 찾아 위치를 잡으세요.",
  images:[
    {src:"개발 용어 정리(기본).jpg",cap:"기본 용어"},
    {src:"개발 용어 정리(코드 기본 개념).jpg",cap:"코드 기본 개념"},
    {src:"개발 용어 정리(개발 작업 방식).jpg",cap:"개발 작업 방식"},
    {src:"개발 용어 정리(서비스 흐름).jpg",cap:"서비스 흐름"},
    {src:"개발 용어 정리(운영 관리).jpg",cap:"운영 관리"},
    {src:"개발 용어 정리(품질 출시).jpg",cap:"품질·출시"},
    {src:"개발 용어 정리(화면 사용성).jpg",cap:"화면·사용성"}
  ]
},
{
  id:"fileext", cat:"basics", level:"입문", title:"파일 확장자",
  key:".py .js .json 의 의미",
  summary:"파일 이름 뒤 점(.) 다음 글자는 그 파일의 '종류'를 알려주는 꼬리표입니다.",
  points:[
    ".html 화면, .css 디자인, .js 동작, .py 파이썬 코드.",
    ".json 데이터, .md 문서, .env 비밀 설정값.",
    "확장자가 같으면 같은 방식으로 열리고 처리됩니다.",
  ],
  analogy:"음식 포장의 라벨과 같습니다. 안을 열어보지 않아도 무엇인지 알 수 있죠.",
  apply:"에디터에서 파일을 만들 때 확장자를 정확히 붙여야 색칠(문법 강조)과 실행이 됩니다.",
  images:[{src:"파일 확장자.jpg",cap:"자주 쓰는 파일 확장자"}]
},
{
  id:"folder", cat:"basics", level:"입문", title:"폴더 구조",
  key:"프로젝트 정리정돈",
  summary:"코드 파일을 역할별 폴더로 나눠 두면 찾기 쉽고 협업·확장이 편해집니다.",
  points:[
    "보통 화면(frontend)·서버(backend)·설정 파일로 구분합니다.",
    "src(소스), public(공개 파일), node_modules(설치된 부품) 등 관례가 있습니다.",
    "구조가 일관되면 AI 도구도 코드를 더 잘 이해합니다.",
  ],
  analogy:"서랍 정리와 같습니다. 양말은 양말 칸, 셔츠는 셔츠 칸에 둬야 아침에 안 헤맵니다.",
  apply:"새 프로젝트를 시작할 때 폴더부터 역할별로 만들어 두면 나중이 편합니다.",
  images:[{src:"폴더 구조.jpg",cap:"전형적인 프로젝트 폴더 구조"},{src:"AI 프로젝트 폴더.jpg",cap:"AI 프로젝트 폴더 구성"}]
},
{
  id:"markdown", cat:"basics", level:"입문", title:"마크다운(Markdown)",
  key:"가볍게 쓰는 서식 문서",
  summary:"# * - 같은 간단한 기호로 제목·목록·강조를 표현하는 문서 형식입니다. 확장자는 .md.",
  points:[
    "# 제목, **굵게**, - 목록처럼 기호 몇 개로 서식을 만듭니다.",
    "AI에게 지시문(README·규칙)을 줄 때 표준처럼 쓰입니다.",
    "어디서나 같은 모양으로 열리고 깃허브에서 예쁘게 보입니다.",
  ],
  analogy:"메모지에 '제목엔 밑줄, 중요한 건 별표'처럼 정한 나만의 규칙을 모두가 공유하는 것입니다.",
  apply:"프로젝트 설명(README.md)이나 AI 지침서를 마크다운으로 작성해 보세요.",
  images:[{src:"Markdown 1.jpg",cap:"마크다운 기본"},{src:"Markkdown 2.jpg",cap:"마크다운 문법"},{src:"md 파일의 이유.jpg",cap:".md 파일을 쓰는 이유"}]
},
{
  id:"json", cat:"basics", level:"기초", title:"JSON",
  key:"데이터를 주고받는 공용 양식",
  summary:"JSON은 이름:값 형태로 데이터를 적는 표준 형식입니다. 사람도 읽고 컴퓨터도 읽습니다.",
  points:[
    "{ \"key\": \"value\" } 중괄호와 콜론으로 구성됩니다.",
    "프로그램끼리 데이터를 주고받을 때 거의 표준으로 쓰입니다.",
    "API 응답, 설정 파일 등 어디서나 만나게 됩니다.",
  ],
  analogy:"세계 공통의 '택배 송장 양식'입니다. 누가 보내도 같은 칸에 같은 정보를 적습니다.",
  apply:"API에서 받은 데이터가 깨져 보이면 JSON 구조(괄호 짝)부터 확인하세요.",
  images:[{src:"json 1.webp",cap:"JSON 개념"},{src:"json 2.webp",cap:"JSON 구조"}]
},

/* ---------- 웹 작동 원리 ---------- */
{
  id:"frontback", cat:"web", level:"입문", title:"프론트엔드 vs 백엔드",
  key:"보이는 곳 / 보이지 않는 곳",
  summary:"프론트엔드는 사용자가 보는 화면, 백엔드는 뒤에서 데이터를 처리하는 서버입니다.",
  points:[
    "프론트엔드: 버튼·글자·디자인 등 눈에 보이는 부분.",
    "백엔드: 로그인 확인·데이터 저장 등 보이지 않는 처리.",
    "둘은 API로 대화하며 함께 하나의 서비스를 만듭니다.",
  ],
  analogy:"식당으로 치면 프론트엔드는 '홀(손님 공간)', 백엔드는 '주방'입니다.",
  apply:"버튼 색이 문제면 프론트, 저장이 안 되면 백엔드를 의심하세요.",
  images:[{src:"프론트엔드와 백엔드.jpg",cap:"프론트엔드와 백엔드의 역할"}]
},
{
  id:"htmlcssjs", cat:"web", level:"입문", title:"HTML · CSS · JavaScript",
  key:"웹 화면의 3요소",
  summary:"웹 페이지는 뼈대(HTML)·꾸밈(CSS)·움직임(JavaScript) 세 가지로 만들어집니다.",
  points:[
    "HTML: 글·이미지·버튼 등 구조(뼈대).",
    "CSS: 색·크기·배치 등 디자인(꾸밈).",
    "JavaScript: 클릭 반응·계산 등 동작(움직임).",
  ],
  analogy:"사람으로 치면 HTML은 뼈대, CSS는 옷과 화장, JavaScript는 근육의 움직임입니다.",
  apply:"화면이 밋밋하면 CSS, 클릭해도 반응이 없으면 JavaScript를 확인하세요.",
  images:[{src:"HTML CSS JavaScript 1.jpg",cap:"세 기술의 역할 분담"},{src:"HTML CSS JavaScript 2.jpg",cap:"함께 동작하는 방식"}]
},
{
  id:"serverclient", cat:"web", level:"기초", title:"서버와 클라이언트",
  key:"요청하는 쪽 / 응답하는 쪽",
  summary:"클라이언트(내 브라우저)가 요청을 보내면 서버가 처리해서 응답을 돌려줍니다.",
  points:[
    "클라이언트: 무언가를 '요청'하는 쪽 (앱·브라우저).",
    "서버: 요청을 받아 '처리·응답'하는 쪽 (멀리 있는 컴퓨터).",
    "화면은 클라이언트에서, 데이터는 서버에서 옵니다.",
  ],
  analogy:"손님(클라이언트)이 주문하면 주방(서버)이 만들어 내오는 것과 같습니다.",
  apply:"'서버 에러'는 주방 문제, '화면이 안 떠요'는 손님석 문제일 때가 많습니다.",
  images:[{src:"서버와 클라이언트 1.jpg",cap:"서버-클라이언트 구조"},{src:"화면과 서버.jpg",cap:"화면과 서버의 연결"}]
},
{
  id:"http", cat:"web", level:"기초", title:"HTTP 통신",
  key:"웹의 대화 규칙",
  summary:"HTTP는 클라이언트와 서버가 데이터를 주고받는 약속된 규칙입니다. GET(조회)·POST(생성) 등이 있습니다.",
  points:[
    "GET=가져오기, POST=보내기/만들기, PUT=수정, DELETE=삭제.",
    "응답에는 상태 코드가 붙습니다 (200 성공, 404 없음, 500 서버오류).",
    "HTTPS는 HTTP에 암호화를 더한 안전한 버전입니다.",
  ],
  analogy:"택배 시스템과 같습니다. 보내기·받기·반품 같은 정해진 절차로 물건(데이터)이 오갑니다.",
  apply:"개발자도구 Network 탭에서 상태 코드를 보면 어디서 막혔는지 알 수 있습니다.",
  images:[{src:"HTTP 1.jpg",cap:"HTTP 기본 개념"},{src:"HTTP 2.jpg",cap:"요청 메서드"},{src:"HTTP 3.jpg",cap:"상태 코드"}]
},
{
  id:"webmap", cat:"web", level:"기초", title:"웹·웹앱 도구 지도",
  key:"무엇으로 무엇을 만드나",
  summary:"화면·디자인·데이터·배포까지, 웹 서비스를 만들 때 쓰는 도구들의 전체 지도입니다.",
  points:[
    "디자인 → 화면 개발 → 데이터/서버 → 배포의 큰 흐름이 있습니다.",
    "각 단계마다 대표 도구가 정해져 있습니다.",
    "전체 지도를 알면 '지금 어디쯤'인지 길을 잃지 않습니다.",
  ],
  analogy:"여행 전체 노선도와 같습니다. 지금 어느 역인지 알면 다음 역이 보입니다.",
  apply:"막막할 때 이 지도에서 현재 단계를 짚고 다음 도구를 고르세요.",
  images:[{src:"웹 화면과 웹앱도구지도.jpg",cap:"웹·웹앱 도구 지도"},{src:"서비 디자인 데이터 도구 지도.jpg",cap:"디자인·데이터 도구 지도"}]
},

/* ---------- API · 데이터 ---------- */
{
  id:"api", cat:"api", level:"기초", title:"API란?",
  key:"프로그램 사이의 창구",
  summary:"API는 프로그램끼리 정해진 방식으로 기능과 데이터를 주고받게 해주는 '창구'입니다.",
  points:[
    "내부 동작은 몰라도 '요청 방법'만 알면 기능을 쓸 수 있습니다.",
    "날씨·지도·결제 등 남이 만든 기능을 내 앱에 붙일 수 있습니다.",
    "요청을 보내면 보통 JSON으로 응답이 돌아옵니다.",
  ],
  analogy:"식당 메뉴판입니다. 주방이 어떻게 요리하는지 몰라도 메뉴(요청)만 고르면 음식(응답)이 나옵니다.",
  apply:"'날씨 API'를 호출하면 내가 직접 기상 데이터를 모으지 않아도 됩니다.",
  images:[{src:"API 1.jpg",cap:"API 개념"},{src:"API 2.jpg",cap:"API 요청-응답"},{src:"API 3.jpg",cap:"API 활용 예"}]
},
{
  id:"rest", cat:"api", level:"기초", title:"REST API",
  key:"가장 흔한 API 설계 방식",
  summary:"REST는 주소(URL)와 HTTP 메서드로 데이터를 다루는, 가장 널리 쓰는 API 설계 규칙입니다.",
  points:[
    "자원을 URL로 표현: /users, /users/1.",
    "행동은 메서드로: GET 조회, POST 생성, DELETE 삭제.",
    "규칙이 일관돼 누구나 예측 가능하게 사용합니다.",
  ],
  analogy:"도서관 청구기호와 같습니다. 주소 규칙만 알면 어떤 책(데이터)이든 같은 방식으로 찾습니다.",
  apply:"GET /users/1 은 '1번 사용자 정보를 줘'라는 뜻으로 읽으면 됩니다.",
  images:[{src:"REST API 1.jpg",cap:"REST API 개념"},{src:"REST API 2.jpg",cap:"REST 규칙"}]
},
{
  id:"crud", cat:"api", level:"기초", title:"CRUD",
  key:"데이터의 4가지 기본 동작",
  summary:"CRUD는 데이터로 할 수 있는 네 가지 기본 작업: 생성·조회·수정·삭제입니다.",
  points:[
    "Create 생성, Read 조회, Update 수정, Delete 삭제.",
    "거의 모든 앱은 결국 이 4가지의 조합입니다.",
    "HTTP 메서드(POST·GET·PUT·DELETE)와 짝을 이룹니다.",
  ],
  analogy:"메모장 앱을 떠올리세요. 메모 쓰기(C)·보기(R)·고치기(U)·지우기(D)가 전부입니다.",
  apply:"새 기능을 기획할 때 'CRUD 중 무엇이 필요한가'로 쪼개면 단순해집니다.",
  images:[{src:"CRUD 1.webp",cap:"CRUD란"},{src:"CRUD 2.webp",cap:"4가지 동작"},{src:"CRUD 3.webp",cap:"실제 적용"}]
},
{
  id:"db", cat:"api", level:"기초", title:"데이터베이스",
  key:"데이터를 담는 창고",
  summary:"데이터베이스(DB)는 회원·글·주문 같은 데이터를 안전하게 저장하고 빠르게 찾게 해주는 창고입니다.",
  points:[
    "표(테이블) 형태로 행과 열에 데이터를 정리해 저장합니다.",
    "필요한 데이터를 조건으로 빠르게 검색할 수 있습니다.",
    "앱을 꺼도 데이터가 남는 이유가 바로 DB 덕분입니다.",
  ],
  analogy:"잘 정리된 거대한 엑셀 + 사서가 같습니다. 어디에 뭘 뒀는지 알고 즉시 꺼내줍니다.",
  apply:"'회원 정보를 저장한다'는 곧 DB의 회원 테이블에 한 줄을 추가하는 일입니다.",
  images:[{src:"데이터베이스 1.jpg",cap:"데이터베이스 개념"},{src:"데이터베이스 2.jpg",cap:"테이블 구조"}]
},

/* ---------- 인증 · 보안 ---------- */
{
  id:"login", cat:"auth", level:"기초", title:"로그인과 회원가입",
  key:"내가 나임을 등록·증명",
  summary:"회원가입은 정보를 처음 등록하는 것, 로그인은 등록된 내가 맞는지 증명하는 절차입니다.",
  points:[
    "회원가입: 아이디·비밀번호 등 정보를 서버에 저장.",
    "로그인: 입력값이 저장된 정보와 맞는지 확인.",
    "비밀번호는 그대로 저장하지 않고 암호화해서 보관합니다.",
  ],
  analogy:"회원가입은 헬스장 등록, 로그인은 출입할 때 회원증을 찍는 것입니다.",
  apply:"로그인 후 '계속 로그인 상태'가 유지되는 건 세션·토큰 덕분입니다.",
  images:[{src:"로그인과 회원가입.jpg",cap:"로그인·회원가입 흐름"},{src:"로그인과 회원가입2.jpg",cap:"인증 과정"},{src:"로그인과 회원가입3.jpg",cap:"비밀번호 처리"}]
},
{
  id:"authz", cat:"auth", level:"기초", title:"인증과 권한",
  key:"누구인가 / 무엇을 할 수 있나",
  summary:"인증(Authentication)은 '누구인지' 확인, 권한(Authorization)은 '무엇을 할 수 있는지' 결정입니다.",
  points:[
    "인증: 로그인으로 신원 확인.",
    "권한: 일반 사용자/관리자처럼 할 수 있는 범위 구분.",
    "인증을 통과해도 권한이 없으면 막힙니다.",
  ],
  analogy:"건물 출입증으로 '들어왔다'(인증)고 모든 방에 들어갈 수 있는 건 아닙니다(권한).",
  apply:"'관리자만 삭제 가능'은 인증 후 권한을 한 번 더 확인하는 설계입니다.",
  images:[{src:"인증과 권한 1.jpg",cap:"인증 vs 권한"},{src:"인증과 권한 2.jpg",cap:"권한 구분"},{src:"인증과 권한 3.jpg",cap:"적용 예"}]
},
{
  id:"cookie", cat:"auth", level:"심화", title:"쿠키와 세션",
  key:"로그인 상태를 기억하는 법",
  summary:"쿠키는 브라우저에 저장되는 작은 메모, 세션은 서버가 기억하는 로그인 상태입니다. 둘이 짝을 이뤄 '로그인 유지'를 만듭니다.",
  points:[
    "쿠키: 내 브라우저에 저장되는 식별 정보.",
    "세션: 서버 쪽에 저장된 '이 사람 로그인됨' 기록.",
    "쿠키가 세션 열쇠를 들고 다니며 매 요청에 신원을 증명합니다.",
  ],
  analogy:"세션은 클럽의 회원 명부, 쿠키는 손목에 찍힌 도장입니다. 도장(쿠키)을 보고 명부(세션)에서 확인합니다.",
  apply:"로그아웃이 안 풀리거나 자꾸 풀리면 쿠키·세션 설정을 점검합니다.",
  images:[{src:"쿠키와 세션 1.jpg",cap:"쿠키와 세션 개념"},{src:"쿠키와 세션 2.jpg",cap:"동작 흐름"},{src:"쿠키와 세션 3.jpg",cap:"차이점"}]
},
{
  id:"security", cat:"auth", level:"기초", title:"보안 기초",
  key:"최소한 지켜야 할 것",
  summary:"입문자도 반드시 알아야 할 기본 보안 원칙들 — 비밀번호 암호화, 비밀키 노출 금지, 입력값 검증 등입니다.",
  points:[
    "비밀번호·API 키는 코드에 직접 적지 말고 환경변수로 분리.",
    "사용자 입력은 항상 의심하고 검증(유효성 검사).",
    "HTTPS로 통신을 암호화합니다.",
  ],
  analogy:"집 보안과 같습니다. 문 잠그기(암호화), 열쇠 숨기기(비밀키 분리), 방문자 확인(입력 검증).",
  apply:"깃허브에 올리기 전 API 키가 코드에 노출되지 않았는지 꼭 확인하세요.",
  images:[{src:"보안 기초 쉽게 보기 1.jpg",cap:"보안 기초 1"},{src:"보안 기초 쉽게 보기 2.jpg",cap:"보안 기초 2"},{src:"보안 기초 쉽게 보기 3.jpg",cap:"보안 기초 3"}]
},
{
  id:"validation", cat:"auth", level:"기초", title:"유효성 검사",
  key:"입력값을 믿지 마라",
  summary:"사용자가 넣은 값이 올바른 형식·범위인지 확인하는 과정입니다. 잘못된 데이터와 공격을 1차로 막습니다.",
  points:[
    "이메일 형식, 빈 칸, 길이, 숫자 범위 등을 확인.",
    "화면(프론트)과 서버(백엔드) 양쪽에서 검사해야 안전합니다.",
    "통과 못 한 입력은 친절한 안내 메시지로 되돌려 줍니다.",
  ],
  analogy:"공항 보안 검색대와 같습니다. 통과 기준에 안 맞으면 들여보내지 않습니다.",
  apply:"회원가입에서 '비밀번호 8자 이상'을 막는 것이 대표적 유효성 검사입니다.",
  images:[{src:"유효성 검사 1.jpg",cap:"유효성 검사란"},{src:"유효성 검사 2.jpg",cap:"검사 항목"},{src:"유효성 검사 3.jpg",cap:"프론트·백엔드 검증"}]
},
{
  id:"env", cat:"auth", level:"기초", title:"환경변수",
  key:"비밀과 설정을 코드 밖으로",
  summary:"API 키·비밀번호·접속 주소처럼 바뀌거나 숨겨야 할 값을 코드와 분리해 보관하는 방식입니다. 보통 .env 파일을 씁니다.",
  points:[
    "비밀키를 코드에 직접 쓰면 유출 위험 → 환경변수로 분리.",
    "개발/운영 환경마다 다른 설정을 쉽게 바꿉니다.",
    ".env 파일은 깃허브에 올리지 않습니다(.gitignore).",
  ],
  analogy:"금고와 같습니다. 귀중품(비밀키)을 거실(코드)에 두지 않고 금고(.env)에 따로 보관합니다.",
  apply:"API 키가 필요하면 코드에 OPENAI_KEY=... 대신 .env에 넣고 불러 씁니다.",
  images:[{src:"환경변수 1.webp",cap:"환경변수 개념"},{src:"환경변수 2.webp",cap:".env 파일"},{src:"환경변수 3.webp",cap:"사용 방법"},{src:"환경변수 4.webp",cap:"주의점"}]
},

/* ---------- UI · UX ---------- */
{
  id:"uiux", cat:"ui", level:"입문", title:"UI vs UX",
  key:"보이는 것 / 느끼는 경험",
  summary:"UI는 눈에 보이는 화면 요소, UX는 그 화면을 쓰면서 느끼는 전체 경험입니다.",
  points:[
    "UI: 버튼·색·글꼴 등 시각적 요소.",
    "UX: 쉽고 편한가, 헷갈리지 않는가 하는 사용 경험.",
    "예쁜 UI라도 불편하면 나쁜 UX입니다.",
  ],
  analogy:"UI는 자동차의 계기판 디자인, UX는 운전이 얼마나 편한가입니다.",
  apply:"'버튼이 어디 있는지 못 찾겠어요'는 UI는 멀쩡해도 UX 문제입니다.",
  images:[{src:"UI UX.webp",cap:"UI와 UX"},{src:"UI UX 2.webp",cap:"차이 비교"}]
},
{
  id:"uiterms", cat:"ui", level:"입문", title:"UI 용어 · 화면 구성요소",
  key:"버튼·모달·탭의 이름",
  summary:"화면을 이루는 요소들의 이름(버튼·모달·토글·탭 등)을 알면 디자인을 정확히 요청할 수 있습니다.",
  points:[
    "모달: 화면 위에 뜨는 팝업 창.",
    "토글: 켜고 끄는 스위치형 버튼.",
    "탭·내비게이션·카드 등 표준 이름이 있습니다.",
  ],
  analogy:"가구 이름과 같습니다. '저 네모난 거' 말고 '서랍장'이라 해야 정확히 통합니다.",
  apply:"AI에게 '모달로 띄워줘'처럼 정확한 용어로 요청하면 결과가 훨씬 정확합니다.",
  images:[{src:"UI 용어 모음.jpg",cap:"UI 용어 모음"},{src:"화면구성요소.webp",cap:"화면 구성요소"}]
},
{
  id:"wireframe", cat:"ui", level:"입문", title:"와이어프레임",
  key:"디자인 전 밑그림",
  summary:"색·이미지 없이 화면 배치만 그린 설계 밑그림입니다. 무엇을 어디에 둘지 먼저 정합니다.",
  points:[
    "디테일보다 '구조와 배치'에 집중합니다.",
    "빠르게 그리고 빠르게 고칠 수 있습니다.",
    "본격 디자인·개발 전에 방향을 맞추는 단계입니다.",
  ],
  analogy:"집을 짓기 전 그리는 평면도입니다. 벽지·가구 전에 방 배치부터 정합니다.",
  apply:"새 화면을 만들기 전 종이에 네모로 배치만 그려봐도 큰 도움이 됩니다.",
  images:[{src:"와이어프레임 1.webp",cap:"와이어프레임이란"},{src:"와이어프레임 2.webp",cap:"활용"}]
},
{
  id:"component", cat:"ui", level:"기초", title:"컴포넌트",
  key:"재사용하는 화면 조각",
  summary:"버튼·카드·입력창처럼 반복되는 화면 조각을 부품으로 만들어 재사용하는 단위입니다.",
  points:[
    "한 번 잘 만들면 여러 곳에서 가져다 씁니다.",
    "고칠 때 한 곳만 고치면 모든 곳이 같이 바뀝니다.",
    "React 등 현대 웹 개발의 핵심 개념입니다.",
  ],
  analogy:"레고 블록과 같습니다. 같은 블록을 여러 작품에 재사용합니다.",
  apply:"같은 버튼이 화면마다 반복되면 '버튼 컴포넌트'로 묶으세요.",
  images:[{src:"컴포넌트 1.jpg",cap:"컴포넌트 개념"},{src:"컴포넌트 2.jpg",cap:"재사용 구조"}]
},
{
  id:"state", cat:"ui", level:"기초", title:"상태값(state)",
  key:"화면이 기억하는 현재 값",
  summary:"상태는 화면이 지금 기억하고 있는 값입니다. 상태가 바뀌면 화면도 자동으로 다시 그려집니다.",
  points:[
    "예: 좋아요 눌림/안 눌림, 로딩 중/완료, 입력한 글자.",
    "상태가 바뀌면 관련 화면이 자동 갱신됩니다.",
    "'지금 어떤 상태인가'를 관리하는 게 동적 화면의 핵심입니다.",
  ],
  analogy:"전등 스위치와 같습니다. on/off라는 '상태'에 따라 불(화면)이 달라집니다.",
  apply:"버튼을 눌렀는데 화면이 안 바뀐다면 상태가 갱신됐는지 확인하세요.",
  images:[{src:"상태값 1.webp",cap:"상태값 개념"},{src:"상태값 2.webp",cap:"상태 변화"}]
},
{
  id:"event", cat:"ui", level:"기초", title:"이벤트",
  key:"사용자 행동에 반응하기",
  summary:"클릭·입력·스크롤 같은 사용자 행동을 '이벤트'라 하고, 거기에 동작을 연결합니다.",
  points:[
    "클릭·키 입력·마우스 이동 등이 모두 이벤트입니다.",
    "'이벤트가 일어나면 → 이 함수를 실행' 식으로 연결합니다.",
    "버튼이 작동하는 원리가 바로 이벤트 처리입니다.",
  ],
  analogy:"초인종과 같습니다. 누르는 행동(이벤트)에 '딩동' 소리(동작)가 연결돼 있습니다.",
  apply:"'버튼을 눌러도 아무 일이 없어요'는 보통 이벤트 연결이 빠진 경우입니다.",
  images:[{src:"이벤트 1.webp",cap:"이벤트 개념"},{src:"이벤트 2.webp",cap:"이벤트 처리"}]
},
{
  id:"form", cat:"ui", level:"기초", title:"폼과 입력값",
  key:"사용자에게 정보 받기",
  summary:"폼(form)은 사용자에게 정보를 입력받는 영역입니다. 입력값을 모아 서버로 보냅니다.",
  points:[
    "입력창·체크박스·선택 메뉴 등이 폼을 구성합니다.",
    "제출 전 유효성 검사로 잘못된 값을 거릅니다.",
    "모은 값은 보통 서버로 전송되어 처리됩니다.",
  ],
  analogy:"종이 신청서와 같습니다. 칸을 채우고(입력) 제출함에 넣으면(전송) 접수됩니다.",
  apply:"회원가입·검색·문의하기는 모두 폼으로 만들어집니다.",
  images:[{src:"폼과 입력값1.webp",cap:"폼과 입력값"},{src:"폼과 입력값2.webp",cap:"입력값 처리"}]
},
{
  id:"loading", cat:"ui", level:"기초", title:"로딩 · 성공 · 실패 상태",
  key:"기다림을 설계하기",
  summary:"데이터를 불러올 때 화면은 보통 로딩 → 성공 또는 실패 세 상태를 거칩니다. 각 상태를 보여줘야 좋은 UX입니다.",
  points:[
    "로딩: 빙글빙글 표시로 '처리 중'임을 알림.",
    "성공: 결과를 보여줌.",
    "실패: 에러 메시지와 다시 시도 안내.",
  ],
  analogy:"엘리베이터 층 표시등과 같습니다. 지금 오는 중인지, 도착했는지 알려줘야 안 답답합니다.",
  apply:"버튼을 눌렀을 때 아무 반응 없이 멈춘 듯 보이면 로딩 상태를 추가하세요.",
  images:[{src:"로딩성공실패 상태 1.webp",cap:"세 가지 상태"},{src:"로딩성공실패 상태 2.webp",cap:"로딩 처리"},{src:"로딩성공실패 상태 3.webp",cap:"에러 처리"}]
},

/* ---------- 좋은 코드 설계 ---------- */
{
  id:"blueprint", cat:"design", level:"기초", title:"설계도와 코드",
  key:"먼저 그리고, 나중에 짓기",
  summary:"코드를 바로 쓰기 전에 구조를 먼저 설계하면 길을 덜 잃습니다. 설계도가 곧 코드의 지도입니다.",
  points:[
    "무엇을·어떤 순서로 만들지 먼저 정합니다.",
    "설계가 있으면 AI에게도 더 명확히 지시할 수 있습니다.",
    "큰 그림 → 세부 구현 순서가 효율적입니다.",
  ],
  analogy:"건축 도면 없이 집을 지으면 벽을 허물고 다시 쌓게 됩니다.",
  apply:"기능을 만들기 전 '입력→처리→출력'을 한 줄로 적어보면 설계의 시작입니다.",
  images:[{src:"설계도와 코드 관계 1.webp",cap:"설계도와 코드"},{src:"설계도와 코드 관계 2.webp",cap:"관계"}]
},
{
  id:"arch", cat:"design", level:"심화", title:"아키텍처",
  key:"전체 구조의 큰 그림",
  summary:"아키텍처는 프로그램의 각 부분이 어떻게 나뉘고 연결되는지를 보여주는 전체 구조입니다.",
  points:[
    "화면·로직·데이터 등 역할별 계층으로 나눕니다.",
    "구조가 명확하면 고치고 키우기 쉽습니다.",
    "좋은 아키텍처는 한 부분을 바꿔도 다른 곳이 덜 흔들립니다.",
  ],
  analogy:"도시 계획과 같습니다. 주거·상업·도로 구역이 잘 나뉘면 도시가 잘 굴러갑니다.",
  apply:"규모가 커지면 '화면 코드'와 '데이터 코드'를 폴더부터 분리하세요.",
  images:[{src:"아키텍처 쉽게 보기 1.webp",cap:"아키텍처란"},{src:"아키텍처 쉽게 보기 2.webp",cap:"계층 구조"},{src:"아키텍처 쉽게 보기 3.webp",cap:"좋은 구조"}]
},
{
  id:"coupling", cat:"design", level:"심화", title:"결합도",
  key:"얼마나 얽혀 있나",
  summary:"결합도는 코드 조각들이 서로 얼마나 의존하는지를 뜻합니다. 약하게 묶일수록 고치기 쉽습니다.",
  points:[
    "강한 결합: 하나 바꾸면 여러 곳이 줄줄이 깨짐.",
    "약한 결합: 한 부분만 독립적으로 수정 가능.",
    "'느슨한 결합'을 지향합니다.",
  ],
  analogy:"이어폰 줄과 같습니다. 줄이 서로 엉키면(강한 결합) 하나 풀기도 힘듭니다.",
  apply:"한 곳을 고쳤는데 엉뚱한 데가 자꾸 깨지면 결합도가 높다는 신호입니다.",
  images:[{src:"결합도 쉽게 보기1.webp",cap:"결합도란"},{src:"결합도 쉽게 보기2.webp",cap:"강한 결합"},{src:"결합도 쉽게 보기3.webp",cap:"약한 결합"}]
},
{
  id:"dependency", cat:"design", level:"심화", title:"의존성과 방향",
  key:"누가 누구에게 기대나",
  summary:"의존성은 한 코드가 다른 코드 없이는 못 도는 관계입니다. 의존 '방향'을 일관되게 두면 구조가 깔끔해집니다.",
  points:[
    "A가 B를 쓰면 'A는 B에 의존한다'고 합니다.",
    "의존 방향이 한쪽으로 흐르면 이해·수정이 쉽습니다.",
    "서로 의존(순환)하면 복잡해지고 깨지기 쉽습니다.",
  ],
  analogy:"강물과 같습니다. 한 방향으로 흐르면 자연스럽지만, 서로 거슬러 흐르면 소용돌이가 생깁니다.",
  apply:"화면은 데이터에 의존하되, 데이터는 화면을 모르게 두는 게 좋은 방향입니다.",
  images:[{src:"의존성 방향 1.jpg",cap:"의존성 방향"},{src:"의존성 방향 2.jpg",cap:"방향의 중요성"},{src:"의존성 쉽게 보기1.webp",cap:"의존성이란"},{src:"의존성 쉽게 보기2.webp",cap:"의존 관계"},{src:"의존성 쉽게 보기3.webp",cap:"순환 의존"}]
},
{
  id:"responsibility", cat:"design", level:"심화", title:"책임 분리 · 역할 나누기",
  key:"한 조각엔 한 가지 일",
  summary:"코드 한 덩어리가 너무 많은 일을 하면 복잡해집니다. 역할별로 잘게 나누면 이해·수정이 쉬워집니다.",
  points:[
    "하나의 함수·파일은 한 가지 책임만 갖게 합니다.",
    "역할이 분리되면 문제 위치를 빨리 찾습니다.",
    "재사용과 테스트도 쉬워집니다.",
  ],
  analogy:"식당 분업과 같습니다. 한 사람이 요리·서빙·계산을 다 하면 엉키지만, 나누면 매끄럽습니다.",
  apply:"함수 이름에 '그리고(and)'가 들어가면 둘로 나눌 신호입니다.",
  images:[{src:"책임 분리 1.webp",cap:"책임 분리"},{src:"책임 분리 2.webp",cap:"분리 효과"},{src:"역할 나누기 쉽게 보기 1.webp",cap:"역할 나누기"},{src:"역할 나누기 쉽게 보기 2.webp",cap:"분업 구조"}]
},
{
  id:"refactor", cat:"design", level:"기초", title:"리팩토링",
  key:"기능은 그대로, 구조는 깔끔하게",
  summary:"리팩토링은 동작은 바꾸지 않고 코드를 더 읽기 쉽고 정리된 형태로 다듬는 작업입니다.",
  points:[
    "결과(기능)는 동일, 내부 구조만 개선합니다.",
    "중복 제거·이름 정리·쪼개기 등이 포함됩니다.",
    "작은 단위로 자주 하는 게 안전합니다.",
  ],
  analogy:"방 정리와 같습니다. 물건(기능)은 그대로지만 정리하면 찾기 쉬워집니다.",
  apply:"같은 코드가 세 번 반복되면 함수로 묶는 게 첫 리팩토링입니다.",
  images:[{src:"리팩토링 쉽게 보기 1.webp",cap:"리팩토링이란"},{src:"리팩토링 쉽게 보기 2.webp",cap:"개선 전후"},{src:"리팩토링 쉽게 보기 3.webp",cap:"안전한 방법"}]
},
{
  id:"libframework", cat:"design", level:"기초", title:"라이브러리 vs 프레임워크",
  key:"내가 부른다 / 나를 부른다",
  summary:"라이브러리는 내가 필요할 때 가져다 쓰는 도구 모음, 프레임워크는 정해진 틀 안에서 내 코드를 끼워 넣는 구조입니다.",
  points:[
    "라이브러리: 내가 주도하며 필요한 기능을 호출.",
    "프레임워크: 틀이 주도하고 내 코드를 불러 씀.",
    "'제어의 주도권'이 누구에게 있느냐가 핵심 차이입니다.",
  ],
  analogy:"라이브러리는 부엌 도구(원할 때 꺼내 씀), 프레임워크는 밀키트(정해진 순서대로 따라감).",
  apply:"React·Django는 프레임워크, 날짜 계산용 작은 도구는 라이브러리입니다.",
  images:[{src:"라이브러리 프레임워크 차이.jpg",cap:"라이브러리와 프레임워크 차이"}]
},

/* ---------- 개발 도구 ---------- */
{
  id:"git", cat:"tools", level:"기초", title:"Git과 GitHub",
  key:"버전 관리 / 코드 저장소",
  summary:"Git은 코드 변경 이력을 기록·되돌리는 도구, GitHub는 그 코드를 온라인에 보관·공유하는 공간입니다.",
  points:[
    "Git: 내 컴퓨터에서 변경 이력 관리(되돌리기 가능).",
    "GitHub: 코드를 클라우드에 올려 백업·협업.",
    "둘은 다른 것 — Git은 도구, GitHub는 서비스.",
  ],
  analogy:"Git은 문서의 '버전 기록' 기능, GitHub는 그 문서를 올려두는 구글 드라이브입니다.",
  apply:"실수해도 되돌릴 수 있게, 작업 시작 전 Git으로 저장(commit)하는 습관을 들이세요.",
  images:[{src:"Git과 Github.webp",cap:"Git과 GitHub 차이"},{src:"Git 기본 흐름.webp",cap:"Git 기본 흐름"},{src:"Git 사용방법.webp",cap:"사용 방법"},{src:"Github 흐름.jpg",cap:"GitHub 흐름"}]
},
{
  id:"commit", cat:"tools", level:"기초", title:"커밋 · 브랜치 · PR",
  key:"저장 · 갈래 · 합치기 요청",
  summary:"커밋은 변경 저장, 브랜치는 독립된 작업 갈래, PR은 그 작업을 본 코드에 합쳐달라는 요청입니다.",
  points:[
    "커밋: 의미 있는 변경 묶음을 기록(되돌림 단위).",
    "브랜치: 본 코드를 건드리지 않고 따로 실험하는 갈래.",
    "PR(Pull Request): 브랜치 작업을 합쳐달라고 리뷰 요청.",
  ],
  analogy:"브랜치는 원본을 복사한 연습장, 커밋은 저장 버튼, PR은 '이거 본문에 반영해주세요' 제출입니다.",
  apply:"새 기능은 새 브랜치에서 만들고, 끝나면 PR로 합치면 안전합니다.",
  images:[{src:"커밋 브랜치 PR.jpg",cap:"커밋·브랜치·PR 흐름"}]
},
{
  id:"terminal", cat:"tools", level:"기초", title:"터미널과 명령어",
  key:"검은 화면이 무섭지 않게",
  summary:"터미널은 마우스 대신 글자 명령으로 컴퓨터를 다루는 창입니다. 폴더 이동·파일 생성·프로그램 실행을 합니다.",
  points:[
    "cd 폴더이동, ls/dir 목록보기, mkdir 폴더만들기.",
    "설치·실행 명령이 대부분 터미널에서 이뤄집니다.",
    "명령어 몇 개만 익히면 두려움이 사라집니다.",
  ],
  analogy:"식당에서 메뉴판 손짓(마우스) 대신 말로 정확히 주문(명령어)하는 것과 같습니다.",
  apply:"막히면 'pwd'(현재 위치)부터 확인하면 길을 잃지 않습니다.",
  images:[{src:"터미널과 명령어.webp",cap:"터미널이란"},{src:"터미널 사용 방법.webp",cap:"사용 방법"},{src:"자주 쓰는 터미널 명령어.webp",cap:"자주 쓰는 명령어"},{src:"터미널 프롬프팅.webp",cap:"터미널 프롬프팅"}]
},
{
  id:"package", cat:"tools", level:"기초", title:"패키지와 의존성 (npm · pip)",
  key:"남이 만든 부품 가져오기",
  summary:"패키지는 남이 만들어 둔 코드 묶음입니다. npm(자바스크립트)·pip(파이썬)로 설치해 가져다 씁니다.",
  points:[
    "바퀴를 다시 발명하지 말고 검증된 패키지를 활용.",
    "내 프로젝트가 쓰는 패키지 목록 = 의존성.",
    "npm은 JS, pip은 Python의 설치 도구입니다.",
  ],
  analogy:"가구를 직접 깎지 않고 이케아 부품을 사 와 조립하는 것과 같습니다.",
  apply:"필요한 기능이 있으면 직접 짜기 전에 '이 기능 패키지 있나?'부터 검색하세요.",
  images:[{src:"npm과 pip.jpg",cap:"npm과 pip"},{src:"패키지와 의존성.jpg",cap:"패키지와 의존성"}]
},

/* ---------- 테스트 · 디버깅 ---------- */
{
  id:"test", cat:"test", level:"기초", title:"테스트",
  key:"내 코드가 맞는지 자동 확인",
  summary:"테스트는 코드가 의도대로 동작하는지 미리 짜둔 검사로 자동 확인하는 일입니다.",
  points:[
    "'이 입력엔 이 결과가 나와야 한다'를 코드로 적습니다.",
    "수정 후에도 기존 기능이 안 깨졌는지 빠르게 점검.",
    "테스트가 있으면 자신 있게 고칠 수 있습니다.",
  ],
  analogy:"건강검진과 같습니다. 정기적으로 확인하면 큰 문제를 미리 잡습니다.",
  apply:"핵심 기능부터 '정상 입력 1개 + 이상한 입력 1개'로 테스트를 시작하세요.",
  images:[{src:"테스트 쉽게 보기 1.webp",cap:"테스트란"},{src:"테스트 쉽게 보기 2.webp",cap:"테스트 효과"}]
},
{
  id:"debug", cat:"test", level:"기초", title:"버그와 디버깅",
  key:"문제 찾아 고치기",
  summary:"버그는 코드의 오류, 디버깅은 그 원인을 추적해 고치는 과정입니다. 개발의 절반은 디버깅입니다.",
  points:[
    "에러 메시지는 적이 아니라 가장 친절한 단서입니다.",
    "'어디까지 정상인가'를 좁혀가며 원인을 찾습니다.",
    "출력(print)·중단점으로 값의 흐름을 들여다봅니다.",
  ],
  analogy:"두꺼비집 점검과 같습니다. 차단기를 하나씩 올려보며 문제 회로를 좁힙니다.",
  apply:"에러가 나면 메시지의 마지막 줄과 파일·줄 번호부터 읽으세요.",
  images:[{src:"디버깅.jpg",cap:"디버깅 개념"},{src:"버그와 디버깅 1.jpg",cap:"버그와 디버깅"}]
},
{
  id:"errors", cat:"test", level:"기초", title:"자주 만나는 에러",
  key:"초보가 매일 보는 빨간 글씨",
  summary:"입문자가 반복해서 만나는 대표 에러들과 그 뜻·해결 방향을 모았습니다. 패턴만 알면 덜 무섭습니다.",
  points:[
    "문법 오류: 괄호·따옴표 짝, 들여쓰기 확인.",
    "정의 안 됨: 오타이거나 import를 안 한 경우.",
    "연결 오류: 주소·키·네트워크 점검.",
  ],
  analogy:"교통 표지판과 같습니다. 처음엔 낯설지만 종류를 알면 즉시 대응합니다.",
  apply:"에러 메시지를 그대로 복사해 검색하거나 AI에게 물으면 대부분 풀립니다.",
  images:[{src:"자주 만나는 에러 1.jpg",cap:"자주 만나는 에러 1"},{src:"자주 만나는 에러 2.jpg",cap:"자주 만나는 에러 2"},{src:"자주 만나는 에러 3.jpg",cap:"자주 만나는 에러 3"}]
},

/* ---------- 바이브 코딩 · AI 도구 ---------- */
{
  id:"claudecode", cat:"vibe", level:"입문", title:"클로드 코드 시작하기",
  key:"AI와 함께 코딩 입문",
  summary:"클로드 코드는 터미널에서 AI에게 자연어로 지시해 코드를 만들고 고치는 도구입니다. 초보자의 든든한 짝꿍입니다.",
  points:[
    "한국어로 '이런 기능 만들어줘'라고 지시할 수 있습니다.",
    "파일을 직접 읽고 수정하며 작업합니다.",
    "작은 단위로 요청하고 결과를 확인하며 진행합니다.",
  ],
  analogy:"옆자리에 앉은 숙련된 동료와 같습니다. 무엇을 원하는지 또렷이 말할수록 잘 도와줍니다.",
  apply:"한 번에 큰 걸 시키기보다 '먼저 화면부터' 처럼 단계로 나눠 요청하세요.",
  images:[{src:"클로드 코드 시작하기.jpg",cap:"클로드 코드 시작"},{src:"클로드 코드 시작하기 3.jpg",cap:"사용 흐름"},{src:"클로드 코드 시작하기 4.jpg",cap:"활용"},{src:"클로드코드 초보 시작하기.webp",cap:"초보 시작 1"},{src:"클로드코드 초보 시작하기 2.webp",cap:"초보 시작 2"}]
},
{
  id:"claudediff", cat:"vibe", level:"입문", title:"클로드 vs 클로드 코드",
  key:"대화형 / 작업형",
  summary:"클로드는 대화로 묻고 답하는 AI, 클로드 코드는 실제 파일을 다루며 코딩 작업을 수행하는 도구입니다.",
  points:[
    "클로드(앱): 질문·설명·아이디어에 강함.",
    "클로드 코드: 내 컴퓨터의 파일을 직접 읽고 고침.",
    "배우기·계획은 앱, 실제 구현은 코드로 나눠 쓰면 좋습니다.",
  ],
  analogy:"클로드는 상담 선생님, 클로드 코드는 같이 작업하는 조수입니다.",
  apply:"개념이 궁금하면 앱에, 코드를 바꿔야 하면 클로드 코드에 요청하세요.",
  images:[{src:"클로드와 클로드 코드 차이.webp",cap:"클로드 vs 클로드 코드"}]
},
{
  id:"toolscompare", cat:"vibe", level:"기초", title:"코딩 도구 구분하기",
  key:"무엇을 언제 쓰나",
  summary:"바이브 코딩에 쓰는 여러 AI 코딩 도구의 차이와 쓰임새를 정리했습니다.",
  points:[
    "도구마다 강점(웹 제작, 터미널 작업 등)이 다릅니다.",
    "작업 성격에 맞는 도구를 고르는 게 효율적입니다.",
    "처음엔 하나에 익숙해진 뒤 넓혀가는 게 좋습니다.",
  ],
  analogy:"공구함과 같습니다. 망치·드라이버를 상황에 맞게 골라 써야 합니다.",
  apply:"이 그림으로 내 작업(웹/스크립트/자동화)에 맞는 도구를 먼저 정하세요.",
  images:[{src:"코딩 도구 구분하기.jpg",cap:"코딩 도구 구분"}]
},
{
  id:"mcp", cat:"vibe", level:"심화", title:"MCP (도구 연결 규약)",
  key:"AI에게 도구를 쥐어주기",
  summary:"MCP는 AI가 외부 도구·데이터(파일, 검색, 앱)에 표준 방식으로 연결되게 해주는 규약입니다.",
  points:[
    "AI가 '말'만 하는 데서 '행동'까지 하게 해줍니다.",
    "Tool Calling: AI가 필요한 도구를 골라 호출하는 동작.",
    "CLI·앱·데이터 소스를 표준 창구로 연결합니다.",
  ],
  analogy:"AI에게 만능 멀티탭을 주는 것입니다. 어떤 도구든 같은 규격으로 꽂아 씁니다.",
  apply:"구글 드라이브·검색 같은 기능을 AI에 붙이려면 MCP 연결을 활용합니다.",
  images:[{src:"MCP와 CLI.jpg",cap:"MCP와 CLI"},{src:"MCP와 Tool Calling.jpg",cap:"MCP와 Tool Calling"},{src:"MCP 실제 활용.jpg",cap:"MCP 실제 활용"},{src:"google drive AI에 연결하기.jpg",cap:"구글 드라이브 AI 연결"}]
},
{
  id:"viberequest", cat:"vibe", level:"입문", title:"바이브코딩 기능요청 잘하기",
  key:"좋은 결과는 좋은 요청에서",
  summary:"AI에게 기능을 요청할 때 명확하고 구체적으로 적을수록 결과가 좋아집니다. 요청 방식이 곧 실력입니다.",
  points:[
    "무엇을·왜·어떻게 보이길 원하는지 구체적으로.",
    "예시·제약(쓰면 안 되는 것)을 함께 제시.",
    "한 번에 다 말고 단계별로 쪼개 요청.",
  ],
  analogy:"디자이너에게 의뢰하는 것과 같습니다. '예쁘게'보다 '파란 톤, 둥근 버튼'이 정확합니다.",
  apply:"'로그인 만들어줘'보다 '이메일+비번 입력, 8자 검증, 실패 시 안내'처럼 적으세요.",
  images:[{src:"바이브코딩 기능요청.jpg",cap:"기능요청 기본"},{src:"바이브코딩 기능요청 2.jpg",cap:"좋은 요청 예"},{src:"바이브코딩 기능요청 3.jpg",cap:"단계별 요청"}]
},
{
  id:"outputtypes", cat:"vibe", level:"입문", title:"결과물 종류 · MVP",
  key:"무엇을 먼저 만들까",
  summary:"만들 수 있는 결과물의 종류와, 핵심 기능만 빠르게 완성하는 MVP 개념을 정리했습니다.",
  points:[
    "결과물: 웹사이트·앱·스크립트·자동화 등 다양.",
    "MVP: 가장 작지만 동작하는 최소 버전.",
    "완벽보다 '일단 돌아가는 것'을 먼저 만듭니다.",
  ],
  analogy:"MVP는 자전거 → 오토바이 → 자동차 순서입니다. 처음부터 완성차를 노리지 않습니다.",
  apply:"기능을 다 넣기 전에 '핵심 한 가지만 되는 버전'을 먼저 완성하세요.",
  images:[{src:"결과물 종류.jpg",cap:"결과물 종류 1"},{src:"결과물 종류 2.jpg",cap:"결과물 종류 2"},{src:"MVP 1.webp",cap:"MVP 개념"},{src:"MVP 2.webp",cap:"MVP 만들기"}]
},
{
  id:"contextmgmt", cat:"vibe", level:"심화", title:"컨텍스트 관리",
  key:"AI의 기억 용량 다루기",
  summary:"AI는 한 번에 기억할 수 있는 양(컨텍스트 윈도우)이 정해져 있습니다. 이를 잘 관리해야 작업이 매끄럽습니다.",
  points:[
    "대화가 길어지면 앞 내용을 잊을 수 있습니다.",
    "핵심 규칙은 문서(.md)로 정리해 다시 알려줍니다.",
    "긴 작업은 단계로 끊고 요약을 남깁니다.",
  ],
  analogy:"책상 넓이와 같습니다. 한 번에 펼칠 수 있는 서류 양이 정해져 있어 정리가 필요합니다.",
  apply:"중요한 프로젝트 규칙은 매번 말하지 말고 규칙 문서로 만들어 두세요.",
  images:[{src:"claude code codex 컨텍스트 관리.jpg",cap:"컨텍스트 관리"},{src:"컨텍스트 윈도우.jpg",cap:"컨텍스트 윈도우"}]
},

/* ---------- AI · LLM 심화 ---------- */
{
  id:"token", cat:"ai", level:"심화", title:"토큰",
  key:"AI가 글을 세는 단위",
  summary:"토큰은 AI가 글을 처리하는 작은 조각 단위입니다. 보통 단어보다 잘게 나뉘며, 사용량·요금의 기준이 됩니다.",
  points:[
    "한 단어가 여러 토큰으로 쪼개질 수 있습니다.",
    "입력+출력 토큰 수로 비용·속도가 정해집니다.",
    "컨텍스트 윈도우도 토큰 수로 한계가 정해집니다.",
  ],
  analogy:"택시 요금의 '미터기 단위'와 같습니다. 거리(글 길이)에 따라 토큰이 쌓입니다.",
  apply:"비용을 아끼려면 불필요하게 긴 입력을 줄이고 요점만 전달하세요.",
  images:[{src:"토큰의 정의.jpg",cap:"토큰의 정의"},{src:"토큰1.webp",cap:"토큰 개념"},{src:"토큰2.webp",cap:"토큰 분할"},{src:"토큰3.webp",cap:"토큰과 비용"}]
},
{
  id:"rag", cat:"ai", level:"심화", title:"RAG와 임베딩 · 벡터 DB",
  key:"AI에게 내 자료를 참고시키기",
  summary:"RAG는 AI가 답하기 전 외부 자료를 찾아 참고하게 하는 방식입니다. 임베딩·벡터 DB가 그 '검색'을 가능하게 합니다.",
  points:[
    "임베딩: 문장을 의미 기반 숫자(벡터)로 바꿈.",
    "벡터 DB: 의미가 비슷한 자료를 빠르게 검색.",
    "RAG: 관련 자료를 찾아 AI 답변의 근거로 제공.",
  ],
  analogy:"오픈북 시험과 같습니다. AI가 답하기 전 관련 페이지를 펴서 보고 답합니다.",
  apply:"사내 문서로 답하는 챗봇을 만들 때 RAG 구조를 씁니다.",
  images:[{src:"RAG.jpg",cap:"RAG 개념"},{src:"임베딩과 벡터 DB.jpg",cap:"임베딩과 벡터 DB"}]
},
{
  id:"finetune", cat:"ai", level:"심화", title:"파인튜닝 vs RAG vs 프롬프트",
  key:"AI를 길들이는 3가지 방법",
  summary:"AI를 내 목적에 맞추는 세 가지 방법 — 프롬프트(지시), RAG(자료 제공), 파인튜닝(추가 학습)의 차이입니다.",
  points:[
    "프롬프트: 가장 쉽고 빠름, 지시문으로 조정.",
    "RAG: 최신·전용 자료를 참고시켜 정확도 향상.",
    "파인튜닝: 모델 자체를 추가 학습(비용·노력 큼).",
  ],
  analogy:"프롬프트=지시, RAG=참고서 주기, 파인튜닝=재교육입니다. 보통 위에서부터 시도합니다.",
  apply:"대부분의 문제는 좋은 프롬프트 + RAG로 해결됩니다. 파인튜닝은 최후 수단.",
  images:[{src:"파인튜닝 RAG 프롬프트.jpg",cap:"세 가지 방법 비교"}]
},
{
  id:"modelperf", cat:"ai", level:"심화", title:"모델 성능 비교",
  key:"어떤 모델을 고를까",
  summary:"AI 모델마다 속도·정확도·비용이 다릅니다. 작업에 맞춰 적절한 모델을 고르는 안목이 필요합니다.",
  points:[
    "큰 모델: 똑똑하지만 느리고 비쌈.",
    "작은 모델: 빠르고 싸지만 복잡한 작업엔 약함.",
    "성능표로 용도에 맞는 균형점을 찾습니다.",
  ],
  analogy:"자동차 고르기와 같습니다. 출퇴근엔 경차, 장거리엔 큰 차가 맞습니다.",
  apply:"간단한 분류는 작은 모델, 어려운 추론은 큰 모델로 나눠 비용을 아끼세요.",
  images:[{src:"모델 성능표.jpg",cap:"모델 성능표 1"},{src:"모델 성능표 2.jpg",cap:"모델 성능표 2"}]
},
{
  id:"quant", cat:"ai", level:"심화", title:"양자화와 작은 모델",
  key:"내 컴퓨터에서 AI 돌리기",
  summary:"양자화는 모델을 가볍게 압축해 적은 자원으로 돌리게 하는 기술입니다. 내 PC 사양에 맞는 모델 선택이 중요합니다.",
  points:[
    "양자화: 정밀도를 약간 낮춰 용량·속도를 개선.",
    "작은/양자화 모델은 노트북에서도 동작 가능.",
    "내 컴퓨터(메모리·GPU)에 맞춰 모델을 고릅니다.",
  ],
  analogy:"고화질 영상을 살짝 압축해 휴대폰에서도 끊김 없이 보는 것과 같습니다.",
  apply:"로컬에서 AI를 돌리려면 내 RAM·GPU에 맞는 양자화 모델을 고르세요.",
  images:[{src:"양자화와 작은모델.webp",cap:"양자화와 작은 모델"},{src:"내 컴퓨터 성능 정하기.webp",cap:"내 컴퓨터 성능 정하기"}]
},
{
  id:"agent", cat:"ai", level:"심화", title:"AI 에이전트",
  key:"스스로 계획하고 실행하는 AI",
  summary:"에이전트는 목표를 받으면 스스로 단계를 계획하고 도구를 써서 일을 수행하는 AI입니다.",
  points:[
    "추론 → 도구 사용 → 결과 확인 → 다음 단계를 반복.",
    "단순 답변을 넘어 '작업 수행'을 합니다.",
    "MCP·Tool Calling으로 외부 도구를 다룹니다.",
  ],
  analogy:"비서와 같습니다. '이거 처리해줘'라고 하면 알아서 단계를 밟아 끝냅니다.",
  apply:"여러 단계가 필요한 반복 작업을 에이전트에게 위임하면 효율적입니다.",
  images:[{src:"ai agent.jpg",cap:"AI 에이전트"},{src:"추론 에이전트 워크플로우.jpg",cap:"추론 에이전트 워크플로우"}]
},
{
  id:"opensourceai", cat:"ai", level:"심화", title:"오픈소스 AI와 로컬 AI",
  key:"공개 모델을 내 환경에서",
  summary:"오픈소스 AI는 누구나 받아 쓸 수 있는 공개 모델이고, 로컬 AI는 그것을 내 컴퓨터에서 직접 돌리는 방식입니다.",
  points:[
    "오픈소스: 모델을 공개해 자유롭게 활용 가능.",
    "로컬 실행: 데이터를 외부로 안 보내 보안·비용에 유리.",
    "인터넷 없이도 동작하게 만들 수 있습니다.",
  ],
  analogy:"외부 카페(클라우드 AI) 대신 집에 커피머신(로컬 AI)을 두는 것입니다.",
  apply:"민감한 데이터를 다룬다면 로컬·오픈소스 AI를 검토해 보세요.",
  images:[{src:"오픈소스AI와 로컬AI.jpg",cap:"오픈소스·로컬 AI"},{src:"open claw.jpg",cap:"오픈 모델 예"},{src:"hermes agent.jpg",cap:"에이전트 모델"},{src:"open clau vs hemes agent.jpg",cap:"모델 비교"}]
},
{
  id:"djangoreact", cat:"web", level:"심화", title:"Django vs React",
  key:"백엔드 틀 / 프론트 틀",
  summary:"Django는 서버·데이터를 다루는 백엔드 프레임워크, React는 화면을 만드는 프론트엔드 라이브러리입니다.",
  points:[
    "Django(Python): 데이터·로그인·DB 등 뒤편 처리.",
    "React(JavaScript): 동적인 화면·컴포넌트 구성.",
    "경쟁 관계가 아니라 역할이 다른 짝입니다.",
  ],
  analogy:"Django는 주방 시스템, React는 손님이 보는 홀 인테리어입니다.",
  apply:"화면 중심이면 React, 데이터·서버 중심이면 Django부터 보세요.",
  images:[{src:"Django와 React 차이.jpg",cap:"Django와 React 차이"}]
},
];

/* ===== 개념 선행 관계 (지식 그래프) =====
   key 개념을 배우기 전에 알면 좋은 '선행' 개념 목록. 후속은 코드에서 역산. */
const PREREQ = {
  lang:[], devterms:["lang"], fileext:["lang"], folder:["fileext"], markdown:["fileext"], json:["fileext"],
  frontback:["lang"], htmlcssjs:["frontback"], serverclient:["frontback"], http:["serverclient"],
  webmap:["htmlcssjs","serverclient"], djangoreact:["frontback","libframework"],
  api:["http"], rest:["api"], crud:["api"], db:["serverclient"],
  login:["serverclient","db"], authz:["login"], cookie:["login","http"], validation:["form"],
  security:["authz","validation"], env:["security"],
  uiux:["frontback"], uiterms:["uiux"], wireframe:["uiux"], component:["htmlcssjs"],
  state:["component"], event:["htmlcssjs"], form:["event"], loading:["state","http"],
  blueprint:["devterms"], arch:["blueprint"], coupling:["arch"], dependency:["arch"],
  responsibility:["coupling"], refactor:["responsibility"], libframework:["package"],
  terminal:["folder"], git:["terminal"], commit:["git"], package:["terminal"],
  debug:["devterms"], test:["debug"], errors:["debug"],
  viberequest:["lang"], claudecode:["terminal","viberequest"], claudediff:["claudecode"],
  toolscompare:["claudecode"], mcp:["claudecode","api"], outputtypes:["viberequest"], contextmgmt:["claudecode","token"],
  token:["lang"], rag:["token","db"], finetune:["rag"], modelperf:["token"], quant:["modelperf"],
  agent:["mcp"], opensourceai:["modelperf"],
};

/* ===== 비교·분석 표 ===== */
const COMPARES = [
  {
    title:"프론트엔드 vs 백엔드", a:"프론트엔드", b:"백엔드",
    rows:[
      ["위치","사용자가 보는 화면","뒤에서 도는 서버"],
      ["역할","디자인·상호작용","데이터 처리·저장"],
      ["대표 기술","HTML·CSS·JS·React","Python·Django·DB"],
      ["문제 예","버튼 색·배치 오류","로그인·저장 실패"],
    ]
  },
  {
    title:"라이브러리 vs 프레임워크", a:"라이브러리", b:"프레임워크",
    rows:[
      ["주도권","내가 호출","틀이 내 코드를 호출"],
      ["자유도","높음(필요할 때 사용)","낮음(정해진 방식 따름)"],
      ["비유","부엌 도구","밀키트"],
      ["예","날짜 계산 도구","React·Django"],
    ]
  },
  {
    title:"인증 vs 권한", a:"인증(Authentication)", b:"권한(Authorization)",
    rows:[
      ["질문","당신은 누구인가?","무엇을 할 수 있나?"],
      ["시점","로그인 단계","로그인 이후"],
      ["예","아이디·비번 확인","관리자만 삭제 가능"],
      ["실패 시","로그인 거부","접근 거부"],
    ]
  },
  {
    title:"쿠키 vs 세션", a:"쿠키", b:"세션",
    rows:[
      ["저장 위치","내 브라우저","서버"],
      ["담는 것","식별 정보(열쇠)","로그인 상태 기록"],
      ["보안","상대적으로 약함","상대적으로 강함"],
      ["비유","손목 도장","회원 명부"],
    ]
  },
  {
    title:"Git vs GitHub", a:"Git", b:"GitHub",
    rows:[
      ["정체","버전 관리 도구","코드 저장·공유 서비스"],
      ["위치","내 컴퓨터","온라인(클라우드)"],
      ["역할","변경 이력·되돌리기","백업·협업"],
      ["비유","문서 버전 기록","구글 드라이브"],
    ]
  },
  {
    title:"클로드 vs 클로드 코드", a:"클로드(앱)", b:"클로드 코드",
    rows:[
      ["형태","대화형 채팅","터미널 작업 도구"],
      ["잘하는 것","설명·아이디어·학습","실제 파일 수정·구현"],
      ["파일 접근","제한적","내 컴퓨터 파일 직접"],
      ["언제","개념이 궁금할 때","코드를 바꿔야 할 때"],
    ]
  },
  {
    title:"프롬프트 vs RAG vs 파인튜닝", a:"방법", b:"특징",
    rows:[
      ["프롬프트","지시문으로 조정 — 가장 쉽고 빠름"],
      ["RAG","외부 자료 참고 — 최신·전용 정보에 강함"],
      ["파인튜닝","모델 재학습 — 비용·노력 큼, 최후 수단"],
    ], two:true
  },
  {
    title:"npm vs pip", a:"npm", b:"pip",
    rows:[
      ["언어","JavaScript","Python"],
      ["역할","패키지 설치·관리","패키지 설치·관리"],
      ["설정 파일","package.json","requirements.txt"],
      ["비유","JS 부품 가게","Python 부품 가게"],
    ]
  },
];

/* ===== 추천 로드맵 (입문 → 기초 → 심화) ===== */
const ROADMAP = [
  {
    name:"1단계 · 입문", tag:"코딩과 친해지기", color:"#6c8cff", icon:"🌱",
    intro:"용어와 큰 그림부터. 손으로 만들기 전에 '무엇이 무엇인지' 감을 잡습니다.",
    steps:[
      {title:"코딩의 큰 그림", desc:"프로그래밍 언어가 무엇이고 현장 용어가 무엇인지부터.", ids:["lang","devterms"]},
      {title:"파일과 문서 다루기", desc:"확장자·폴더 구조·마크다운·JSON 같은 기본 재료들.", ids:["fileext","folder","markdown","json"]},
      {title:"웹은 어떻게 움직이나", desc:"프론트/백엔드, HTML·CSS·JS, 서버와 클라이언트의 관계.", ids:["frontback","htmlcssjs","serverclient"]},
      {title:"AI와 함께 시작하기", desc:"클로드 코드로 첫발을 떼고, 요청을 잘하는 법을 익힙니다.", ids:["claudecode","claudediff","viberequest"]},
    ]
  },
  {
    name:"2단계 · 기초", tag:"직접 만들어보기", color:"#3ddc97", icon:"🛠️",
    intro:"화면을 그리고, 데이터를 주고받고, 도구를 손에 익히는 단계입니다.",
    steps:[
      {title:"화면 만들기 (UI)", desc:"UI/UX 감각과 와이어프레임·컴포넌트로 화면을 구성.", ids:["uiux","uiterms","wireframe","component"]},
      {title:"화면에 생명 넣기", desc:"상태·이벤트·폼·로딩 상태로 움직이는 화면을 만듭니다.", ids:["state","event","form","loading"]},
      {title:"데이터 주고받기", desc:"HTTP·API·REST·CRUD·데이터베이스로 서버와 대화.", ids:["http","api","rest","crud","db"]},
      {title:"개발 도구 익히기", desc:"터미널·Git·커밋·패키지 관리로 작업 환경을 갖춥니다.", ids:["terminal","git","commit","package"]},
      {title:"도구 시야 넓히기", desc:"코딩 도구 구분, 결과물 종류, 웹 도구 지도로 길을 잡습니다.", ids:["toolscompare","outputtypes","webmap"]},
    ]
  },
  {
    name:"3단계 · 심화", tag:"탄탄하게 다지기", color:"#b48aff", icon:"🚀",
    intro:"안전하고, 잘 짜여지고, 무너지지 않는 코드를 향해. AI도 깊이 이해합니다.",
    steps:[
      {title:"안전하게 만들기", desc:"로그인·인증/권한·쿠키·보안·유효성·환경변수.", ids:["login","authz","cookie","security","validation","env"]},
      {title:"좋은 구조로 짓기", desc:"설계도·아키텍처·결합도·의존성·책임분리·리팩토링.", ids:["blueprint","arch","coupling","dependency","responsibility","refactor","libframework"]},
      {title:"품질 지키기", desc:"테스트·디버깅·자주 만나는 에러로 안정성을 확보.", ids:["test","debug","errors"]},
      {title:"AI 깊이 이해하기", desc:"토큰·컨텍스트·MCP·RAG·파인튜닝·모델/양자화·에이전트.", ids:["token","contextmgmt","mcp","rag","finetune","modelperf","quant","agent","opensourceai","djangoreact"]},
    ]
  },
];

/* ===== 코드 실습 예제 (HTML/CSS/JS 즉시 미리보기) ===== */
const SNIPPETS = [
  {
    name:"① HTML 뼈대", concept:"htmlcssjs",
    hint:"제목·문단·버튼 같은 '구조'를 만드는 HTML입니다. 글자를 바꿔보세요.",
    challenge:"제목(h1)을 본인 이름으로 바꾸고, 목록(li) 항목을 하나 더 추가해 보세요.",
    solution:"<ul> 안에 <li>네 번째 항목</li> 처럼 li 한 줄을 더 넣으면 됩니다.",
    code:[
      '<h1>안녕하세요, 코드맵!</h1>',
      '<p>이것은 문단(paragraph)입니다.</p>',
      '<ul>',
      '  <li>HTML은 뼈대</li>',
      '  <li>CSS는 꾸밈</li>',
      '  <li>JavaScript는 움직임</li>',
      '</ul>',
      '<button>버튼이에요</button>'
    ].join("\n")
  },
  {
    name:"② CSS 꾸미기", concept:"htmlcssjs",
    hint:"같은 HTML도 CSS로 색·여백·모양이 달라집니다. 색상 값을 바꿔보세요.",
    challenge:"background를 #3ddc97로, border-radius를 30px로 바꿔보세요.",
    solution:"background: #3ddc97; 와 border-radius: 30px; 두 줄을 수정하면 됩니다.",
    code:[
      '<style>',
      '  .card {',
      '    background: #6c8cff;',
      '    color: white;',
      '    padding: 24px;',
      '    border-radius: 16px;',
      '    font-family: sans-serif;',
      '    text-align: center;',
      '  }',
      '</style>',
      '<div class="card">',
      '  <h2>CSS로 꾸민 카드</h2>',
      '  <p>background 색을 #3ddc97 로 바꿔보세요!</p>',
      '</div>'
    ].join("\n")
  },
  {
    name:"③ JS 이벤트·상태", concept:"event",
    hint:"버튼 클릭(이벤트)에 따라 숫자(상태)가 바뀝니다. +1 동작을 확인하세요.",
    challenge:"클릭할 때마다 2씩 올라가도록 고쳐보세요.",
    solution:"count = count + 1; 을 count = count + 2; 로 바꾸면 됩니다.",
    code:[
      '<button id="btn">좋아요 👍 <span id="n">0</span></button>',
      '<style>#btn{font-size:22px;padding:14px 22px;border-radius:12px;',
      '  border:none;background:#ff6b8a;color:#fff;cursor:pointer}</style>',
      '<script>',
      '  let count = 0;                       // 상태값',
      '  const n = document.getElementById("n");',
      '  document.getElementById("btn").onclick = () => {',
      '    count = count + 1;                 // 이벤트가 일어나면 상태 변경',
      '    n.textContent = count;             // 화면 갱신',
      '  };',
      '<\/script>'
    ].join("\n")
  },
  {
    name:"④ 폼과 유효성 검사", concept:"validation",
    hint:"입력값을 검사해 통과/실패 메시지를 보여줍니다. 짧은 비밀번호를 넣어보세요.",
    challenge:"통과 기준을 8자에서 4자 이상으로 바꿔보세요.",
    solution:"if (pw.length >= 8) 의 숫자 8을 4로 바꾸면 됩니다.",
    code:[
      '<input id="pw" type="text" placeholder="비밀번호(8자 이상)">',
      '<button id="ok">확인</button>',
      '<p id="msg"></p>',
      '<style>input,button{font-size:16px;padding:10px;margin:4px}',
      '#msg{font-weight:700}</style>',
      '<script>',
      '  document.getElementById("ok").onclick = () => {',
      '    const pw = document.getElementById("pw").value;',
      '    const msg = document.getElementById("msg");',
      '    if (pw.length >= 8) {',
      '      msg.textContent = "✅ 통과!"; msg.style.color = "green";',
      '    } else {',
      '      msg.textContent = "❌ 8자 이상 입력하세요"; msg.style.color = "crimson";',
      '    }',
      '  };',
      '<\/script>'
    ].join("\n")
  },
  {
    name:"⑤ 종합: 인사 카드", concept:"component",
    hint:"이름을 입력하면 화면이 바뀝니다. HTML·CSS·JS가 함께 동작하는 예입니다.",
    challenge:"인사 문구를 '환영합니다' 대신 '반가워요!'로 바꿔보세요.",
    solution:"마지막 줄의 '님, 환영합니다!' 부분을 '님, 반가워요!' 로 바꾸면 됩니다.",
    code:[
      '<div class="box">',
      '  <input id="name" placeholder="이름을 입력하세요">',
      '  <button id="go">인사하기</button>',
      '  <h2 id="hello">👋 여기에 인사가 나와요</h2>',
      '</div>',
      '<style>',
      '  .box{font-family:sans-serif;text-align:center;padding:20px}',
      '  input,button{font-size:16px;padding:10px;border-radius:8px;border:1px solid #ccc}',
      '  button{background:#6c8cff;color:#fff;border:none;cursor:pointer}',
      '  #hello{margin-top:18px;color:#6c8cff}',
      '</style>',
      '<script>',
      '  document.getElementById("go").onclick = () => {',
      '    const name = document.getElementById("name").value || "친구";',
      '    document.getElementById("hello").textContent = "👋 " + name + "님, 환영합니다!";',
      '  };',
      '<\/script>'
    ].join("\n")
  },
  {
    name:"⑥ 조건문 (if)", concept:"lang",
    hint:"조건에 따라 다른 결과를 보여줍니다. score 숫자를 바꿔 실행해 보세요.",
    challenge:"합격 기준 점수를 60에서 80으로 바꿔보세요.",
    solution:"score >= 60 의 숫자 60을 80으로 바꾸면 됩니다.",
    code:[
      '<h2 id="out"></h2>',
      '<style>h2{font-family:sans-serif}</style>',
      '<script>',
      '  const score = 75;                 // 이 숫자를 바꿔보세요',
      '  const out = document.getElementById("out");',
      '  if (score >= 60) {',
      '    out.textContent = score + "점 → 합격! 🎉";',
      '  } else {',
      '    out.textContent = score + "점 → 더 도전해요 💪";',
      '  }',
      '<\/script>'
    ].join("\n")
  },
  {
    name:"⑦ 반복으로 목록 만들기", concept:"component",
    hint:"같은 작업을 반복(for)해서 목록을 자동으로 만듭니다.",
    challenge:"과일을 하나 더 추가해 5개로 만들어 보세요.",
    solution:"fruits 배열 안에 항목을 하나 더(예: 포도) 넣으면 됩니다.",
    code:[
      '<ul id="list"></ul>',
      '<style>ul{font-family:sans-serif;font-size:18px}</style>',
      '<script>',
      '  const fruits = ["사과", "바나나", "딸기", "수박"];',
      '  const list = document.getElementById("list");',
      '  for (const f of fruits) {',
      '    list.innerHTML += "<li>" + f + "</li>";',
      '  }',
      '<\/script>'
    ].join("\n")
  },
  {
    name:"⑧ 가로 배치 (Flexbox)", concept:"uiterms",
    hint:"display:flex 로 박스를 가로로 나란히 배치합니다.",
    challenge:"flex-direction을 column 으로 바꿔 세로로 쌓아 보세요.",
    solution:".row 안에 flex-direction: column; 한 줄을 추가하면 됩니다.",
    code:[
      '<div class="row">',
      '  <div class="box">1</div>',
      '  <div class="box">2</div>',
      '  <div class="box">3</div>',
      '</div>',
      '<style>',
      '  .row{display:flex; gap:10px}',
      '  .box{background:#6c8cff; color:#fff; padding:24px;',
      '       border-radius:12px; font-size:22px; font-family:sans-serif}',
      '</style>'
    ].join("\n")
  },
];

/* ===== 퀴즈 ===== */
const QUIZ = [
  {q:"사용자가 보는 화면을 담당하는 영역은?",
   opts:["프론트엔드","백엔드","데이터베이스","터미널"],a:0,
   exp:"프론트엔드는 화면(보이는 곳), 백엔드는 뒤에서 처리하는 서버입니다."},
  {q:"API를 가장 잘 비유한 것은?",
   opts:["식당의 메뉴판","컴퓨터의 전원 버튼","파일 확장자","비밀번호"],a:0,
   exp:"API는 메뉴판처럼, 내부를 몰라도 정해진 방식으로 기능을 요청하게 해줍니다."},
  {q:"CRUD에 포함되지 않는 것은?",
   opts:["Connect(연결)","Create(생성)","Read(조회)","Delete(삭제)"],a:0,
   exp:"CRUD는 Create·Read·Update·Delete 네 가지 데이터 동작입니다."},
  {q:"'누구인지 확인'하는 것은 인증, 그렇다면 '무엇을 할 수 있는지'는?",
   opts:["권한","세션","쿠키","토큰"],a:0,
   exp:"인증(누구인가) 다음에 권한(무엇을 할 수 있나)을 확인합니다."},
  {q:"로그인 상태를 서버가 기억하는 것을 무엇이라 하나?",
   opts:["세션","HTML","커밋","컴포넌트"],a:0,
   exp:"세션은 서버 쪽 기록, 쿠키는 브라우저에 저장된 식별 정보입니다."},
  {q:"비밀 API 키를 안전하게 두는 방법은?",
   opts:["환경변수(.env)로 분리","코드에 직접 적기","깃허브에 공개","화면에 표시"],a:0,
   exp:"비밀키는 코드와 분리해 환경변수로 보관하고 깃허브에 올리지 않습니다."},
  {q:"Git과 GitHub의 관계로 옳은 것은?",
   opts:["Git은 도구, GitHub는 온라인 저장 서비스","같은 것","GitHub가 Git보다 먼저 나옴","둘 다 프로그래밍 언어"],a:0,
   exp:"Git은 버전 관리 도구, GitHub는 코드를 올려 공유하는 서비스입니다."},
  {q:"동작은 그대로 두고 코드 구조만 깔끔히 다듬는 일은?",
   opts:["리팩토링","디버깅","배포","컴파일"],a:0,
   exp:"리팩토링은 기능을 바꾸지 않고 코드를 정리하는 작업입니다."},
  {q:"토큰에 대한 설명으로 옳은 것은?",
   opts:["AI가 글을 처리하는 작은 단위","로그인 비밀번호","파일 확장자","서버의 종류"],a:0,
   exp:"토큰은 AI가 글을 처리하는 단위로, 사용량·비용의 기준이 됩니다."},
  {q:"RAG를 가장 잘 설명한 것은?",
   opts:["AI가 답하기 전 외부 자료를 찾아 참고","모델을 처음부터 다시 학습","화면을 꾸미는 기술","코드를 압축하는 기술"],a:0,
   exp:"RAG는 오픈북 시험처럼 관련 자료를 찾아 답변 근거로 활용합니다."},
  {q:"라이브러리와 프레임워크의 핵심 차이는?",
   opts:["제어의 주도권이 누구에게 있나","가격","만든 회사","파일 크기"],a:0,
   exp:"라이브러리는 내가 호출, 프레임워크는 틀이 내 코드를 호출합니다."},
  {q:"HTTP 상태 코드 404가 뜻하는 것은?",
   opts:["찾는 것이 없음","성공","서버 오류","권한 없음"],a:0,
   exp:"200 성공, 404 없음, 500 서버오류. 404는 자원을 못 찾은 경우입니다."},
  {q:"MVP(최소 기능 제품)의 핵심 아이디어는?",
   opts:["가장 작지만 동작하는 버전을 먼저 만든다","완벽할 때까지 출시하지 않는다","기능을 최대한 많이 넣는다","디자인부터 완성한다"],a:0,
   exp:"MVP는 핵심만 담아 빠르게 동작하는 버전을 먼저 만드는 전략입니다."},
  {q:"HTML·CSS·JavaScript의 역할을 바르게 짝지은 것은?",
   opts:["뼈대 · 꾸밈 · 움직임","움직임 · 뼈대 · 꾸밈","꾸밈 · 움직임 · 뼈대","모두 디자인"],a:0,
   exp:"HTML 구조(뼈대), CSS 디자인(꾸밈), JavaScript 동작(움직임)."},
  {q:"코드 조각들이 서로 강하게 얽혀 하나만 고쳐도 여러 곳이 깨지는 상태는?",
   opts:["결합도가 높다","결합도가 낮다","의존성이 없다","리팩토링됐다"],a:0,
   exp:"강한 결합은 수정이 어렵습니다. 느슨한 결합을 지향합니다."},
];
