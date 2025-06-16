import { useEffect, useRef, useState } from "react";

export default function Snowfall({ fadeOut = false }) {
  const canvasRef = useRef(null);
  const snowflakes = useRef([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    for (let i = 0; i < 150; i++) {
      snowflakes.current.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 4 + 1,
        d: Math.random() * 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();

      for (let i = 0; i < snowflakes.current.length; i++) {
        const f = snowflakes.current[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
      }

      ctx.fill();
      update();
    };

    let angle = 0;
    const update = () => {
      angle += 0.01;
      for (let i = 0; i < snowflakes.current.length; i++) {
        const f = snowflakes.current[i];
        f.y += Math.cos(f.d) + 1 + f.r / 2;
        f.x += Math.sin(angle) * 2;

        if (f.y > height) {
          f.y = 0;
          f.x = Math.random() * width;
        }
      }
    };

    let animationId;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (fadeOut) {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <canvas
      ref={canvasRef}
      onTransitionEnd={handleTransitionEnd}
      className={`fixed top-0 left-0 z-0 pointer-events-none transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
