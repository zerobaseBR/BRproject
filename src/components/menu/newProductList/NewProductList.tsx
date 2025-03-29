import * as S from '@/components/menu/newProductList/NewProductList.style';

import New1Image from '@/assets/images/menu/monthly-new-1.png';
import New2Image from '@/assets/images/menu/monthly-new-2.png';
import New3Image from '@/assets/images/menu/monthly-new-3.png';

const newProductListData = [
  {
    id: 1,
    name: '말랑 딸기 찹쌀떡',
    imageSrc: New1Image,
  },
  {
    id: 2,
    name: '딸기 크림치즈 모찌',
    imageSrc: New2Image,
  },
  {
    id: 3,
    name: '딸기 찹쌀떡 쉐이크',
    imageSrc: New3Image,
  },
];

export default function NewProductList() {
  return (
    <S.NewProductListContainer>
      <S.NewProductListTitle>이달의 신제품</S.NewProductListTitle>
      <S.NewProductsList>
        {newProductListData.map(newProduct => (
          <S.NewProductItem>
            <S.NewProductItemImageContainer>
              <S.NewProductItemImage>
                <img src={newProduct.imageSrc} alt={`${newProduct.name} 이미지`} />
              </S.NewProductItemImage>
            </S.NewProductItemImageContainer>
            <S.NewProductItemName></S.NewProductItemName>
          </S.NewProductItem>
        ))}
      </S.NewProductsList>
    </S.NewProductListContainer>
  );
}
