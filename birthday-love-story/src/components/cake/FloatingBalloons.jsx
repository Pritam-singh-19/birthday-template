import { motion } from 'framer-motion'

const balloons = ['🎈', '🎈', '🎈', '🎈', '🎈']

const FloatingBalloons = () => {
  return (
    <>
      {balloons.map((balloon, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl"
          initial={{
            y: 200,
            opacity: 0,
          }}
          animate={{
            y: -1200,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            delay: index,
          }}
          style={{
            left: `${10 + index * 18}%`,
          }}
        >
          {balloon}
        </motion.div>
      ))}
    </>
  )
}

export default FloatingBalloons