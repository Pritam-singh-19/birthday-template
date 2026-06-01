import { motion } from 'framer-motion'

const AnimeSilhouette = () => {
  return (
    <motion.div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] h-[500px]"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
    >
      <div className="w-full h-full bg-gradient-to-t from-black via-gray-800 to-gray-700 opacity-80 rounded-t-[120px] rounded-b-[40px] blur-[2px]" />
    </motion.div>
  )
}

export default AnimeSilhouette