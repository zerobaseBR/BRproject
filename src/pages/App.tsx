import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from '@/style/GlobalStyles'
import MainPage from '@/pages/MainPage'
import MenuPage from '@/pages/MenuPage'
import BRplayPage from '@/pages/BRplayPage'

export default function App() {
  return (
<GlobalStyle>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/brplay" element={<BRplayPage />} />
      </Routes>
    </BrowserRouter>
	</GlobalStyle>
  )
}