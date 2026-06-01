import { motion } from 'framer-motion'

const GlowingTimeline = () => {
  return (
    <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2">

      <motion.div
        className="w-full h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

    </div>
  )
}

export default GlowingTimeline