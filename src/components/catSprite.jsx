// src/components/JumpingCat.jsx
import { useEffect, useState } from 'react';
import catSprite from '../assets/sprite.png';
import '../styles/catSprite.scss';

export default function CatSprite({ path = [] }) {
    
    const [positionIndex, setPositionIndex] = useState(0);
  
    useEffect(() => {
      if (path.length === 0) return;
      const interval = setInterval(() => {
        setPositionIndex(prev => (prev + 1) % path.length);
      }, 2000); // how often the cat jumps to the next block
      return () => clearInterval(interval);
    }, [path]);
  
    const frameWidth = 192;
    const frameHeight = 512; // half of 1024, since 2 rows
    const frameCount = 8;
    const framesPerRow = 4;
    
  
    const position = path[positionIndex] || { top: '50vh', left: '50vw' };
  
    return (
      <div
        className="sprite-cat"
        style={{
          position: 'fixed',
          top: position.top,
          left: position.left,
          width: `${frameWidth}px`,
          height: `${frameHeight}px`,
          backgroundImage: `url(${catSprite})`,
          animation: `cat-walk 1s steps(1) infinite`,
          backgroundSize: `${frameWidth * framesPerRow}px ${frameHeight * 2}px`,          
          zIndex: 9999,
          pointerEvents: 'none',
          transform: 'scale(0.50)',
          overflow: 'hidden',

        }}
      />
    );
  }
  
