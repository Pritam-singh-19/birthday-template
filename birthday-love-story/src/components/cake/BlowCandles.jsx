import { motion } from 'framer-motion'

const BlowCandles = ({ onComplete }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black via-[#120814] to-[#2a102f]">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black text-pink-300"
      >
        Make A Wish ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 text-xl md:text-3xl text-white leading-relaxed"
      >
        Close your eyes...
        <br />
        Think about something beautiful...
        <br />
        And make a wish.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-10 text-pink-200 text-lg"
      >
        Ready, Birthday Girl? ✨
      </motion.p>

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={onComplete}
        className="
          mt-16
          px-12
          py-5
          rounded-full
          bg-pink-500
          text-white
          text-xl
          font-semibold
          shadow-[0_0_40px_rgba(255,105,180,0.7)]
        "
      >
        Blow The Candles 💨
      </motion.button>

    </div>
  )
}

export default BlowCandles