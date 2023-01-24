import { motion } from 'framer-motion'

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
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1, x: 0
                }}
                viewport={{ once: true }}
                src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZyUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'
                className='mb-20 md:mb-0 flex-shrink-0 w-56 b-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
        </div>
    )
}

export default About
