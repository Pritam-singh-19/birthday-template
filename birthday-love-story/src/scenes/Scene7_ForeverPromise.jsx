import { motion } from 'framer-motion'

import FadeIn from '../components/animations/FadeIn'
import StorySequence from '../components/animations/StorySequence'

import FloatingParticles from '../components/common/FloatingParticles'

const Scene7_ForeverPromise = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-32 bg-gradient-to-b from-[#fff1e6] via-[#ffd6a5] to-[#ffb4a2]">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.08, 1],
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
          <p className="uppercase tracking-[14px] text-orange-700 text-sm mb-8">
            Chapter Seven
          </p>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={1}>
          <h1 className="text-5xl md:text-8xl font-black text-[#4a2c2a]">
            Forever, If You'll Let Me
          </h1>
        </FadeIn>

        {/* Part 1 */}
        <FadeIn delay={2}>
          <div className="mt-20">
            <StorySequence
              lines={[
                'If I could choose again...',
                'I would still choose you.',
                'In every lifetime.',
                'In every universe.',
                'In every version of my story.',
              ]}
            />
          </div>
        </FadeIn>

        {/* Part 2 */}
        <FadeIn delay={5}>
          <div className="mt-28">
            <StorySequence
              lines={[
                'I would still fall for your smile.',
                'your laugh.',
                'your silly little habits.',
                'and the way you make everything feel like home.',
              ]}
            />
          </div>
        </FadeIn>

        {/* Part 3 */}
        <FadeIn delay={8}>
          <div className="mt-28">
            <StorySequence
              lines={[
                'I promise to listen.',
                'I promise to stay.',
                'I promise to keep trying.',
                'Even on difficult days.',
                'Especially on difficult days.',
              ]}
            />
          </div>
        </FadeIn>

        {/* Part 4 */}
        <FadeIn delay={11}>
          <div className="mt-28">
            <StorySequence
              lines={[
                'I cannot promise a perfect life.',
                'But I can promise...',
                'you will never face life alone.',
              ]}
            />
          </div>
        </FadeIn>

        {/* Main Promise */}
        <FadeIn delay={14}>
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
            <h2 className="text-4xl md:text-6xl text-[#4a2c2a] font-light">
              As long as I exist...
            </h2>

            <h3 className="mt-12 text-2xl md:text-4xl text-[#4a2c2a]/90 leading-relaxed">
              you will always have someone
              <br />
              who believes in you,
              <br />
              supports you,
              <br />
              and loves you
              <br />
              with his whole heart.
            </h3>
          </motion.div>
        </FadeIn>

        {/* Final Reveal */}
        <FadeIn delay={17}>
          <motion.div
            className="mt-36"
            animate={{
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <p className="text-2xl md:text-4xl text-[#4a2c2a]/80 mb-8">
              And that someone...
            </p>

            <h1 className="text-6xl md:text-9xl font-black text-[#4a2c2a]">
              is me.
            </h1>
          </motion.div>
        </FadeIn>

        {/* Ending */}
        <FadeIn delay={20}>
          <div className="mt-36">

            <p className="text-2xl md:text-4xl text-[#4a2c2a]/80">
              So before this night ends...
            </p>

            <p className="mt-8 text-4xl md:text-6xl font-bold text-pink-500">
              I have one final surprise for you.
            </p>

          </div>
        </FadeIn>

        {/* Scroll Indicator */}
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
          <p className="text-[#4a2c2a] text-xs md:text-sm tracking-[6px] uppercase mb-4">
            One Last Memory Awaits
          </p>

          <div className="w-[2px] h-16 bg-gradient-to-b from-[#4a2c2a] to-transparent" />
        </motion.div>

      </div>

    </section>
  )
}

export default Scene7_ForeverPromise