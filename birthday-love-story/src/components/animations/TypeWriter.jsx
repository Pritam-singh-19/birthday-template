import { Typewriter } from 'react-simple-typewriter'

const TypeWriter = ({ text, speed = 70 }) => {
  return (
    <span>
      <Typewriter
        words={[text]}
        loop={1}
        cursor
        cursorStyle="|"
        typeSpeed={speed}
        deleteSpeed={0}
        delaySpeed={1000}
      />
    </span>
  )
}

export default TypeWriter