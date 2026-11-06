import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0416, 0.03);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    const currentMount = mountRef.current; 
    currentMount.appendChild(renderer.domElement);

    // D20 PRINCIPAL
    const geometry = new THREE.IcosahedronGeometry(2, 0);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x9333ea, emissive: 0x4c1d95, roughness: 0.2, metalness: 0.8, wireframe: true 
    });
    const d20 = new THREE.Mesh(geometry, material);
    scene.add(d20);

    // D20s MENORES ORBITANDO
    const miniDice: THREE.Mesh[] = [];
    const miniMat = new THREE.MeshStandardMaterial({ color: 0xd8b4fe, emissive: 0x9333ea, wireframe: true });
    for (let i = 0; i < 6; i++) {
      const miniGeo = new THREE.IcosahedronGeometry(0.3, 0);
      const mini = new THREE.Mesh(miniGeo, miniMat);
      scene.add(mini);
      miniDice.push(mini);
    }

    // ANEL MÁGICO (VÓRTICE)
    const ringGeometry = new THREE.TorusKnotGeometry(4, 0.05, 128, 8, 2, 3);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.2 });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    scene.add(ring);

    // PARTÍCULAS
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05, color: 0xa855f7, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // LUZES
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0xa855f7, 200, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

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

      // Rotações centrais
      d20.rotation.x += 0.001;
      d20.rotation.y += 0.002;
      ring.rotation.x += 0.0005;
      ring.rotation.y += 0.001;
      
      // Movimento dos mini dados orbitando
      miniDice.forEach((mini, index) => {
        mini.position.x = Math.cos(time + index * 1.5) * 4;
        mini.position.y = Math.sin(time + index * 1.5) * 2.5;
        mini.position.z = Math.sin(time * 0.5 + index) * 2;
        mini.rotation.x += 0.02;
        mini.rotation.y += 0.03;
      });

      particlesMesh.rotation.y = time * 0.05;

      // Efeito mouse
      d20.rotation.x += (mouseY * 0.05 - d20.rotation.x) * 0.05;
      d20.rotation.y += (mouseX * 0.05 - d20.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount) currentMount.removeChild(renderer.domElement);
      geometry.dispose(); material.dispose(); ringGeometry.dispose();
      ringMaterial.dispose(); particlesGeometry.dispose(); particlesMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
}