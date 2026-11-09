import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0416, 0.03);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    const currentMount = mountRef.current; 
    currentMount.appendChild(renderer.domElement);

    // --- GRUPO CENTRAL ---
    const centralGroup = new THREE.Group();
    scene.add(centralGroup);

    // D20 CENTRAL
    const geometry = new THREE.IcosahedronGeometry(2.5, 0);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x9333ea, emissive: 0x4c1d95, roughness: 0.1, metalness: 0.9, wireframe: true 
    });
    const d20 = new THREE.Mesh(geometry, material);
    centralGroup.add(d20);

    // ANEL CENTRAL (VÓRTICE)
    const ringGeometry = new THREE.TorusGeometry(3.5, 0.05, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.6 });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    centralGroup.add(ring);

    // --- ESPADAS MÁGICAS FLUTUANTES (Octaedros esticados) ---
    const swords: THREE.Mesh[] = [];
    const swordGeo = new THREE.OctahedronGeometry(0.5, 0);
    const swordMat = new THREE.MeshStandardMaterial({ color: 0xd8b4fe, emissive: 0x4c1d95, metalness: 0.9, roughness: 0.1 });
    
    for (let i = 0; i < 6; i++) {
      const sword = new THREE.Mesh(swordGeo, swordMat);
      sword.scale.set(0.3, 3, 0.3); // Estica para parecer uma espada
      scene.add(sword);
      swords.push(sword);
    }

    // --- CRISTAIS DE ENERGIA ---
    const crystals: THREE.Mesh[] = [];
    const crystalGeo = new THREE.ConeGeometry(0.4, 1.5, 4);
    const crystalMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, emissive: 0x1d4ed8, wireframe: true });
    
    for (let i = 0; i < 8; i++) {
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      scene.add(crystal);
      crystals.push(crystal);
    }

    // --- CHÃO ESTELAR (GRID MÁGICO) ---
    const gridHelper = new THREE.GridHelper(30, 30, 0xa855f7, 0x1a1225);
    gridHelper.position.y = -5;
    scene.add(gridHelper);

    // --- POEIRA CÓSMICA ---
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 40;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05, color: 0xd8b4fe, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // LUZES
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0xa855f7, 300, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x3b82f6, 200, 100);
    pointLight2.position.set(-10, -10, 10);
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

      // Rotação do D20 Central
      d20.rotation.x += 0.005;
      d20.rotation.y += 0.008;
      ring.rotation.z += 0.01;
      ring.rotation.y += 0.005;
      
      // Animação das Espadas (Órbita rápida e giro)
      swords.forEach((sword, i) => {
        const angle = time * 0.5 + (i * Math.PI * 2) / swords.length;
        sword.position.x = Math.cos(angle) * 6;
        sword.position.z = Math.sin(angle) * 6;
        sword.position.y = Math.sin(time * 2 + i) * 2;
        
        sword.rotation.y = angle;
        sword.rotation.x = time + i;
      });

      // Animação dos Cristais (Órbita lenta no eixo Y)
      crystals.forEach((crystal, i) => {
        const angle = time * 0.3 + (i * Math.PI * 2) / crystals.length;
        crystal.position.x = Math.cos(angle) * 7;
        crystal.position.z = Math.sin(angle) * 7;
        crystal.position.y = Math.cos(time + i) * 3;
        
        crystal.rotation.y += 0.02;
        crystal.rotation.x += 0.01;
      });

      // Movimento do Grid
      gridHelper.position.z = (time * 2) % 1; // Faz o grid parecer que está vindo em nossa direção

      // Movimento das partículas
      particlesMesh.rotation.y = time * 0.05;

      // Parallax da câmera (movimento suave com o mouse)
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount) currentMount.removeChild(renderer.domElement);
      
      // Limpeza de memória
      geometry.dispose(); material.dispose(); ringGeometry.dispose(); ringMaterial.dispose();
      swordGeo.dispose(); swordMat.dispose(); crystalGeo.dispose(); crystalMat.dispose();
      particlesGeometry.dispose(); particlesMaterial.dispose(); gridHelper.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
}