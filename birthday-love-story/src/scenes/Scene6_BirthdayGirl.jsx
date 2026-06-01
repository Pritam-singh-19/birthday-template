import { motion } from 'framer-motion'

import FadeIn from '../components/animations/FadeIn'
import StorySequence from '../components/animations/StorySequence'

import FloatingParticles from '../components/common/FloatingParticles'

const Scene6_BirthdayGirl = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-32 bg-gradient-to-b from-[#120814] via-[#2d1129] to-[#ffd6a5]">

      {/* Golden Glow */}
      <div className="absolute inset-0">

        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

      </div>

      {/* Particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Chapter */}
        <FadeIn delay={0.5}>
          <p className="uppercase tracking-[14px] text-yellow-100 text-sm mb-8">
            Chapter Six
          </p>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={1}>
          <h1 className="text-5xl md:text-8xl font-black text-white drop-shadow-[0_0_60px_rgba(255,215,0,0.8)]">
            The Day The Universe Celebrated
          </h1>
        </FadeIn>

        {/* Story Part 1 */}
        <FadeIn delay={2}>
          <div className="mt-20">
            <StorySequence
              lines={[
                'And then...',
                'came the most important day.',
                'The day that gave this world...',
                'you.',
              ]}
            />
          </div>
        </FadeIn>

        {/* Date Reveal */}
        <FadeIn delay={5}>
          <motion.h2
            className="mt-28 text-7xl md:text-[10rem] font-black text-yellow-300 drop-shadow-[0_0_70px_rgba(255,215,0,0.9)]"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            02 JULY
          </motion.h2>
        </FadeIn>

        {/* Story Part 2 */}
        <FadeIn delay={7}>
          <div className="mt-24">
            <StorySequence
              lines={[
                'The day the stars smiled.',
                'The day the flowers bloomed.',
                'The day the universe quietly decided...',
                'to send me my favorite person.',
              ]}
            />
          </div>
        </FadeIn>

        {/* Name Reveal */}
        <FadeIn delay={10}>
          <div className="mt-32">

            <p className="text-xl md:text-3xl text-white/80 mb-10">
              Because on this day...
            </p>

            <motion.h1
              className="text-7xl md:text-[11rem] font-black text-pink-300 drop-shadow-[0_0_80px_rgba(255,105,180,0.9)]"
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              AYUSHI
            </motion.h1>

            <p className="mt-10 text-2xl md:text-4xl text-white">
              was born.
            </p>

          </div>
        </FadeIn>

        {/* Birthday Message */}
        <FadeIn delay={13}>
          <div className="mt-32">
            <StorySequence
              lines={[
                'And today...',
                'the world celebrates you.',
                'But I celebrate your smile.',
                'your laugh.',
                'your kindness.',
                'your existence.',
              ]}
            />
          </div>
        </FadeIn>

        {/* Emotional Ending */}
        <FadeIn delay={16}>
          <motion.div
            className="mt-32"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Happy Birthday,
            </h2>

            <h1 className="mt-6 text-5xl md:text-8xl font-black text-pink-300">
              Ayushi ❤️
            </h1>
          </motion.div>
        </FadeIn>

        {/* Next Scene Teaser */}
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
          <p className="text-yellow-100 text-xs md:text-sm tracking-[6px] uppercase mb-4">
            But I Still Have One More Thing To Say...
          </p>

          <div className="w-[2px] h-16 bg-gradient-to-b from-yellow-300 to-transparent" />
        </motion.div>

      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

    </section>
  )
}

export default Scene6_BirthdayGirl