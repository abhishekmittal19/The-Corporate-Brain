import { useEffect, useRef } from 'react';

export default function Sparkline({ points = [], color = '#3b82f6', width = 64, height = 32 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !points.length) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    const xStep = width / (points.length - 1);
    const yMax = Math.max(...points);
    const yMin = Math.min(...points);
    const yRange = yMax - yMin || 1;

    points.forEach((p, i) => {
      const x = i * xStep;
      const y = height - ((p - yMin) / yRange) * (height - 6) - 3;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Subtle area gradient fill
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, `${color}33`);
    grad.addColorStop(1, `${color}00`);
    ctx.fillStyle = grad;
    ctx.fill();
  }, [points, color, width, height]);

  return <canvas ref={canvasRef} className="absolute bottom-3 right-3" />;
}
