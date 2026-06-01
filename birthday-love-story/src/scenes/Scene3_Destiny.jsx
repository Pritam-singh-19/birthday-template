import { motion } from 'framer-motion'

import coupleVideo from '../assets/videos/characters/couple.mp4'

import CinematicVideo from '../components/common/CinematicVideo'
import FadeIn from '../components/animations/FadeIn'
import StorySequence from '../components/animations/StorySequence'
import MouseParallax from '../components/animations/MouseParallax'

import FloatingParticles from '../components/common/FloatingParticles'
import FloatingMemories from '../components/common/FloatingMemories'
import ChatBubble from '../components/common/ChatBubble'
import GlowingTimeline from '../components/common/GlowingTimeline'

const Scene3_Destiny = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-32">

      {/* Couple Video */}
      <CinematicVideo
        src={coupleVideo}
        overlay="bg-purple-950/50"
      />

      {/* Background Glow */}
      <div className="absolute inset-0">

        <motion.div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

      </div>

      {/* Timeline */}
      <GlowingTimeline />

      {/* Floating Memories */}
      <FloatingMemories />

      {/* Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Date */}
        <MouseParallax>
          <FadeIn delay={0.5}>
            <div className="text-center">

              <p className="uppercase tracking-[14px] text-pink-200 text-sm mb-8">
                The Day Everything Changed
              </p>

              <h1 className="text-6xl md:text-9xl font-black text-white drop-shadow-[0_0_50px_rgba(255,105,180,0.8)]">
                15 DECEMBER
              </h1>

            </div>
          </FadeIn>
        </MouseParallax>

        {/* Story */}
        <FadeIn delay={1.5}>
          <div className="mt-20 text-center">

            <StorySequence
              lines={[
                'And on this day...',
                'You entered my life.',
                'Like a beautiful accident...',
                'that I never wanted to end.',
              ]}
            />

          </div>
        </FadeIn>

        {/* Couple Video Memory */}
        <FadeIn delay={3}>
          <div className="mt-24 max-w-4xl mx-auto overflow-hidden rounded-3xl border border-pink-300/20 shadow-[0_0_50px_rgba(255,105,180,0.2)]">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
            >
              <source src={coupleVideo} type="video/mp4" />
            </video>

          </div>
        </FadeIn>

        {/* Chat Memories */}

        <div className="mt-24 space-y-10 max-w-3xl mx-auto">

          <ChatBubble
            text="Heyyy 👀"
            delay={0.2}
            align="left"
          />

          <ChatBubble
            text="I think you're kinda cute 😭❤️"
            delay={0.5}
            align="right"
          />

          <ChatBubble
            text="And that was the beginning of everything..."
            delay={0.8}
            align="left"
          />

        </div>

        {/* Scene Ending */}

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
            A New Chapter Begins
          </p>

          <div className="w-[2px] h-16 bg-gradient-to-b from-pink-400 to-transparent" />
        </motion.div>

      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

    </section>
  )
}

export default Scene3_Destiny