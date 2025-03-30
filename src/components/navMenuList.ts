export interface Menu {
  id: number;
  name: string;
  path: string;
  submenu: SubmenuGroup[];
}

export interface SubmenuGroup {
  category?: string;
  items: string[];
}

export const MenuList: Menu[] = [
  {
    id: 1,
    name: 'Menu',
    path: '/menu',
    submenu: [
      {
        items: [
          '이달의 맛',
          '아이스크림',
          '프리팩',
          '아이스크림 케이크',
          '디저트',
          '음료',
          ' 커피',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'BR Play',
    path: '/brplay',
    submenu: [
      { category: '이벤트', items: ['프로모션', '제휴혜택'] },
      { category: 'BR Play', items: ['배라광장', 'BR 레시피', '마이플레이버리스트'] },
    ],
  },
  {
    id: 3,
    name: 'BR Story',
    path: '/story',
    submenu: [{ items: ['브랜드 스토리', '이달의 맛 히스토리', 'Be Better'] }],
  },
  {
    id: 4,
    name: 'Delivery / Store',
    path: '/store',
    submenu: [
      {
        category: 'Store',
        items: ['매장 찾기', '100flavor 플래그십스토어', '워크샵 by 배스킨라빈스', '점포개설문의'],
      },
      {
        category: 'Delivery',
        items: ['배달주문', '단체주문'],
      },
    ],
  },
];
