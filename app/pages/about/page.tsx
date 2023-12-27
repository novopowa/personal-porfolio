import H2 from '@/app/components/ui/H2'
import { type LINKS } from '@/app/types'
import { calculateAge, scrollOnClick } from '@/app/utils/functions'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { IoIosArrowRoundDown } from 'react-icons/io'

function About ({ links, onScrollInOut }: { links: LINKS, onScrollInOut: (page: string) => void }): React.JSX.Element {
  const [showArrow, setShowArrow] = useState(true)
  const [noMoreArrow, setNoMoreArrow] = useState(false)

  const Arrow = (): React.JSX.Element => {
    return (
      <a href={links.aboutme.href} onClick={scrollOnClick} className={`absolute ml-3 opacity-60 rounded-full ${showArrow && !noMoreArrow ? '' : 'transparent'}`}>
        <IoIosArrowRoundDown />
      </a>
    )
  }

  useEffect(() => {
    setTimeout(() => {
      setShowArrow(currentArrow => !currentArrow)
    }, 800)
  }, [showArrow])

  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.5) {
      onScrollInOut('aboutme')
    } else {
      onScrollInOut('')
    }
    if (latest > 0.7 && !noMoreArrow) {
      setNoMoreArrow(true)
    }
  })

  return (
    <motion.section ref={sectionRef} id="sobremi" className="page aboutme min-h-screen relative flex flex-col">
        <H2>Sobre mi <Arrow /></H2>
        <div className="max-w-2xl mx-auto relative">
          <p className="my-4">Comencé a estudiar informática nada más terminar mis estudios obligatorios.</p>
          <p className="my-4"><strong>A los 15 años creé mi primera página en HTML</strong> y supe que el desarrollo web era mi vocación.</p>
          <p className="my-4">
            En la actualidad, con {calculateAge(1989)} años, he acumulado experiencia trabajando para diversas
            empresas y <strong>he participado en la creación de una amplia variedad de <a className="project-link" onClick={scrollOnClick} href={links.projects.href}>proyectos</a></strong>.
          </p>
          <p className="my-4">En los últimos años <strong>he enfocado mi especialización en el desarrollo Frontend</strong>, ya que siempre ha sido la parte del desarrollo que más he disfrutado.</p>
          <p className="my-4">
            Cuando no estoy frente a la pantalla, normalmente estoy jugando a D&D, tocando la batería
            o <Link href={links.instagram.href} rel="noopener noreferrer" target="_blank">viajando por el mundo en bicicleta<MdArrowOutward /></Link>.
          </p>
        </div>
    </motion.section>
  )
}

export default About
