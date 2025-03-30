import { Link, useLocation } from 'react-router-dom';
import * as S from '@/components/common/navbar/Navbar.style';
import BRlogo from '@/assets/images/navbar/br_logo_white.png';
import userIcon from '@/assets/images/navbar/btn_user_menu_white.png';
import React, { useEffect, useRef, useState } from 'react';
import NavMenu from '../navbar/NavMenu';
import Search from '../navbar/Search';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const location = useLocation();
  const divRef = useRef<HTMLDivElement>(null);
  const home = location.pathname === '/';
  const navScroll = !home || isScroll;

  const toggleMenu = (e: React.MouseEvent) => {
    console.log(e.target);
    setOpenMenu(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    if (home) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [home]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (openMenu && divRef.current && !divRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenu]);

  return (
    <S.DivContainer>
      <S.NavbarContainer>
        <S.LeftSection>
          <h1>
            <Link to="/">
              <S.LogoIcon />
              {navScroll}
              <img src={BRlogo} alt="BR Logo" />
            </Link>
          </h1>

          <S.NavContainer onMouseLeave={() => setHoveredMenu(null)}>
            <S.Nav>
              <NavMenu hoveredMenu={hoveredMenu} setHoveredMenu={setHoveredMenu} />
            </S.Nav>
          </S.NavContainer>
        </S.LeftSection>

        <S.RightSection>
          <Search />
          <S.UserMenu ref={divRef}>
            <S.UserButton onClick={toggleMenu}>
              <img src={userIcon} alt="User" />
            </S.UserButton>
            {openMenu && (
              <S.UserContainer>
                <ul>
                  <S.UserMenuItem>Login</S.UserMenuItem>
                  <S.UserMenuItem>Join</S.UserMenuItem>
                  <S.UserMenuItem>CS Center</S.UserMenuItem>
                </ul>
              </S.UserContainer>
            )}
          </S.UserMenu>
        </S.RightSection>
      </S.NavbarContainer>
    </S.DivContainer>
  );
}
