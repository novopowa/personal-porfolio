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

export const links:Links = {
  homepage: {title: "homepage", href: "/"},
  aboutme: {title: "sobre mi", href: "/about"},
  projects: {title: "proyectos", href: "/projects"},
  skills: {title: "habilidades", href: "/skills"},
  contact: {title: "contacto", href: "/contact"}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={major.className}>
        <div className="flex min-h-screen flex-col lg:flex-row">
          <Header links={links} />
          <main className="flex-1 bg-slate-700">
            <div className="min-h-[95%]">
              {children}
            </div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  )
}
