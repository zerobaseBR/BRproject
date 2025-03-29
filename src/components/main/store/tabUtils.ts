import React from 'react';

/**
 * 안전한 setInterval 함수 - 참조를 저장하고 클린업 함수를 반환합니다.
 * @param callback 실행할 콜백 함수
 * @param delay 지연 시간 (밀리초)
 * @param ref 타이머 ID를 저장할 ref 객체
 * @returns 타이머 정리 함수
 */
export function safeSetInterval(
  callback: () => void,
  delay: number,
  ref: React.MutableRefObject<number | null>
): () => void {
  // 기존 타이머가 있으면 정리
  if (ref.current !== null) {
    clearInterval(ref.current);
  }

  // 새 타이머 설정 및 ref에 저장
  ref.current = window.setInterval(callback, delay) as unknown as number;

  // 클린업 함수 반환
  return () => {
    if (ref.current !== null) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };
}

/**
 * 안전한 setTimeout 함수 - 참조를 저장하고 클린업 함수를 반환합니다.
 * @param callback 실행할 콜백 함수
 * @param delay 지연 시간 (밀리초)
 * @param ref 타이머 ID를 저장할 ref 객체
 * @returns 타이머 정리 함수
 */
export function safeSetTimeout(
  callback: () => void,
  delay: number,
  ref: React.MutableRefObject<number | null>
): () => void {
  // 기존 타이머가 있으면 정리
  if (ref.current !== null) {
    clearTimeout(ref.current);
  }

  // 새 타이머 설정 및 ref에 저장
  ref.current = window.setTimeout(callback, delay) as unknown as number;

  // 클린업 함수 반환
  return () => {
    if (ref.current !== null) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };
}
