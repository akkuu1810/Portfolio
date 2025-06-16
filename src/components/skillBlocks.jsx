import React, { useEffect, useState } from "react";
import ReactBlock from "../assets/react.png";
import JSBlock from "../assets/js.png";
import "../styles/skillBlocks.scss";

const BLOCKS = [ReactBlock, JSBlock];

const FloatingBlock = ({ src, top, left, size, animation }) => (
  <img
    src={src}
    alt="tech block"
    className={`absolute animate-${animation} pointer-events-none`}
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: size,
      zIndex: 0,
    }}
  />
);

export default function FloatingBlocks3D({ count = 8 }) {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const generateBlocks = () =>
      Array.from({ length: count }).map(() => ({
        src: BLOCKS[Math.floor(Math.random() * BLOCKS.length)],
        top: Math.random() * 90,
        left: Math.random() * 90,
        size: `${40 + Math.random() * 40}px`,
        animation: ["float-slow", "float-medium", "float-fast"][
          Math.floor(Math.random() * 3)
        ],
      }));

    setBlocks(generateBlocks());
  }, [count]);

  return (
    <>
      {blocks.map((block, index) => (
        <FloatingBlock key={index} {...block} />
      ))}
    </>
  );
}
