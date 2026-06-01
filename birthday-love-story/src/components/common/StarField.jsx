import { motion } from 'framer-motion'

const stars = Array.from({ length: 120 })

const StarField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

    </div>
  )
}

export default StarField