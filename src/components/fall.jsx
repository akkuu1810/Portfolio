import { useEffect, useRef, useState } from "react";

export default function Fall({ fadeOut = false }) {
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let leaves = [];

    for (let i = 0; i < 80; i++) {
      leaves.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 20 + 20,
        speedY: Math.random() * 1 + 0.5,
        angle: Math.random() * 360,
        rotationSpeed: Math.random() * 2 - 1,
        color: `hsl(${Math.random() * 30 + 20}, 80%, 50%)`,
      });
    }

    const drawLeaf = (ctx, size) => {
      const lobe = size / 3;
      ctx.beginPath();
      ctx.moveTo(0, 0);

      // Left lobe
      ctx.bezierCurveTo(
        -lobe * 1.5,
        -lobe * 0.5,
        -lobe * 1.5,
        -lobe * 2,
        0,
        -lobe * 1.5
      );

      // Right lobe
      ctx.bezierCurveTo(lobe * 1.5, -lobe * 2, lobe * 1.5, -lobe * 0.5, 0, 0);

      // Bottom tip
      ctx.bezierCurveTo(-lobe * 0.2, lobe * 0.5, lobe * 0.2, lobe * 0.5, 0, 0);

      ctx.closePath();
      ctx.fill();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      leaves.forEach((leaf) => {
        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate((leaf.angle * Math.PI) / 180);
        ctx.fillStyle = leaf.color;
        drawLeaf(ctx, leaf.size);
        ctx.restore();
      });
    };

    const update = () => {
      leaves.forEach((leaf) => {
        leaf.y += leaf.speedY;
        leaf.angle += leaf.rotationSpeed;
        if (leaf.y > height + leaf.size) {
          leaf.y = -leaf.size;
          leaf.x = Math.random() * width;
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

    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleTransitionEnd = () => {
    if (fadeOut) setVisible(false);
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
