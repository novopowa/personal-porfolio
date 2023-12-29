'use client'

import { type LINKS } from '../types'
import { scrollOnClick } from '../utils/functions'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

function Menu({ h1, links, selectedPage }: { h1: string; links: LINKS; selectedPage: string }): React.JSX.Element {
	const firstRender = useRef(true)
	const toogleResponsiveMenuButton = useRef<HTMLButtonElement | null>(null)

	const [responsiveMenuExpanded, setResponsiveMenuExpanded] = useState(false)
	const menuControls = useAnimation()
	const menuH1Controls = useAnimation()
	const menuLiControls = useAnimation()
	const menuExternalLinksLeftControls = useAnimation()
	const menuExternalLinksRightControls = useAnimation()

	const animationProps = {
		animate: menuLiControls,
		transition: {
			duration: 0.13,
			ease: 'easeIn',
			delay: 0
		}
	}

	const [delays, setDelays] = useState([0.3, 0.2, 0.1, 0])

	const handleResponsiveMenuExpanded = (): void => {
		toogleResponsiveMenuButton.current!.disabled = true
		setDelays(currentDelays => [...currentDelays].reverse())
	}

	useEffect(() => {
		const openResponsiveMenu = (): void => {
			setResponsiveMenuExpanded(true)
			menuControls.start({ height: 264 }).then(() => {
				menuH1Controls.start({ transform: 'translateY(0)' }).then(() => {
					menuLiControls.start({ transform: 'translateX(0)',	borderTop: '1px solid #777'}).then(() => {
						menuExternalLinksLeftControls.start({ transform: 'translateX(0)' }).then(() => {}, () => {})
						menuExternalLinksRightControls.start({ transform: 'translateX(0)' }).then(() => {
							toogleResponsiveMenuButton.current!.disabled = false
						}, () => {})
					}, () => {})
				}, () => {})
			},() => {})
		}

		const closeResponsiveMenu = (): void => {
			menuExternalLinksLeftControls.start({ transform: 'translateX(-320px)' }).then(() => {}, () => {})
			menuExternalLinksRightControls.start({ transform: 'translateX(320px)' }).then(() => {
				menuLiControls.start({ transform: 'translateX(-400px)',	borderTop: '1px solid transparent' }).then(() => { 
					menuH1Controls.start({ transform: 'translateY(-30px)' }).then(() => {
						menuControls.start({ height: 0 }).then(() => {
							setResponsiveMenuExpanded(false)
							toogleResponsiveMenuButton.current!.disabled = false
						}, () => {})
					}, () => {})
				}, () => {})
			},() => {})
		}

		const toogleResponsiveMenu = (): void => {
			if (responsiveMenuExpanded) {
				closeResponsiveMenu()
			} else {
				openResponsiveMenu()
			}
		}

		if (firstRender.current) {
			firstRender.current = false
		} else {
			toogleResponsiveMenu()
		}
	}, [delays])

	return (
		<>
			{/* Mobile */}
			<nav className={`main-menu flex flex-col pt-4 fixed left-0 top-0 right-0 lg:hidden z-10 ${responsiveMenuExpanded ? 'h-[264px]' : ''}`}>
				<div className='block'>
					<button
						ref={toogleResponsiveMenuButton}
						className='flex items-center px-3 mr-4 py-2 border rounded float-right relative z-10'
						style={{ backgroundColor: "var(--tertiary-background-color)" }}
						aria-expanded={responsiveMenuExpanded}
						aria-label="Abrir menú de navegación"
						onClick={() => {
							handleResponsiveMenuExpanded()
						}}>
						<svg className='fill-current h-3 w-3' viewBox='0 0 20 20'>
							<line	x1='0' y1='0'	x2='20'	y2='20'	className={`${responsiveMenuExpanded ? '' : 'hidden'}`}	style={{ stroke: '#fff', strokeWidth: 3 }} />
							<line	x1='20'	y1='0' x2='0'	y2='20'	className={`${responsiveMenuExpanded ? '' : 'hidden'}`}	style={{ stroke: '#fff', strokeWidth: 3 }} />
							<path	className={`${responsiveMenuExpanded ? 'hidden' : ''}`}	d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'	/>
						</svg>
					</button>
				</div>
				<motion.div
					{...animationProps}
					animate={menuControls}
					className={`${responsiveMenuExpanded ? 'inline border-b-[1px] border-gray-500' : 'hidden'} relative top-[-2.9rem] h-0`}
					style={{ backgroundColor: "var(--tertiary-background-color)" }}
					aria-hidden={!responsiveMenuExpanded}>
					<motion.div
						{...animationProps}
						animate={menuH1Controls}
						transition={{ ...animationProps.transition }}
						className='flex items-center flex-shrink-0 text-white mr-6 -translate-y-8'>
						<h1 className='font-bold inline px-4 pt-4'>
							<a aria-label={h1} href={links.homepage.href}>{h1}</a>
						</h1>
					</motion.div>
					<ul className='flex flex-col justify-between'>
						<motion.li
							{...animationProps}
							transition={{
								...animationProps.transition,
								delay: animationProps.transition.delay + delays[0]
							}}
							className='px-3 pl-0 mt-3 -translate-x-96'>
							<a
								onClick={scrollOnClick}
								className={`inline-block py-2 px-4 w-full aboutme ${selectedPage === 'aboutme' ? 'selected' : ''}`}
								href={links.aboutme.href}
								aria-label={links.aboutme.title}>
								{links.aboutme.title}
							</a>
						</motion.li>
						<motion.li
							{...animationProps}
							transition={{
								...animationProps.transition,
								delay: animationProps.transition.delay + delays[1]
							}}
							className='px-3 pl-0 -translate-x-96'>
							<a
								onClick={scrollOnClick}
								className={`inline-block py-2 px-4 w-full projects ${selectedPage === 'projects' ? 'selected' : ''}`}
								href={links.projects.href}
								aria-label={links.projects.title}>
								{links.projects.title}
							</a>
						</motion.li>
						<motion.li
							{...animationProps}
							transition={{
								...animationProps.transition,
								delay: animationProps.transition.delay + delays[2]
							}}
							className='px-3 pl-0 -translate-x-96'>
							<a
								onClick={scrollOnClick}
								className={`inline-block py-2 px-4 w-full experiences ${
									selectedPage === 'experiences' ? 'selected' : ''
								}`}
								href={links.experience.href}
								aria-label={links.experience.title}>
								{links.experience.title}
							</a>
						</motion.li>
						<motion.li
							{...animationProps}
							transition={{
								...animationProps.transition,
								delay: animationProps.transition.delay + delays[3]
							}}
							className='px-3 pl-0 -translate-x-96'>
							<a
								onClick={scrollOnClick}
								className={`inline-block py-2 px-4 w-full contact ${selectedPage === 'contact' ? 'selected' : ''}`}
								href={links.contact.href}
								aria-label={links.contact.title}>
								{links.contact.title}
							</a>
						</motion.li>
					</ul>
					<div className='flex pb-3 pt-3'>
						<motion.a
							{...animationProps}
							animate={menuExternalLinksLeftControls}
							transition={{ ...animationProps }}
							rel='noopener noreferrer'
							href={links.github.href}
							target='_blank'
							className='text-3xl items-center [&>svg]:m-auto w-2/4 -translate-x-80'>
							<FaGithub />
						</motion.a>

						<motion.a
							{...animationProps}
							animate={menuExternalLinksRightControls}
							transition={{ ...animationProps }}
							rel='noopener noreferrer'
							href={links.linkedin.href}
							target='_blank'
							className='text-3xl [&>svg]:m-auto w-2/4 translate-x-80'>
							<FaLinkedin />
						</motion.a>
					</div>
				</motion.div>
			</nav>

			{/* Desktop */}
			<nav className={'main-menu flex-col h-auto p-4 static hidden lg:flex'}>
				<ul className='flex flex-row justify-between'>
					<li className='px-3 pl-0 mt-0'>
						<a
							onClick={scrollOnClick}
							className={`inline-block py-2 aboutme ${selectedPage === 'aboutme' ? 'selected' : ''}`}
							href={links.aboutme.href}
							aria-label={links.aboutme.title}>
							{links.aboutme.title}
						</a>
					</li>
					<li className='px-3 pl-3 '>
						<a
							onClick={scrollOnClick}
							className={`inline-block py-2 projects ${selectedPage === 'projects' ? 'selected' : ''}`}
							href={links.projects.href}>
							{links.projects.title}
						</a>
					</li>
					<li className='px-3 pl-3'>
						<a
							onClick={scrollOnClick}
							className={`inline-block py-2 experiences ${selectedPage === 'experiences' ? 'selected' : ''}`}
							href={links.experience.href}
							aria-label={links.experience.title}>
							{links.experience.title}
						</a>
					</li>
					<li className='px-3 pl-3 '>
						<a
							onClick={scrollOnClick}
							className={`inline-block py-2 contact ${selectedPage === 'contact' ? 'selected' : ''}`}
							href={links.contact.href}>
							{links.contact.title}
						</a>
					</li>
				</ul>
				<div className='flex pt-3'>
					<span className='font-bold w-[27.8rem]'>{h1}</span>
					<a
						rel='noopener noreferrer'
						href={links.github.href}
						target='_blank'
						className='px-3 text-2xl items-center [&>svg]:m-0'
						aria-label={links.github.title}>
						<FaGithub />
					</a>
					<a 
					rel='noopener noreferrer' 
					href={links.linkedin.href} 
					target='_blank' 
					className='text-2xl [&>svg]:m-0' 
					aria-label={links.linkedin.title}>
						<FaLinkedin />
					</a>
				</div>
			</nav>
		</>
	)
}

export default Menu
