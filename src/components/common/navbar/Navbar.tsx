import { Link } from 'react-router-dom';
import * as S from '@/components/common/navbar/Navbar.style';
import BRlogo from '@/assets/images/navbar/br_logo_white.png';
import userIcon from '@/assets/images/navbar/btn_user_menu_white.png';
import { useState } from 'react';
import NavMenu from '../navbar/NavMenu';
import Search from '../navbar/Search';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(prev => !prev);
  };

  return (
    <S.NavbarContainer>
      <S.LeftSection>
        <h1>
          <Link to="/">
            <img src={BRlogo} alt="BR Logo" />
          </Link>
        </h1>
        <S.NavContainer>
          <S.Nav>
            <NavMenu />
          </S.Nav>
        </S.NavContainer>
      </S.LeftSection>

      <S.RightSection>
        <Search />
        <S.UserMenu>
          <button onClick={toggleMenu}>
            <img src={userIcon} alt="User" />
          </button>
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
  );
}
