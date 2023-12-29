'use client'

import { useRef, useState } from 'react'
import Header from './components/Header'
import { type LINKS } from './types'
import About from './pages/aboutme'
import Projects from './pages/projects'
import Experiences from './pages/experiences'
import Contact from './pages/contact'

function Home(): React.JSX.Element {
	const links: LINKS = {
		homepage: { title: 'homepage', href: '' },
		aboutme: { title: 'sobre mi', href: '#sobremi' },
		projects: { title: 'proyectos', href: '#proyectos' },
		experience: { title: 'experiencia', href: '#experiencia' },
		contact: { title: 'contacto', href: '#contacto' },
		github: {
			title: 'Github.com/novopowa/',
			href: 'https://github.com/novopowa/'
		},
		linkedin: {
			title: 'linkedin.com/in/aalsina',
			href: 'https://www.linkedin.com/in/aleix-alsina-rossell-60b14863'
		},
		instagram: { title: '', href: 'https://www.instagram.com/axel.adventure/' }
	}

	const h1: string = 'AleixAlsina.dev'

	const mainRef = useRef<HTMLElement>(null)

	const [selectedPage, setSelectedPage] = useState<string>('homepage')

	const onScrollInOut = (page: string): void => {
		setSelectedPage(page)
	}

	return (
		<>
			<Header h1={h1} links={links} selectedPage={selectedPage} />
			<main ref={mainRef} className='flex-1 bg-cover bg-left relative'>
				<About onScrollInOut={onScrollInOut} links={links} />
				<Projects onScrollInOut={onScrollInOut} />
				<Experiences onScrollInOut={onScrollInOut} />
				<Contact onScrollInOut={onScrollInOut} links={links} />
			</main>
		</>
	)
}
export default Home
