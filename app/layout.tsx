//STYLE
import { Major_Mono_Display } from 'next/font/google'
import './globals.css'
//DATA
import type { Metadata } from 'next'
//COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'
import { Links } from "./types"

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
    <html lang="en">
      <body className={major.className}>
        <div className="flex min-h-screen flex-col lg:flex-row">
          <Header h1={h1} links={links} />
          <main className="flex-1 bg-slate-700">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  )
}
