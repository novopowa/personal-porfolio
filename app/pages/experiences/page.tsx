import Experience from '@/app/components/Experience'
import H2 from '@/app/components/ui/H2'
import { type EXPERIENCE } from '@/app/types'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef } from 'react'

function Experiences ({ onScrollInOut }: { onScrollInOut: (page: string) => void }): React.JSX.Element {
  const experiences: EXPERIENCE[] = [
    {
      start: 'ENE 2011',
      end: 'ENE 2013',
      company: 'Detrinca Internet',
      location: 'Mataró, España',
      position: 'Programador Web Junior',
      desc: <>
              <p>Desarrollo de funciones web en PHP y JavaScript.</p>
              <p>Gestíón de BBDD MySQL.</p>
            </>,
      technologies: ['PHP', 'JavaScript', 'MySQL']
    }, {
      start: 'AGO 2013',
      end: 'ENE 2018',
      company: 'Mosaic Consultoria TIC',
      location: 'Barcelona, España',
      position: 'Programador Web Frontend y Maquetador',
      desc: <>
              <p>Desarrollo de diversos proyectos web utilizando lenguajes como PHP (Symfony) y JavaScript.</p>
              <p>Maquetación con CSS y preprocesadores para garantizar interfaces atractivas y funcionales.</p>
              <p>Montaje de proyectos en plataformas como Wordpress, Moodle y Drupal.</p>
            </>,
      technologies: ['PHP', 'Symfony', 'JavaScript', 'CSS', 'Sass', 'SCSS', 'Drupal', 'WordPress', 'Moodle']
    }, {
      start: '2020',
      end: 'PRESENTE',
      company: 'Freelance',
      location: 'España',
      position: 'Desarrollador Web Independiente',
      desc: <>
              <p>Desarrollo y gestión de múltiples proyectos online, incluyendo nichos de Amazon y sitios web desarrollados en React y monetizados con AdSense.</p>
              <p>Gestión personal de la configuración y optimización de servidores web, asegurando un rendimiento óptimo y una experiencia fluida para los usuarios.</p>
              <p>Aprendizaje de estrategias de SEO, SEM y redes sociales.</p>
            </>,
      technologies: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'WordPress', 'SEO', 'AdSense', 'Marketing de Afiliados']
    }
  ]

  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end end']
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.1) {
      onScrollInOut('experiences')
    }
  })
  return (
    <motion.section ref={sectionRef} id="experiencia" className="page experiences min-h-screen relative">
      <H2>Experiencia</H2>
      <div className="max-w-3xl mx-auto">
        {experiences.reverse().map((experience, i) => {
          return <Experience {...experience} key={i}/>
        })}
      </div>

    </motion.section>
  )
}

export default Experiences
