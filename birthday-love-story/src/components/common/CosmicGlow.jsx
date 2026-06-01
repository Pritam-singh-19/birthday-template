import { motion } from 'framer-motion'

const CosmicGlow = () => {
  return (
    <>
      <motion.div
        className="absolute top-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-pink-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
    </>
  )
}

export default CosmicGlow