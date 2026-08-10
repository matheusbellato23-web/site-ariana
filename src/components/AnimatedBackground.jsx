import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // CMYK Color Orbs
    const particles = [
      { x: width * 0.2, y: height * 0.2, vx: 0.4, vy: 0.3, radius: 280, color: 'rgba(0, 160, 233, 0.12)' }, // Cyan
      { x: width * 0.8, y: height * 0.4, vx: -0.3, vy: 0.4, radius: 320, color: 'rgba(230, 0, 126, 0.10)' }, // Magenta
      { x: width * 0.4, y: height * 0.8, vx: 0.5, vy: -0.2, radius: 300, color: 'rgba(255, 237, 0, 0.14)' }, // Yellow
      { x: width * 0.7, y: height * 0.85, vx: -0.4, vy: -0.3, radius: 250, color: 'rgba(0, 160, 233, 0.08)' }  // Cyan secondary
    ];

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render floating fluid CMYK gradients
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x - p.radius < 0 || p.x + p.radius > width) p.vx *= -1;
        if (p.y - p.radius < 0 || p.y + p.radius > height) p.vy *= -1;

        // Subtle attraction to mouse cursor
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        p.x += dx * 0.0005;
        p.y += dy * 0.0005;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
