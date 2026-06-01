import { motion } from 'framer-motion'

const GirlSilhouette = () => {
  return (
    <motion.div
      className="absolute bottom-0 right-[12%] w-[260px] h-[520px]"
      initial={{
        opacity: 0,
        x: 100,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: 2,
        },
        x: {
          duration: 2,
        },
        y: {
          duration: 4,
          repeat: Infinity,
        },
      }}
    >
      <div className="w-full h-full bg-gradient-to-t from-pink-900 via-pink-400 to-pink-200 opacity-70 rounded-t-[140px] rounded-b-[60px] blur-[2px]" />
    </motion.div>
  )
}

export default GirlSilhouette