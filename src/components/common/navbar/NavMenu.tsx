import * as S from '@/components/common/navbar/NavMenu.style';
import { MenuList } from '../../navMenuList';
import { useState } from 'react';

export default function NavMenu() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <S.NavItemWrapper>
      {MenuList.map(menu => (
        <S.NavItem key={menu.id} onMouseEnter={() => setHoveredMenu(menu.name)}>
          <S.StyledLink to={menu.path}>{menu.name}</S.StyledLink>
          {hoveredMenu === menu.name && (
            <S.SubMenu>
              {menu.submenu.map((group, i) => (
                <ul key={i}>
                  {group.category && (
                    <li>
                      <strong>{group.category}</strong>
                    </li>
                  )}
                  {group.items.map((item, idx) => (
                    <S.SubList key={idx}>
                      <S.SubLink to="/">{item}</S.SubLink>
                    </S.SubList>
                  ))}
                </ul>
              ))}
            </S.SubMenu>
          )}
        </S.NavItem>
      ))}
    </S.NavItemWrapper>
  );
}
