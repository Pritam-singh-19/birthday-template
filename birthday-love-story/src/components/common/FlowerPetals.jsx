import { motion } from 'framer-motion'

const petals = Array.from({ length: 30 })

const FlowerPetals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {petals.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-pink-300 rounded-full opacity-40 blur-[1px]"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -100,
            rotate: 0,
          }}
          animate={{
            y: window.innerHeight + 200,
            rotate: 360,
            x:
              Math.random() * window.innerWidth +
              Math.sin(i) * 100,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

export default FlowerPetals