import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Bungee_Outline } from 'next/font/google'
import { useRef } from 'react'

const bungeeOutline = Bungee_Outline({ subsets: ['latin'], weight: '400' })

function Contact({onScrollInOut}: {onScrollInOut: Function}){

    const sectionRef = useRef<HTMLElement>(null)
  
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end end"]
    })
  
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if(latest > 0.5){
        onScrollInOut("contact")
      }
    })
    
    return(
        <motion.section ref={sectionRef} id="contacto" className="page contact min-h-screen relative">
            <h2 className={`${bungeeOutline.className} text-white`}>Contacto</h2>
        </motion.section>
    )
}

export default Contact