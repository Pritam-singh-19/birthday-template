import { motion } from 'framer-motion'

import boyVideo from '../assets/videos/characters/boy.mp4'

import CinematicVideo from '../components/common/CinematicVideo'
import FadeIn from '../components/animations/FadeIn'
import StorySequence from '../components/animations/StorySequence'
import MouseParallax from '../components/animations/MouseParallax'

import FloatingParticles from '../components/common/FloatingParticles'
import RainEffect from '../components/common/RainEffect'
import FogEffect from '../components/common/FogEffect'
import MusicPlayer from '../components/common/MusicPlayer'

const Scene1_LonelyBoy = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center px-6">

      {/* Background Video */}
      <CinematicVideo
        src={boyVideo}
        overlay="bg-black/50"
      />

      {/* Music */}
      <MusicPlayer />

      {/* Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      {/* Rain */}
      <RainEffect />

      {/* Fog */}
      <FogEffect />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Moon Glow */}
      <motion.div
        className="absolute top-20 right-20 w-52 h-52 rounded-full bg-white blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      {/* Main Content */}
      <MouseParallax>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <FadeIn delay={0.5}>
            <p className="text-pink-300 uppercase tracking-[14px] text-sm mb-8">              Chapter One
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              The Lonely Boy
            </h1>
          </FadeIn>

            <FadeIn delay={2}>
              <div className="mt-16">

                <StorySequence
                  lines={[
                    'Long time ago...',
                    'there lived a stupid little boy.',
                    'He laughed loudly...',
                    'Roamed endlessly...',
                    'And never cared about tomorrow.',
                  ]}
                />

              </div>
            </FadeIn>

          {/* Scroll Indicator */}
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
                <p className="text-gray-400 text-xs md:text-sm tracking-[6px] uppercase mb-4">
                  The Story Begins
                </p>

            <div className="w-[2px] h-16 bg-gradient-to-b from-pink-400 to-transparent" />
          </motion.div>

        </div>
      </MouseParallax>

      {/* Final Overlay */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  )
}

export default Scene1_LonelyBoy