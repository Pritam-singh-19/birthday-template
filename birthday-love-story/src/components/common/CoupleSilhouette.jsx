import { motion } from 'framer-motion'

const CoupleSilhouette = () => {
  return (
    <motion.div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px]"
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    >
      {/* Boy */}
      <div className="absolute left-[25%] bottom-0 w-[140px] h-[300px] bg-gradient-to-t from-black via-gray-800 to-gray-600 rounded-t-[80px] rounded-b-[30px] opacity-80 blur-[1px]" />

      {/* Girl */}
      <div className="absolute right-[25%] bottom-0 w-[120px] h-[260px] bg-gradient-to-t from-pink-900 via-pink-500 to-pink-200 rounded-t-[80px] rounded-b-[30px] opacity-80 blur-[1px]" />

      {/* Holding Glow */}
      <motion.div
        className="absolute left-1/2 top-[45%] -translate-x-1/2 w-20 h-20 rounded-full bg-pink-400/30 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  )
}

export default CoupleSilhouette