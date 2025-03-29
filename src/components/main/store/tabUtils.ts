import React from 'react';

export function safeSetInterval(
  callback: () => void,
  delay: number,
  ref: React.MutableRefObject<number | null>
): () => void {
  if (ref.current !== null) {
    clearInterval(ref.current);
  }

  ref.current = window.setInterval(callback, delay) as unknown as number;

  return () => {
    if (ref.current !== null) {
      clearInterval(ref.current);
      ref.current = null;
    }
  };
}

export function safeSetTimeout(
  callback: () => void,
  delay: number,
  ref: React.MutableRefObject<number | null>
): () => void {
  if (ref.current !== null) {
    clearTimeout(ref.current);
  }

  ref.current = window.setTimeout(callback, delay) as unknown as number;

  return () => {
    if (ref.current !== null) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };
}
