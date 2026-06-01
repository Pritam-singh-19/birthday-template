import { motion } from 'framer-motion'

import coupleVideo from '../assets/videos/characters/couple.mp4'

import CinematicVideo from '../components/common/CinematicVideo'
import FadeIn from '../components/animations/FadeIn'
import StorySequence from '../components/animations/StorySequence'

import FloatingParticles from '../components/common/FloatingParticles'
import SunsetGlow from '../components/common/SunsetGlow'

const Scene4_ChangedMe = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-32">

      {/* Background Video */}
      <CinematicVideo
        src={coupleVideo}
        overlay="bg-orange-950/50"
      />

      {/* Sunset Glow */}
      <SunsetGlow />

      {/* Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        <FadeIn delay={0.5}>
          <p className="uppercase tracking-[14px] text-orange-200 text-sm mb-8">
            Chapter Four
          </p>
        </FadeIn>

        <FadeIn delay={1}>
          <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-[0_0_50px_rgba(255,183,77,0.8)]">
            You Changed Everything
          </h1>
        </FadeIn>

        {/* Story Intro */}
        <FadeIn delay={2}>
          <div className="mt-20">

            <StorySequence
              lines={[
                'Before you...',
                'I existed.',
                'After you...',
                'I started living.',
              ]}
            />

          </div>
        </FadeIn>

        {/* Emotional Transition */}
        <FadeIn delay={5}>
          <div className="mt-28">

            <StorySequence
              lines={[
                'Without you...',
                'this boy was just a boy.',
                'Lost.',
                'Careless.',
                'Wandering through life.',
              ]}
            />

          </div>
        </FadeIn>

        {/* Big Reveal */}
        <FadeIn delay={8}>
          <motion.div
            className="mt-36"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <h2 className="text-5xl md:text-8xl font-black text-white drop-shadow-[0_0_60px_rgba(255,255,255,0.8)]">
              But with you...
            </h2>

            <h3 className="mt-12 text-4xl md:text-7xl font-bold text-pink-300 drop-shadow-[0_0_40px_rgba(255,105,180,0.8)]">
              this boy became a man.
            </h3>

          </motion.div>
        </FadeIn>

        {/* Promise Section */}
        <FadeIn delay={10}>
          <div className="mt-32 space-y-10">

            <p className="text-xl md:text-3xl text-orange-100">
              A man who will protect your smile.
            </p>

            <p className="text-xl md:text-3xl text-orange-100">
              A man who will hold your hand through every storm.
            </p>

            <p className="text-xl md:text-3xl text-orange-100">
              A man who will choose you every single day.
            </p>

            <p className="text-xl md:text-3xl text-orange-100">
              A man who belongs only to you.
            </p>

          </div>
        </FadeIn>

        {/* Final Promise */}
        <FadeIn delay={12}>
          <div className="mt-32">

            <p className="text-2xl md:text-4xl text-white font-light leading-relaxed">
              And no matter what life brings...
            </p>

            <p className="mt-8 text-3xl md:text-5xl text-pink-300 font-bold">
              I will always choose you.
            </p>

          </div>
        </FadeIn>

        {/* Scene Ending */}
        <motion.div
          className="mt-32 flex flex-col items-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <p className="text-orange-200 text-xs md:text-sm tracking-[6px] uppercase mb-4">
            Some Promises Last Forever
          </p>

          <div className="w-[2px] h-16 bg-gradient-to-b from-orange-300 to-transparent" />
        </motion.div>

      </div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/20" />

    </section>
  )
}

export default Scene4_ChangedMe