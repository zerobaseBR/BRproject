# BRproject

## 프로젝트 개요

BRproject는 배스킨라빈스 홈페이지의 UX/UI를 개선하기 위한 프로젝트입니다.  
React와 TypeScript를 기반으로 개발되었으며, Vite를 사용하여 빠르고 효율적인 개발 환경을 제공합니다.  
주요 목표는 사용자 경험을 향상시키고, 직관적이고 반응형 디자인을 구현하는 것입니다.

---

## 주요 기능

- **React Router**를 사용한 페이지 라우팅
- **styled-components**를 활용한 컴포넌트 스타일링
- **반응형 디자인**: 다양한 디바이스에서 최적화된 화면 제공
- **접근성 개선**: 웹 접근성 표준 준수
- **상태 관리**: React Context API를 활용한 전역 상태 관리

---

## 주요 라이브러리 및 도구 사용법

### 1. React Router

React Router를 사용하여 페이지 간 라우팅을 설정합니다.

```tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### 2. styled-components

CSS-in-JS 방식으로 스타일을 작성합니다.

```tsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export default Button;
```

### 3. ESLint와 Prettier

코드 스타일을 유지하고 린트를 실행합니다.

```bash
# ESLint 실행
npm run lint

# Prettier 실행
npm run format
```

---

## 컨벤션 규칙

### 1. 코드 스타일

- **Prettier**와 **ESLint**를 사용하여 코드 스타일을 유지합니다.
- 모든 파일은 `.prettierrc`와 `.eslintrc.js` 설정을 따릅니다.
- **Prettier 설정**:
  - 탭 너비: 2
  - 세미콜론: 항상 사용
  - 따옴표: 홑따옴표
  - 줄바꿈: LF
- **ESLint 규칙**:
  - `no-unused-vars`: 경고
  - `no-console`: 경고
  - `react-hooks/exhaustive-deps`: 경고
  - `jsx-a11y/alt-text`: 이미지 태그에 `alt` 속성 필수

### 2. 파일 및 폴더 구조

- **src**: 소스 코드의 루트 디렉토리
  - `components`: 재사용 가능한 컴포넌트
    - `common`: 공통 컴포넌트 (예: Navbar, Footer)
  - `pages`: 페이지 단위 컴포넌트
  - `style`: 전역 스타일 및 테마 설정
  - `vite-env.d.ts`: Vite 환경 타입 정의
  - `main.tsx`: 애플리케이션 진입점
- **public**: 정적 파일 (HTML, favicon 등)

### 3. 커밋 메시지

- 커밋 메시지는 다음 형식을 따릅니다:
  ```
  [타입]: 작업 내용
  ```
  - **타입**:
    - `feat`: 새로운 기능 추가
    - `fix`: 버그 수정
    - `docs`: 문서 수정
    - `style`: 코드 스타일 변경 (포맷팅, 세미콜론 등)
    - `refactor`: 코드 리팩토링
    - `test`: 테스트 추가 또는 수정
    - `chore`: 기타 변경 사항 (빌드, 설정 파일 수정 등)
  - 예: `feat: 메인 페이지 반응형 디자인 추가`

---

## 설치 및 실행

### 1. 프로젝트 클론

```bash
git clone https://github.com/zerobaseBR/BRproject.git
cd BRproject
```

### 2. 의존성 설치

```bash
npm install
```

- 위 명령어는 `package.json`에 정의된 모든 의존성을 설치합니다.
- 설치가 완료되면 `node_modules` 폴더가 생성됩니다.

### 3. 배포 사이트

- 애플리케이션은 아래 URL에서 확인할 수 있습니다:  
  [BRproject 배포 사이트](https://b-rproject.vercel.app/)

---

## 사용법

### 1. 개발 서버 실행

```bash
npm run dev
```

- Vite 개발 서버를 실행합니다.
- 브라우저에서 `http://localhost:5173`로 접속하여 애플리케이션을 확인할 수 있습니다.
- 코드 변경 시 자동으로 브라우저가 새로고침됩니다.

### 2. 빌드

```bash
npm run build
```

- 애플리케이션을 배포 가능한 상태로 빌드합니다.
- 빌드된 파일은 `dist` 폴더에 생성됩니다.

### 3. 린트 및 포맷팅

- **ESLint 실행**:
  ```bash
  npm run lint
  ```
  - 코드에서 린트 오류를 확인합니다.
- **Prettier 실행**:
  ```bash
  npm run format
  ```
  - 코드 스타일을 자동으로 포맷팅합니다.

---

## 디렉토리 구조

```
BRproject/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   ├── pages/
│   ├── style/
│   ├── vite-env.d.ts
│   └── main.tsx
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Git 협업 방법

### 1. 브랜치 전략

- **main**: 배포 가능한 안정적인 코드만 포함
- **develop**: 개발 중인 코드
- **feature/이름**: 새로운 기능 개발
- **fix/이름**: 버그 수정

### 2. 브랜치 생성 및 작업

```bash
# 브랜치 생성
git checkout -b feature/add-navbar

# 작업 후 커밋
git add .
git commit -m "feat: Add Navbar component"
```

### 3. 브랜치 푸시 및 Pull Request 생성

```bash
# 브랜치 푸시
git push origin feature/add-navbar

# GitHub에서 Pull Request 생성
```

### 4. Pull Request

- `main` 또는 `develop` 브랜치에 병합합니다.

### 5. Vercel 배포 비용 절감 방법

- Organization 레포(`zerobaseBR/BRproject`)에서 작업 후, `main` 브랜치에 푸시합니다.
- 개인 레포로 포크한 후, **Sync Fork** 버튼을 눌러 최신 변경 사항을 동기화합니다.
- 동기화 후 개인 레포에서 Vercel을 통해 자동으로 배포됩니다.

### 6. Pull Request 관리

- `main` 또는 `develop` 브랜치에서 변경 사항을 **Pull Request(PR)**로 병합합니다.
- 병합 후 동기화가 이루어지고, Vercel에서 자동 배포됩니다.

### 7. Husky와 lint-staged 설정

- **Husky**를 사용하여 Git pre-commit 훅을 설정합니다.
- 커밋 전에 `lint-staged`를 실행하여 코드 스타일을 자동으로 검사하고 수정합니다.
- 설정 방법:

  ```bash
  # Husky 설치
  npx husky install

  # pre-commit 훅 추가
  npx husky add .husky/pre-commit "npx lint-staged"
  ```

### 8. 충돌 해결

```bash
# 충돌 해결 후 병합
git merge main
```

---
