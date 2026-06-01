import { motion } from 'framer-motion'

const SunsetGlow = () => {
  return (
    <>
      <motion.div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-orange-500/20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
    </>
  )
}

export default SunsetGlow