import { Bungee_Outline } from 'next/font/google'

const bungeeOutline = Bungee_Outline({ subsets: ['latin'], weight: '400' })

function Experience(){
  return(
    <section id="experiencia" className="page skills min-h-screen relative">
      <h2 className={bungeeOutline.className}>Experiencia</h2>
    </section>
  )
}

export default Experience

