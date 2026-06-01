import { motion } from 'framer-motion'

import FadeIn from '../components/animations/FadeIn'
import MouseParallax from '../components/animations/MouseParallax'
import StorySequence from '../components/animations/StorySequence'

import StarField from '../components/common/StarField'
import ConstellationLines from '../components/common/ConstellationLines'
import CosmicGlow from '../components/common/CosmicGlow'

const Scene5_Quote = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 bg-gradient-to-b from-[#050816] via-[#090014] to-black">

      {/* Cosmic Background */}
      <CosmicGlow />

      {/* Stars */}
      <StarField />

      {/* Constellations */}
      <ConstellationLines />

      {/* Main Content */}
      <MouseParallax>
        <div className="relative z-10 max-w-6xl text-center">

          {/* Chapter */}
          <FadeIn delay={0.5}>
            <p className="uppercase tracking-[14px] text-pink-200 text-sm mb-8">
              Chapter Five
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-[0_0_60px_rgba(255,105,180,0.7)]">
              My World
            </h1>
          </FadeIn>

          {/* Story Before Quote */}
          <FadeIn delay={2}>
            <div className="mt-20">
              <StorySequence
                lines={[
                  'Some people enter your life...',
                  'and leave footprints.',
                  'Some become memories.',
                  'Some become lessons.',
                ]}
              />
            </div>
          </FadeIn>

          {/* Pause Section */}
          <FadeIn delay={5}>
            <div className="mt-24">
              <StorySequence
                lines={[
                  'And then...',
                  'there are rare people.',
                ]}
              />
            </div>
          </FadeIn>

          {/* Quote Part 1 */}
          <FadeIn delay={7}>
            <motion.h2
              className="mt-32 text-4xl md:text-6xl font-light text-white leading-relaxed"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              My mother gave me this world...
            </motion.h2>
          </FadeIn>

          {/* Pause Glow */}
          <motion.div
            className="mx-auto mt-16 w-3 h-3 rounded-full bg-pink-400"
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Main Quote */}
          <FadeIn delay={10}>
            <motion.h1
              className="mt-20 text-5xl md:text-8xl font-black text-pink-300 leading-[1.4] drop-shadow-[0_0_60px_rgba(255,105,180,0.9)]"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              But your mother
              <br />
              gave me my world.
            </motion.h1>
          </FadeIn>

          {/* Emotional Ending */}
          <FadeIn delay={12}>
            <div className="mt-28">
              <StorySequence
                lines={[
                  'Because without you...',
                  'there is no story.',
                  'there is no adventure.',
                  'there is no future.',
                  'there is no me.',
                ]}
              />
            </div>
          </FadeIn>

          {/* Final Line */}
          <FadeIn delay={15}>
            <motion.h2
              className="mt-24 text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.8)]"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              There is only us.
            </motion.h2>
          </FadeIn>

          {/* Birthday Teaser */}
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
            <p className="text-pink-200 text-xs md:text-sm tracking-[6px] uppercase mb-4">
              The Best Part Is Yet To Come
            </p>

            <div className="w-[2px] h-16 bg-gradient-to-b from-pink-400 to-transparent" />

            <p className="mt-8 text-pink-300 text-lg tracking-[8px]">
              02 JULY
            </p>
          </motion.div>

        </div>
      </MouseParallax>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />
    </section>
  )
}

export default Scene5_Quote