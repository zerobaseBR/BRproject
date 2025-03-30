import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/style/theme';
import GlobalStyle from '@/style/GlobalStyles';
import MainPage from '@/pages/MainPage';
import MenuPage from '@/pages/MenuPage/index';
import MonthlyPage from '@/pages/MenuPage/MonthlyPage';
import BRplayPage from '@/pages/BRplayPage';
import Footer from '@/components/common/Footer';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <section style={{ fontFamily: 'NanumSquareNeo' }}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/menu/monthly" element={<MonthlyPage />} />
              <Route path="/brplay" element={<BRplayPage />} />
            </Routes>
            <Footer />
          </section>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
