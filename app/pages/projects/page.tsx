import { Bungee_Outline } from 'next/font/google'

const bungeeOutline = Bungee_Outline({ subsets: ['latin'], weight: '400' })

function Projects(){
  return(
    <section id="proyectos" className="page projects min-h-screen relative">
        <h2 className={bungeeOutline.className}>Proyectos</h2>
    </section>
  )
}

export default Projects