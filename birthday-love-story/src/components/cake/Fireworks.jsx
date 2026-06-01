import { motion } from 'framer-motion'

const bursts = Array.from({ length: 12 })

const Fireworks = () => {
  return (
    <>
      {bursts.map((_, index) => (

        <motion.div
          key={index}
          className="absolute text-5xl"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.6,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
          }}
        >
          ✨
        </motion.div>

      ))}
    </>
  )
}

export default Fireworks