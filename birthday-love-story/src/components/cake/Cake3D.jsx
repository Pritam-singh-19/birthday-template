import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

const Flame = ({ position }) => {
  const flameRef = useRef()

  useFrame((state) => {
    if (flameRef.current) {
      flameRef.current.scale.y =
        1 + Math.sin(state.clock.elapsedTime * 8) * 0.15

      flameRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 6) * 0.03
    }
  })

  return (
    <mesh ref={flameRef} position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#ffb300" />
    </mesh>
  )
}

const Candle = ({ position }) => {
  return (
    <group>

      {/* Candle */}
      <mesh position={position}>
        <cylinderGeometry args={[0.05, 0.05, 0.6, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Flame */}
      <Flame
        position={[
          position[0],
          position[1] + 0.4,
          position[2],
        ]}
      />

    </group>
  )
}

const Cake = () => {
  const cakeRef = useRef()

  useFrame(() => {
    if (cakeRef.current) {
      cakeRef.current.rotation.y += 0.003
    }
  })

  return (
    <group ref={cakeRef}>

      {/* Bottom Cake */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[2.8, 2.8, 1.3, 64]} />
        <meshStandardMaterial color="#ffd6e7" />
      </mesh>

      {/* Frosting Ring */}
      <mesh position={[0, -0.55, 0]}>
        <torusGeometry args={[2.7, 0.12, 16, 100]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Middle Cake */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[2, 2, 1.1, 64]} />
        <meshStandardMaterial color="#fff3d6" />
      </mesh>

      {/* Frosting Ring */}
      <mesh position={[0, 0.75, 0]}>
        <torusGeometry args={[1.95, 0.1, 16, 100]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Top Cake */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[1.3, 1.3, 0.9, 64]} />
        <meshStandardMaterial color="#ffe7f4" />
      </mesh>

      {/* Top Frosting */}
      <mesh position={[0, 2, 0]}>
        <torusGeometry args={[1.25, 0.08, 16, 100]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Heart Topper */}
      <mesh position={[0, 2.8, 0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial
          color="#ff69b4"
          emissive="#ff1493"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Candles */}
      <Candle position={[-0.6, 2.3, 0]} />
      <Candle position={[0.6, 2.3, 0]} />
      <Candle position={[0, 2.3, 0.6]} />
      <Candle position={[0, 2.3, -0.6]} />
      <Candle position={[0, 2.3, 0]} />

    </group>
  )
}

const Cake3D = ({ onLightCandles }) => {
  return (
    <div className="h-screen w-full relative">

      <Canvas camera={{ position: [0, 3, 8] }}>

        <ambientLight intensity={2.5} />

        <pointLight
          position={[5, 8, 5]}
          intensity={4}
        />

        <pointLight
          position={[-5, 8, -5]}
          intensity={2}
          color="#ff69b4"
        />

        <Cake />

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
        />

      </Canvas>

      {/* Heading */}

      <div className="absolute top-12 w-full text-center">

        <h1 className="text-5xl md:text-7xl font-black text-pink-300">
          Happy Birthday
        </h1>

        <h2 className="mt-4 text-4xl md:text-6xl text-white font-bold">
          Ayushi ❤️
        </h2>

      </div>

      {/* Button */}

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">

        <button
          onClick={onLightCandles}
          className="
            px-10
            py-5
            rounded-full
            bg-pink-500
            hover:bg-pink-400
            transition-all
            text-white
            text-xl
            font-semibold
            shadow-[0_0_40px_rgba(255,105,180,0.7)]
          "
        >
          Light Candles ✨
        </button>

      </div>

    </div>
  )
}

export default Cake3D