import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aleix Alsina',
  description: 'The portfolio of Aleix Alsina, Frontend Developer.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body>
        <div className="lg:flex min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
