import { LINKS } from '@/app/types'
import { calculateAge, scrollOnClick } from '@/app/utils/functions'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Bungee_Outline } from 'next/font/google'
import Link from 'next/link'
import { useRef } from 'react'

const bungeeOutline = Bungee_Outline({ subsets: ['latin'], weight: '400' })

function About({links, onScrollInOut}: {links: LINKS, onScrollInOut: Function}){

  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest > 0.5){
      onScrollInOut("aboutme")
    }else{
      onScrollInOut("")
    }
  })

  return(
    <motion.section ref={sectionRef} id="sobremi" className="page aboutme min-h-screen relative flex flex-col justify-center">
        <h2 className={bungeeOutline.className}>Sobre mi</h2>
        <div className="max-w-2xl mx-auto">
          <p className="my-4">Comencé a estudiar informática nada más terminar mis estudios obligatorios.</p>
          <p className="my-4">A los 15 años creé mi primera página en HTML y supe que el desarrollo web era lo mio.</p>
          <p className="my-4">
            En la actualidad, con <strong>{calculateAge(1989)} años</strong>, he acumulado experiencia trabajando para diversas 
            empresas y he participado en la creación de una amplia variedad de <a className="project-link" onClick={scrollOnClick} href={links.projects.href}>proyectos</a>.
          </p> 
          <p className="my-4">En los últimos años he enfocado mi especialización en el desarrollo Frontend, ya que siempre ha sido la parte del desarrollo que más he disfrutado.</p>
          <p className="my-4">
            Cuando no estoy frente a la pantalla, normalmente estoy jugando a D&D, tocando la batería 
            o <Link href="https://www.instagram.com/axel.adventure/" rel="noopener noreferrer" target="_blank">viajando por el mundo en bicicleta</Link>.
          </p>
        </div>
    </motion.section>
  )
}

export default About

