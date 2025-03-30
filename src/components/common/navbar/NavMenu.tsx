import * as S from '@/components/common/navbar/Navbar.style';
import { MenuList } from '../../navMenuList';
import React from 'react';

type Props = {
  hoveredMenu: string | null;
  setHoveredMenu: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function NavMenu({ hoveredMenu, setHoveredMenu }: Props) {
  return (
    <S.NavItemWrapper>
      {MenuList.map(menu => (
        <S.NavItem key={menu.id} onMouseEnter={() => setHoveredMenu(menu.name)}>
          <S.StyledLink to={menu.path} $active={hoveredMenu === menu.name}>
            {menu.name}
          </S.StyledLink>

          {hoveredMenu === menu.name && (
            <S.SubMenuWrap>
              <S.SubMenu>
                {menu.submenu.map((group, i) => (
                  <S.SubMenuItem key={i}>
                    {group.category && <S.MenuCategory>{group.category}</S.MenuCategory>}
                    {group.items.map((item, idx) => (
                      <S.SubList key={idx}>
                        <S.SubLink to="/">{item}</S.SubLink>
                      </S.SubList>
                    ))}
                  </S.SubMenuItem>
                ))}
              </S.SubMenu>
            </S.SubMenuWrap>
          )}
        </S.NavItem>
      ))}
    </S.NavItemWrapper>
  );
}
