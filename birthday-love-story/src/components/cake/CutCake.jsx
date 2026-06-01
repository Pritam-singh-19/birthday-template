import { motion } from 'framer-motion'

const CutCake = ({ onComplete }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#120814] via-[#2a102f] to-[#ffb4a2]">

      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="text-5xl md:text-7xl font-black text-yellow-300"
      >
        Yayyyy 🎉
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-3xl md:text-5xl text-white"
      >
        Your wish has been sent to the universe ✨
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-12 text-xl md:text-3xl text-pink-100"
      >
        But wait...
        <br />
        Every birthday needs cake 🎂
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
          bg-yellow-400
          text-black
          text-xl
          font-bold
          shadow-[0_0_40px_rgba(255,215,0,0.8)]
        "
      >
        Cut The Cake 🔪
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="mt-12 text-pink-100 italic"
      >
        I hope I get the first bite 😭❤️
      </motion.p>

    </div>
  )
}

export default CutCake