import confetti from 'canvas-confetti'
import { useEffect } from 'react'

import FloatingBalloons from './FloatingBalloons'
import HeartParticles from './HeartParticles'
import Fireworks from './Fireworks'

const FinalMessage = () => {
useEffect(() => {

  const duration = 8000
  const animationEnd = Date.now() + duration

  const interval = setInterval(() => {

    if (Date.now() > animationEnd) {
      clearInterval(interval)
      return
    }

    confetti({
      particleCount: 8,
      startVelocity: 30,
      spread: 360,
      ticks: 80,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.5,
      },
    })

  }, 150)

  return () => clearInterval(interval)

}, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
        <FloatingBalloons />
        <HeartParticles />
        <Fireworks />

      <h1 className="text-6xl md:text-8xl text-pink-300 font-black">
        Happy Birthday
      </h1>

      <h2 className="mt-8 text-7xl md:text-9xl text-white font-black">
        Ayushi ❤️
      </h2>

      <p className="mt-16 text-xl md:text-3xl text-white max-w-4xl leading-relaxed">
        Thank you for being my favorite person,
        my happiness,
        my safe place,
        and my home.
      </p>

      <p className="mt-12 text-xl md:text-3xl text-white max-w-4xl leading-relaxed">
        I don't know what the future looks like.
        <br />
        But I know one thing.
      </p>

      <h3 className="mt-12 text-4xl md:text-6xl text-pink-300 font-bold">
        I want you in it.
      </h3>

      <h1 className="mt-16 text-6xl md:text-8xl font-black text-white">
        Always.
      </h1>

      <p className="mt-20 text-2xl text-pink-300">
        I love you wifeeee ❤️
      </p>

      <p className="mt-4 text-lg text-white/70">
        Forever yours.
      </p>

    </div>
  )
}

export default FinalMessage