import { motion } from 'framer-motion'

const FogEffect = () => {
  return (
    <>
      <motion.div
        className="absolute bottom-0 left-[-10%] w-[60%] h-[300px] bg-white/5 blur-3xl rounded-full"
        animate={{
          x: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute top-[30%] right-[-10%] w-[50%] h-[250px] bg-pink-400/5 blur-3xl rounded-full"
        animate={{
          x: [0, -120, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </>
  )
}

export default FogEffect