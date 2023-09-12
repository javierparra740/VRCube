import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import logo from "./logo.svg"

function VRScene() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight,0.1,700);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);
    const geometria = new THREE.BoxGeometry();
    const geometria1 = new THREE.CircleGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const material1 = new THREE.MeshDepthMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometria, material);
    const geometria2 = new THREE.SphereGeometry(1, 32, 32); // Crea una esfera
    const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff65 });
    const ball = new THREE.Mesh(geometria2, material2);

    scene.add(ball);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.05;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div ref={sceneRef}></div>
  );
}

export default VRScene;