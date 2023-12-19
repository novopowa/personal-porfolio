import { Links } from '@/app/types'
import { Bungee_Outline } from 'next/font/google'
import Link from 'next/link'

const bungeeOutline = Bungee_Outline({ subsets: ['latin'], weight: '400' })

function About({links}: {links: Links}){

  const calculateAge = (birthyear: number): string => {
    const currentDate: Date = new Date()
    const currentYear: number = currentDate.getFullYear()
    const age: number = currentYear-birthyear 
    return age.toString()
  }

  return(
    <section id="sobre-mi" className="page aboutme min-h-screen relative flex flex-col justify-center">
        <h2 className={bungeeOutline.className}>Sobre mi</h2>
        <p className="my-1">Comencé a estudiar informática nada más terminar mis estudios obligatorios.</p>
        <p className="my-1">A los 15 años creé mi primera página en HTML y supe que el desarrollo web era lo mio.</p>
        <p className="my-1">
          En la actualidad, con <strong>{calculateAge(1989)} años</strong>, he acumulado experiencia trabajando para diversas 
          empresas y he participado en la creación de una amplia variedad de <a href={links.projects.href}>proyectos</a>.
        </p> 
        <p className="my-1">En los últimos años, he enfocado mi especialización en el desarrollo Frontend, ya que siempre ha sido la parte del desarrollo que más he disfrutado.</p>
        <p className="my-1">
          Cuando no estoy frente a la pantalla, normalmente estoy jugando a D&D, tocando la batería 
          o <Link href="https://www.instagram.com/axel.adventure/" rel="noopener noreferrer" target="_blank">viajando por el mundo en bicicleta</Link>.
        </p>
    </section>
  )
}

export default About

