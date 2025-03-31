import { Link, useLocation } from 'react-router-dom';
import * as S from '@/components/common/navbar/Navbar.style';
import BRlogo from '@/assets/images/navbar/br_logo_white.png';
import BRlogoColor from '@/assets/images/navbar/br_logo.png';
import userIcon from '@/assets/images/navbar/user_menu_white.png';
import userIconColor from '@/assets/images/navbar/user_menu.png';
import hamburger from '@/assets/images/navbar/menu.png';
import React, { useEffect, useRef, useState } from 'react';
import NavMenu from '../navbar/NavMenu';
import Search from '../navbar/Search';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const location = useLocation();
  const divRef = useRef<HTMLDivElement>(null);
  const home = location.pathname === '/';
  const navScroll = !home || isScroll || isHover;

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
      <S.NavbarContainer
        $scrolled={navScroll}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <S.LeftSection>
          <h1>
            <Link to="/">
              <S.LogoIcon />
              {navScroll}
              <img src={navScroll ? BRlogo : BRlogoColor} alt="BR Logo" />
            </Link>
          </h1>

          <S.NavContainer onMouseLeave={() => setHoveredMenu(null)}>
            <NavMenu
              hoveredMenu={hoveredMenu}
              setHoveredMenu={setHoveredMenu}
              navScroll={navScroll}
            />
          </S.NavContainer>
        </S.LeftSection>

        <S.RightSection>
          <S.MobileMenuButton>
            <img src={hamburger} alt="hamburgermenu" />
          </S.MobileMenuButton>
          <Search />
          <S.UserMenu ref={divRef}>
            <S.UserButton onClick={toggleMenu}>
              <img src={navScroll ? userIcon : userIconColor} alt="User" />
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
