// 탭 타입 정의
export type TabType = 'store' | 'story';

// 이미지 로딩 상태 타입
export interface ImageLoadState {
  store: boolean;
  story: boolean;
}

// 호버 상태 타입
export interface HoverState {
  store: boolean;
  story: boolean;
}
