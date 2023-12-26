import ContactSource from '@/app/components/ContactSource'
import H2 from '@/app/components/ui/H2'
import { type CONTACT_SOURCE, type LINKS } from '@/app/types'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact ({ links, onScrollInOut }: { links: LINKS, onScrollInOut: (page: string) => void }): React.JSX.Element {
  const contactSources: CONTACT_SOURCE[] = [
    {
      icon: <AiOutlineMail />,
      name: 'aleix1989@gmail.com',
      canBeCopied: true
    },
    {
      icon: <FaLinkedin />,
      name: links.linkedin.title,
      link: links.linkedin.href,
      canBeCopied: false
    },
    {
      icon: <FaGithub />,
      name: links.github.title,
      link: links.github.href,
      canBeCopied: false
    }
  ]

  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.5) {
      onScrollInOut('contact')
    }
  })

  return (
        <motion.section ref={sectionRef} id="contacto" className="page contact min-h-screen relative flex flex-col ">
            <H2>Contacto</H2>
            <div className="relative flex flex-col justify-center mx-auto">
              {contactSources.map((source, i) => {
                return <ContactSource {...source} key={i}/>
              })}
            </div>
        </motion.section>
  )
}

export default Contact
