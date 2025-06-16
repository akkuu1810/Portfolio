import { useEffect } from 'react';
import cursorImg from '../assets/custom-cursor.png';

export default function useCustomCursor() {
  useEffect(() => {
    const cursorUrl = `url(${cursorImg}), auto`;
    document.body.style.cursor = cursorUrl;

    return () => {
      document.body.style.cursor = 'auto'; // reset on unmount
    };
  }, []);
}
