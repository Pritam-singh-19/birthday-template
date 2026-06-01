import { motion } from 'framer-motion'

import girlVideo from '../assets/videos/characters/girl.mp4'

import CinematicVideo from '../components/common/CinematicVideo'
import FadeIn from '../components/animations/FadeIn'
import StorySequence from '../components/animations/StorySequence'

import FloatingParticles from '../components/common/FloatingParticles'
import FlowerPetals from '../components/common/FlowerPetals'

const Scene2_SheArrived = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">

      {/* Background Video */}
      <CinematicVideo
        src={girlVideo}
        overlay="bg-pink-950/30"
      />

      {/* Pink Bloom Effect */}
      <motion.div
        className="absolute inset-0 bg-pink-400/10"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      {/* Warm Glow Background */}
      <div className="absolute inset-0">

        <motion.div
          className="absolute top-20 left-20 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

      </div>

      {/* Flower Petals */}
      <FlowerPetals />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        <FadeIn delay={0.5}>
          <p className="text-pink-200 uppercase tracking-[14px] text-sm mb-8 drop-shadow-[0_0_20px_rgba(255,192,203,0.8)]">
            Chapter Two
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight drop-shadow-[0_0_50px_rgba(255,192,203,0.8)]">
            She Arrived
          </h1>
        </FadeIn>

        <FadeIn delay={2}>
          <div className="mt-16">

            <StorySequence
              lines={[
                'And then...',
                '4 years later...',
                'a girl stepped into this world...',
                'Not to change the world...',
                'But to become his entire world.',
              ]}
            />

          </div>
        </FadeIn>

        {/* Movie Ending Indicator */}
        <motion.div
          className="mt-24 flex flex-col items-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <p className="text-pink-200 text-xs md:text-sm tracking-[6px] uppercase mb-4">
            Destiny Was Writing
          </p>

          <div className="w-[2px] h-16 bg-gradient-to-b from-pink-400 to-transparent" />
        </motion.div>

      </div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/15" />

    </section>
  )
}

export default Scene2_SheArrived