import { motion } from 'framer-motion'

const memories = [
  'First Hi ❤️',
  'Late Night Talks 🌙',
  'First Fight 😭',
  'First I Love You 💕',
  'Forever Together ✨',
]

const FloatingMemories = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {memories.map((memory, i) => (
        <motion.div
          key={i}
          className="absolute px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl text-white shadow-2xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 200,
            opacity: 0,
            rotate: Math.random() * 20 - 10,
          }}
          animate={{
            y: -200,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: i * 2,
            ease: 'linear',
          }}
        >
          {memory}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingMemories