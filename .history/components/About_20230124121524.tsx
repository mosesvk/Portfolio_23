import { motion } from 'framer-motion'
import React from 'react'

interface Props {
    
}

const About = (props: Props) => {
    return (
        <div className='h-screen'>
            <h3></h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
            />
        </div>
    )
}

export default About
