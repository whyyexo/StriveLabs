"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function Particles() {
  const ref = useRef<THREE.Points>(null)
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      positions.set([x, y, z], i * 3)
    }
    return positions
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  )
}

function AnimatedMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#ffffff" wireframe opacity={0.1} transparent />
    </mesh>
  )
}

function WireframeBox() {
  const boxRef = useRef<THREE.Mesh>(null)
  
  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.x -= delta * 0.15
      boxRef.current.rotation.z += delta * 0.1
    }
  })

  return (
    <mesh ref={boxRef} position={[-2, 0, -3]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#ffffff" wireframe opacity={0.1} transparent />
    </mesh>
  )
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Particles />
        <AnimatedMesh />
        <WireframeBox />
      </Canvas>
    </div>
  )
}

