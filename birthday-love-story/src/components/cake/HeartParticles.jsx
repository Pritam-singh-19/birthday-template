import { motion } from 'framer-motion'

const hearts = Array.from({ length: 20 })

const HeartParticles = () => {
  return (
    <>
      {hearts.map((_, index) => (

        <motion.div
          key={index}
          className="absolute text-pink-400"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-20, -300],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: index * 0.2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '0%',
          }}
        >
          ❤️
        </motion.div>

      ))}
    </>
  )
}

export default HeartParticles