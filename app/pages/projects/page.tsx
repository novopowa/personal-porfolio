'use client'

import Project from '@/app/components/Project'
import H2 from '@/app/components/ui/H2'
import { type PROJECT } from '@/app/types'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useRef } from 'react'

function Projects({ onScrollInOut }: { onScrollInOut: (page: string) => void }): React.JSX.Element {
	const projects: PROJECT[] = [
		{
			image: 'combeleditorial.webp',
			name: 'Combel Editorial',
			desc: 'Programación y maquetación de la web de la editorial Combel en Español, Catalán e Inglés.',
			url: 'https://www.combeleditorial.com/es'
		},
		{
			image: 'ontimit.webp',
			name: 'OnTimit',
			desc: 'Maquetación de la app móvil OnTimit para el registro de entradas y salidas laborales.',
			url: 'https://ontimit.business.site'
		},
		{
			image: 'bambulector.webp',
			name: 'Bambu Lector',
			desc: 'Maquetación del nuevo diseño del catálogo de libros de Bambú Lector en cada nivel educativo.',
			url: 'https://www.bambulector.es/es'
		},
		{
			image: 'autocaresjulia.webp',
			name: 'Autocares Julia',
			desc: 'Programación frontend y maquetación de la web corporativa de Autocares Julia.',
			url: 'https://autocaresjulia.com/es'
		},
		{
			image: 'acave.webp',
			name: 'ACAVe',
			desc: 'Maquetación del portal Drupal de la asociación empresarial de Agencias de Viajes ACAVe.',
			url: 'https://web.archive.org/web/20200608234025/https://www.acave.travel/es'
		},
		{
			image: 'musiclibrary.webp',
			name: 'Music Library & SoundFX',
			desc: 'Añadidos de funcionalidad y diseño al catálogo de canciones de Music Library & SoundFX.',
			url: 'https://web.archive.org/web/20160423174851/http://www.musiclibrary.es/es/catalogo-musical/albumes/01-------paz/?action=showList&newitems=N&album=3'
		},
		{
			image: 'vialclic.webp',
			name: 'Vial Clic',
			desc: 'Programación frontend y maquetación de la página corporativa de la autoescuela Vial Clic.',
			url: 'http://www.vialclic.com'
		},
		{
			image: 'larapita.webp',
			name: 'Estació Nàutica Sant Carles de la Ràpita',
			desc: 'Maquetación del portal web en Drupal de la Estació Nàutica Sant Carles de la Ràpita.',
			url: 'https://web.archive.org/web/20160602233151/http://www.enlarapita.com/es'
		}
	]

	const sectionRef = useRef<HTMLElement>(null)

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end end']
	})

	useMotionValueEvent(scrollYProgress, 'change', latest => {
		if (latest > 0.3) {
			onScrollInOut('projects')
		}else{
			onScrollInOut('aboutme')
		}
	})

	return (
		<motion.section ref={sectionRef} id='proyectos' className='page projects min-h-screen relative'>
			<H2>Proyectos</H2>
			<div className='flex flex-wrap gap-6 justify-center max-w-6xl mx-auto'>
				{projects.map((project, i) => {
					return <Project {...project} key={i} />
				})}
			</div>
		</motion.section>
	)
}

export default Projects
