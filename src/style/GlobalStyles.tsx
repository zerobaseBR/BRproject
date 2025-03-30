import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /*
    🌐 modern-css-reset 기반 Global Style
    참고: https://github.com/hankchizljaw/modern-css-reset

    기본 reset 이후 실제 프로젝트에서 필요한
    유용한 스타일들만 직접 추가해서 구성
  */

  /* 🧱 모든 요소에 box-sizing 적용 (이미 modern-css-reset에 포함됨, 중복 방지용 생략 가능) */
  /* *, *::before, *::after {
    box-sizing: border-box;
  } */

  /* 🎨 디자인 시스템 기본값 지정 */
  :root {
    font-family: system-ui, sans-serif;
    font-size: 16px;
    color: #111;
    background-color: #fff;
  }

  /* 🧍‍♂️ Body 기본 설정 */
  body {
    margin: 0;
    min-width: 320px;              /* 모바일 대응 최소 너비 */
    min-height: 100vh;             /* 화면 최소 높이 */
    background-color: #fff;        /* 기본 배경색 */
    color: #111;                   /* 기본 텍스트 색상 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: inherit;
  }

  /* 🔗 링크 스타일 초기화 */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* 🖱 버튼 기본 스타일 제거 + 포인터 커서 설정 */
  button {
    all: unset;     /* border, background, padding 등 전부 제거 */
    cursor: pointer;
  }

  /* ⌨️ 인풋 요소들 스타일 제거 + 폰트 상속 */
  input, textarea {
    all: unset;
    font: inherit;
  }

  /* 🖼 이미지 및 비디오 반응형 설정 */
  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }

    /* 🎯 리스트 스타일 제거 */
    ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

    /* 📝 p 태그 기본 마진 제거 */
    p {
    margin: 0;
  }

  /* 🧩 헤딩 태그 기본 스타일 제거 */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

`;

export default GlobalStyle;
