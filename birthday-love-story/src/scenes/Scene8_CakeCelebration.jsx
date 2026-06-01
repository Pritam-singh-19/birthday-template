import { useState } from 'react'
import { motion } from 'framer-motion'

import SketchfabCake from '../components/cake/SketchfabCake'

import Countdown from '../components/cake/Countdown'
import BlowCandles from '../components/cake/BlowCandles'
import CutCake from '../components/cake/CutCake'
import FinalMessage from '../components/cake/FinalMessage'

const Scene8_CakeCelebration = () => {
  const [stage, setStage] = useState('intro')

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

        

      {/* INTRO */}

      {stage === 'intro' && (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="text-5xl md:text-8xl font-black text-pink-300"
          >
            Ayushi...
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
            }}
            className="mt-10 text-xl md:text-3xl text-white"
          >
            Are you ready for your surprise? ❤️
          </motion.p>

          <motion.button
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 3,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setStage('countdown')}
            className="
              mt-16
              px-10
              py-5
              rounded-full
              bg-pink-500
              text-white
              text-xl
              font-semibold
              shadow-[0_0_40px_rgba(255,105,180,0.8)]
            "
          >
            Yes ❤️
          </motion.button>

        </div>
      )}

      {/* COUNTDOWN */}

      {stage === 'countdown' && (
        <Countdown
          onComplete={() => setStage('cake')}
        />
      )}

      {/* CAKE REVEAL */}

      {stage === 'cake' && (
        <div className="relative min-h-screen">

          <SketchfabCake />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Heading */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-20">

            <h1 className="text-5xl md:text-8xl font-black text-pink-300 drop-shadow-[0_0_40px_rgba(255,105,180,0.8)]">
              Happy Birthday
            </h1>

            <h2 className="mt-4 text-4xl md:text-6xl text-white font-bold">
              Ayushi ❤️
            </h2>

          </div>

          {/* Floating Hearts */}

          <motion.div
            className="absolute top-32 left-10 text-4xl"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            ❤️
          </motion.div>

          <motion.div
            className="absolute top-52 right-16 text-4xl"
            animate={{
              y: [0, -25, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            ❤️
          </motion.div>

          <motion.div
            className="absolute bottom-40 left-20 text-3xl"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            ✨
          </motion.div>

          <motion.div
            className="absolute bottom-56 right-20 text-3xl"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
          >
            ✨
          </motion.div>

          {/* Button */}

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">

            <button
              onClick={() => setStage('wish')}
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
                shadow-[0_0_40px_rgba(255,105,180,0.8)]
              "
            >
              Make A Wish ❤️
            </button>

          </div>

        </div>
      )}

      {/* BLOW CANDLES */}

      {stage === 'wish' && (
        <BlowCandles
          onComplete={() => setStage('cutCake')}
        />
      )}

      {/* CUT CAKE */}

      {stage === 'cutCake' && (
        <CutCake
          onComplete={() => setStage('final')}
        />
      )}

      {/* FINAL MESSAGE */}

      {stage === 'final' && (
        <FinalMessage />
      )}

    </section>
  )
}

export default Scene8_CakeCelebration