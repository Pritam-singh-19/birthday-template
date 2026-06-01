import { useEffect } from 'react'
import { Howl } from 'howler'

import music from '../../assets/music/sad-piano.mp3'

const MusicPlayer = () => {
  useEffect(() => {
    const sound = new Howl({
      src: [music],
      loop: true,
      volume: 0.3,
      autoplay: true,
    })

    sound.play()

    return () => {
      sound.stop()
    }
  }, [])

  return null
}

export default MusicPlayer