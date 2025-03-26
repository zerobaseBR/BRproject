// JavaScript 기본 권장 규칙 (const 사용, 비교, 중괄호 등)
import js from '@eslint/js';

// 브라우저 환경 글로벌 객체 (window, document 등)
import globals from 'globals';

// React 훅 관련 규칙 (useEffect, useCallback 등의 올바른 사용 검사)
import reactHooks from 'eslint-plugin-react-hooks';

// React Fast Refresh가 제대로 작동되도록 검사
import reactRefresh from 'eslint-plugin-react-refresh';

// TypeScript 관련 ESLint 설정 모음
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

// ESLint 전체 설정 내보내기
export default [
  // 첫 번째 인자: 무시할 파일/폴더
  {
    ignores: ['dist', 'node_modules'],
  },

  // 두 번째 인자: 검사 대상 및 규칙
  {
    files: ['**/*.{ts,tsx}'], // 검사할 파일 확장자
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2020, // 최신 ECMAScript 문법 사용
      globals: globals.browser, // 브라우저 환경 글로벌 변수 허용
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks, // React 훅 검사
      'react-refresh': reactRefresh, // Fast Refresh 검사
    },
    rules: {
      ...js.configs.recommended.rules, // JS 기본 규칙
      ...reactHooks.configs.recommended.rules, // TS 기본 규칙
      // 컴포넌트만 export 하도록 제한 (Fast Refresh 안정성 확보)
      ...tseslint.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // const export는 허용
      ],
    },
  },
];
