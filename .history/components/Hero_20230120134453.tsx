import React, { use } from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            'Hi, Im Moses',
            'Guy-who-loves-music.tsx',
            'ButLovesCodingMore'
        ],
        loop: true,
        delaySpeed: 2000
    })

  return (
    <div>
        <p>{text}</p>
    </div>
  )
}

export default Hero