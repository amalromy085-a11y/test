import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Keep track of cursor coordinates
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
      if (isHidden) setIsHidden(false);
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Animation loop for smooth trailing ring
    let animationFrameId;
    const updatePosition = () => {
      // Direct update for dot
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseCoords.current.x}px`;
        dotRef.current.style.top = `${mouseCoords.current.y}px`;
      }

      // Smooth interpolation for ring
      const ease = 0.15; // interpolation factor
      ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * ease;
      ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringCoords.current.x}px`;
        ringRef.current.style.top = `${ringCoords.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    // Event listeners to handle interactive states (links, buttons, inputs)
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.interactive-item') ||
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA';

      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHidden]);

  if (isHidden) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className="custom-cursor" 
        style={{
          transform: `translate(-50%, -50%) scale(${isHovered ? 2.5 : 1})`,
          backgroundColor: isHovered ? '#0066ff' : '#ffffff',
          mixBlendMode: isHovered ? 'normal' : 'difference',
        }}
      />
      <div 
        ref={ringRef} 
        className="custom-cursor-ring"
        style={{
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          borderColor: isHovered ? '#0066ff' : 'rgba(15, 23, 42, 0.2)',
          boxShadow: isHovered ? '0 0 15px rgba(0, 102, 255, 0.5)' : 'none',
          backgroundColor: isHovered ? 'rgba(0, 102, 255, 0.05)' : 'transparent',
        }}
      />
    </>
  );
}
