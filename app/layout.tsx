//STYLE
import { Major_Mono_Display } from 'next/font/google'
import './globals.css'
//DATA
import type { Metadata } from 'next'
//TYPES
import { Links } from "./types"
//COMPONENTS & PAGES
import Header from './components/Header'
import Background from './components/Background'
import AboutMe from './pages/about/page'
import Projects from './pages/projects/page'
import Skills from './pages/skills/page'
import Contact from './pages/contact/page'


const major = Major_Mono_Display({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Aleix Alsina',
  description: 'The portfolio of Aleix Alsina, Frontend Developer.',
}

const links:Links = {
  homepage: {title: "homepage", href: "/"},
  aboutme: {title: "sobre mi", href: "#about"},
  projects: {title: "proyectos", href: "#projects"},
  skills: {title: "habilidades", href: "#skills"},
  contact: {title: "contacto", href: "#contact"},
  github: {title: "", href: "https://github.com/novopowa/"},
  linkedin: {title: "", href: "https://www.linkedin.com/in/aleix-alsina-rossell-60b14863"}
}

const h1: string = "AleixAlsina.dev"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={major.className}>
        <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen overflow-hidden">
          <Header h1={h1} links={links} />
          <Background>
            <AboutMe />
            <Projects />
            <Skills />
            <Contact />
          </Background>
        </div>
      </body>
    </html>
  )
}
