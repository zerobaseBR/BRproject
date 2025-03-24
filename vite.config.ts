import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// __dirname을 ESM 환경에서도 사용 가능하게 만들어주는 유틸
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Vite 설정 내보내기
export default defineConfig({
  plugins: [
    // React 플러그인 + styled-components Babel 플러그인 포함
    react({
      babel: {
        plugins: [
          [
            'styled-components',  // styled-components 사용 시 설정
            {
              displayName: true,  // styled-components 디버깅 시 컴포넌트 이름 표시
              fileName: true,     // 생성된 클래스 이름에 파일명 포함 (가독성 향상)
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // @로 시작하는 경로는 src 폴더를 기준으로 해결
    },
  },
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
  },
})
