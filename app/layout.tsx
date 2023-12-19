//STYLE
import './globals.css'
//DATA
import type { Metadata } from 'next'
//TYPES
import { Links } from "./types"
//COMPONENTS & PAGES
import Header from './components/Header'
import Background from './components/Background'
import Start from './pages/start/page'
import AboutMe from './pages/about/page'
import Projects from './pages/projects/page'
import Experience from './pages/experience/page'
import Contact from './pages/contact/page'

export const metadata: Metadata = {
  title: 'Aleix Alsina',
  description: 'The portfolio of Aleix Alsina, Frontend Developer.',
}

const links:Links = {
  homepage: {title: "homepage", href: "/"},
  aboutme: {title: "sobre mi", href: "#sobre-mi"},
  projects: {title: "proyectos", href: "#proyectos"},
  skills: {title: "experiencia", href: "#experiencia"},
  contact: {title: "contacto", href: "#contacto"},
  github: {title: "", href: "https://github.com/novopowa/"},
  linkedin: {title: "", href: "https://www.linkedin.com/in/aleix-alsina-rossell-60b14863"}
}

const h1: string = "AleixAlsina.dev"

export default function RootLayout() {
  return (
    <html lang="es">
      <body>
        <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen overflow-hidden">
          <Header h1={h1} links={links} />
          <Background>
            <Start />
            <AboutMe links={links} />
            <Projects />
            <Experience />
            <Contact />
          </Background>
        </div>
      </body>
    </html>
  )
}
