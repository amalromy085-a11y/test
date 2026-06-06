import React from 'react';
import logoImg from '../assets/logo.png';

export default function NexigenLogo({ size = 32, glow = true }) {
  return (
    <img 
      src={logoImg} 
      alt="Nexigen Studios" 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
        filter: glow ? 'drop-shadow(0 0 10px rgba(0, 102, 255, 0.45))' : 'none',
        transition: 'transform 0.4s ease',
        display: 'inline-block',
        verticalAlign: 'middle'
      }}
    />
  );
}
