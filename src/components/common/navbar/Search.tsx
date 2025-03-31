import searchIcon from '@/assets/images/navbar/search.png';

import * as S from '@/components/common/navbar/Search.style';
export default function Search() {
  return (
    <S.SearchContainer>
      <S.SearchInput />
      <S.SearchIcon src={searchIcon} alt="Search" />
    </S.SearchContainer>
  );
}
