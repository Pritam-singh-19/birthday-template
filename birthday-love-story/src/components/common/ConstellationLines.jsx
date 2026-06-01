import { motion } from 'framer-motion'

const ConstellationLines = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.line
        x1="20%"
        y1="30%"
        x2="40%"
        y2="45%"
        stroke="white"
        strokeWidth="1"
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.line
        x1="40%"
        y1="45%"
        x2="60%"
        y2="25%"
        stroke="pink"
        strokeWidth="1"
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <motion.line
        x1="60%"
        y1="25%"
        x2="80%"
        y2="40%"
        stroke="white"
        strokeWidth="1"
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
    </svg>
  )
}

export default ConstellationLines