import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Countdown = ({ onComplete }) => {
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count === 0) {
      setTimeout(onComplete, 1000)
      return
    }

    const timer = setTimeout(() => {
      setCount(prev => prev - 1)
    }, 1500)

    return () => clearTimeout(timer)
  }, [count])

  return (
    <div className="flex items-center justify-center h-screen">

      <AnimatePresence mode="wait">

        <motion.h1
          key={count}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 5,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-white text-[12rem] font-black"
        >
          {count > 0 ? count : '🎂'}
        </motion.h1>

      </AnimatePresence>

    </div>
  )
}

export default Countdown