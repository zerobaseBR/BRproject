import searchIcon from '@/assets/images/navbar/search.png';
import searchIconColor from '@/assets/images/navbar/search_color.png';

type Props = {
  navScroll: boolean;
};

import * as S from '@/components/common/navbar/Search.style';
export default function Search({ navScroll }: Props) {
  return (
    <S.SearchContainer $scrolled={navScroll}>
      <S.SearchInput />
      <S.SearchIcon src={navScroll ? searchIcon : searchIconColor} alt="Search" />
    </S.SearchContainer>
  );
}
