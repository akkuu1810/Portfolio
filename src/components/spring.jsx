import { useEffect, useRef, useState } from "react";

export default function Spring({ fadeOut = false, onFadeOutEnd }) {
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let petals = [];

    for (let i = 0; i < 80; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 10 + 8,
        speedY: Math.random() * 1 + 0.5,
        drift: Math.random() * 1 - 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.01 - 0.005,
      });
    }

    const drawFlower = (x, y, size, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.fillStyle = "rgba(219, 112, 147, 0.75)"; // Pale Violet Red with 75% opacity

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(size / 2, -size / 2, 0, -size);
        ctx.quadraticCurveTo(-size / 2, -size / 2, 0, 0);
        ctx.rotate((Math.PI * 2) / 5);
        ctx.fill();
      }

      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      petals.forEach((p) => {
        drawFlower(p.x, p.y, p.size, p.rotation);
      });
    };

    const update = () => {
      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.drift;
        p.rotation += p.rotationSpeed;

        if (p.y > height) {
          p.y = -p.size;
          p.x = Math.random() * width;
        }
      });
    };

    let animationId;
    const animate = () => {
      draw();
      update();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (fadeOut) {
      setVisible(false);
      onFadeOutEnd?.();
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
