import { useEffect, useRef } from "react";

interface ConstellationProps {
  color?: string;
}

const ConstellationCanvas: React.FC<ConstellationProps> = ({
  color = "rgba(255,255,255,0.3)",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Star {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
    }

    let stars: Star[] = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
      });

      connectStars();
    };

    const connectStars = () => {
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          let dx = stars[i].x - stars[j].x;
          let dy = stars[i].y - stars[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const updateStars = () => {
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;
      });

      drawStars();
      requestAnimationFrame(updateStars);
    };

    drawStars();
    updateStars();

    return () => {
      stars = [];
    };
  }, [color]);

  return <canvas ref={canvasRef} className="constellation"></canvas>;
};

export default ConstellationCanvas;
