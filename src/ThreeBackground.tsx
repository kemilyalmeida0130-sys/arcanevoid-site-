import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0416, 0.05);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    const currentMount = mountRef.current; 
    currentMount.appendChild(renderer.domElement);

    // ELEMENTO 1: D20 CENTRAL
    const geometry = new THREE.IcosahedronGeometry(2, 0);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x9333ea, emissive: 0x4c1d95, roughness: 0.2, metalness: 0.8, wireframe: true 
    });
    const d20 = new THREE.Mesh(geometry, material);
    scene.add(d20);

    // ELEMENTO 2: ANEL ORBITAL
    const ringGeometry = new THREE.TorusGeometry(3.5, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.5 });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    // ELEMENTO 3: POEIRA CÓSMICA (PARTÍCULAS)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05, color: 0xd8b4fe, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // ILUMINAÇÃO
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0xa855f7, 150, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x3b82f6, 100, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      d20.rotation.x += 0.002;
      d20.rotation.y += 0.003;
      ring.rotation.z += 0.005;
      ring.rotation.y += 0.002;
      particlesMesh.rotation.y = time * 0.05;
      particlesMesh.rotation.x = time * 0.02;

      d20.rotation.x += (mouseY * 0.05 - d20.rotation.x) * 0.02;
      d20.rotation.y += (mouseX * 0.05 - d20.rotation.y) * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount) currentMount.removeChild(renderer.domElement);
      geometry.dispose(); material.dispose();
      ringGeometry.dispose(); ringMaterial.dispose();
      particlesGeometry.dispose(); particlesMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
}