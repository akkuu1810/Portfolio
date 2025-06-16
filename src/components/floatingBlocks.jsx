import { useEffect, useState } from "react";
import MinecraftBlock from "./minecraftBlock";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingBlocks({ count = 10, onReady }) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const newBlocks = Array.from({ length: count }).map(() => {
      const isLeft = Math.random() < 0.5;
      return {
        top: randomBetween(0, 90),
        left: isLeft ? randomBetween(0, 15) : randomBetween(85, 100),
        delay: randomBetween(0, 4),
        duration: randomBetween(3, 6),
        size: randomBetween(80, 140),
      };
    });
    setBlocks(newBlocks);
    if (onReady)
      onReady(
        newBlocks.map(({ top, left }) => ({
          top: `${top}vh`,
          left: `${left}vw`,
        }))
      );
  }, [count]);

  return (
    <>
      {blocks.map((block, i) => (
        <MinecraftBlock
          key={i}
          className="floating-block"
          style={{
            position: "fixed",
            top: `${block.top}vh`,
            left: `${block.left}vw`,
            animationDelay: `${block.delay}s`,
            animationDuration: `${block.duration}s`,
            width: `${block.size}px`,
            height: `${block.size}px`,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 9999,
          }}
        />
      ))}
    </>
  );
}
