import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Drifting particle system that subtly reacts to mouse
function ParticleSystem({ count }) {
  const pointsRef = useRef(null);
  const tempParticles = useRef(null);

  useEffect(() => {
    tempParticles.current = new Float32Array(count * 3);
    // Initialize random positions
    for (let i = 0; i < count; i++) {
      tempParticles.current[i * 3] = (Math.random() - 0.5) * 25;
      tempParticles.current[i * 3 + 1] = (Math.random() - 0.5) * 25;
      tempParticles.current[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    if (pointsRef.current) {
      pointsRef.current.geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(tempParticles.current, 3)
      );
    }
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Rotate particle system slowly
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;

    // Subtly react to mouse position (only if not on mobile/touch screen)
    if (window.innerWidth > 768) {
      const { x, y } = state.pointer;
      pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, x * 0.4, 0.05);
      pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, y * 0.4, 0.05);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        color="#0066ff"
        size={0.05}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Floating geometric shapes with glassmorphism materials (optimized for mobile)
function FloatingGeometries({ isMobile }) {
  const shapesRef = useRef(null);

  useFrame((state) => {
    if (!shapesRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Custom slow rotations
    shapesRef.current.children.forEach((child, index) => {
      child.rotation.x = time * 0.04 * (index + 1);
      child.rotation.y = time * 0.025 * (index + 1);
    });
  });

  return (
    <group ref={shapesRef}>
      {/* Glass Octahedron (Always present but smaller on mobile) */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={isMobile ? [-2, -2, -5] : [-5, -2, -6]} scale={isMobile ? [0.6, 0.6, 0.6] : [1, 1, 1]}>
          <octahedronGeometry args={[1.5]} />
          <meshPhysicalMaterial
            color="#0066ff"
            roughness={0.15}
            metalness={0.2}
            transmission={0.8}
            thickness={1.5}
            transparent={true}
            opacity={0.35}
            clearcoat={0.8}
          />
        </mesh>
      </Float>

      {/* Floating sphere (Lightweight, present on mobile but repositioned) */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={isMobile ? [2, 3, -4] : [-3, 4, -4]} scale={isMobile ? [0.5, 0.5, 0.5] : [0.8, 0.8, 0.8]}>
          <sphereGeometry args={[1, 16, 16]} /> {/* Reduced segments on mobile */}
          <meshPhysicalMaterial
            color="#00a3ff"
            emissive="#002288"
            roughness={0.1}
            transmission={0.9}
            thickness={0.8}
            transparent={true}
            opacity={0.3}
          />
        </mesh>
      </Float>

      {/* Heavy shapes - Hidden on mobile to maintain 60 FPS */}
      {!isMobile && (
        <>
          {/* Large Torus */}
          <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
            <mesh position={[4, 2, -5]} scale={[1.1, 1.1, 1.1]}>
              <torusGeometry args={[1.4, 0.35, 12, 48]} />
              <meshPhysicalMaterial
                color="#00a3ff"
                roughness={0.1}
                transmission={0.9}
                thickness={1.2}
                transparent={true}
                opacity={0.3}
                clearcoat={1.0}
              />
            </mesh>
          </Float>

          {/* Torus Knot */}
          <Float speed={0.8} rotationIntensity={0.6} floatIntensity={1.0}>
            <mesh position={[3, -4, -7]} scale={[0.7, 0.7, 0.7]}>
              <torusKnotGeometry args={[1.1, 0.28, 80, 12]} />
              <meshPhysicalMaterial
                color="#0066ff"
                roughness={0.1}
                transmission={0.95}
                thickness={1.5}
                transparent={true}
                opacity={0.3}
              />
            </mesh>
          </Float>
        </>
      )}
    </group>
  );
}

// Controller to handle camera movements from mouse and scroll
function CameraController() {
  const scrollProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        scrollProgress.current = window.scrollY / docHeight;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    const progress = scrollProgress.current;

    // Mobile camera constraints (smaller movement offsets)
    const isMobile = window.innerWidth < 768;
    const { x, y } = state.pointer;

    const targetZ = 8 - progress * 13;
    const targetX = isMobile ? -progress * 2 : x * 1.2 - progress * 3;
    const targetY = isMobile ? -progress * 1.5 : y * 1.2 - progress * 2;

    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);

    // Look at center-ish
    state.camera.lookAt(new THREE.Vector3(0, -progress * 1.5, -3));
  });

  return null;
}

export default function ThreeBackground() {
  const [webGlSupported, setWebGlSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [particleCount, setParticleCount] = useState(700);

  useEffect(() => {
    // WebGL Check
    try {
      const canvas = document.createElement('canvas');
      const support = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      setWebGlSupported(support);
    } catch (e) {
      setWebGlSupported(false);
    }

    // Responsiveness Check
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setParticleCount(mobile ? 200 : 700);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!webGlSupported) {
    return (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          backgroundColor: '#ffffff',
          background: 'radial-gradient(circle at 80% 20%, rgba(0, 102, 255, 0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0, 102, 255, 0.04) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}
      />
    );
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundColor: '#ffffff',
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]} // Limit DPR to 1.5 for retina screens to avoid GPU bottlenecks
        gl={{ alpha: false, antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={['#ffffff']} />
        
        {/* Lights */}
        <ambientLight intensity={0.9} />
        
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, 10, -5]} intensity={2.0} color="#0066ff" />
        
        {/* Spot Light volumetrics */}
        <spotLight 
          position={[0, 5, -10]} 
          angle={0.6} 
          penumbra={1} 
          intensity={2.5} 
          color="#0066ff" 
          distance={20}
        />

        {/* 3D Elements */}
        <ParticleSystem count={particleCount} />
        <FloatingGeometries isMobile={isMobile} />
        
        {/* Camera Control */}
        <CameraController />
      </Canvas>
    </div>
  );
}
