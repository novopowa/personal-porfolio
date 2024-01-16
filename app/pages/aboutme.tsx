'use client'

import H2 from '@/app/components/ui/H2'
import { type LINKS } from '@/app/types'
import { calculateAge, rangeToPercentage, scrollOnClick } from '@/app/utils/functions'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { IoIosArrowRoundDown } from 'react-icons/io'

function About({ onScrollInOut, links }: { onScrollInOut: (page: string) => void; links: LINKS }): React.JSX.Element {
	const [showArrow, setShowArrow] = useState(true)
	const [noMoreArrow, setNoMoreArrow] = useState(false)

	const Arrow = (): React.JSX.Element => {
		return (
			<a
				href={links.aboutme.href}
				onClick={scrollOnClick}
				className={`absolute ml-3 opacity-60 rounded-full ${showArrow && !noMoreArrow ? '' : 'transparent'}`}
				aria-label='Haz scroll para ver más'>
				<IoIosArrowRoundDown />
			</a>
		)
	}

	useEffect(() => {
		setTimeout(() => {
			setShowArrow(currentArrow => !currentArrow)
		}, 800)
	}, [showArrow])

	const sectionRef = useRef<HTMLElement>(null)
	const [photoOpacity, setPhotoOpacity] = useState<number>(1)

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end end']
	})

	const showHidePhoto = (percentage: number): void => {
		const reversePercentage = 1 - rangeToPercentage(percentage, 0.64, 1)
		setPhotoOpacity(reversePercentage)
	}

	useMotionValueEvent(scrollYProgress, 'change', latest => {
		onScrollInOut('aboutme')
		showHidePhoto(latest)
		if (latest > 0.99 && !noMoreArrow) {
			setNoMoreArrow(true)
		}
	})

	return (
		<motion.section ref={sectionRef} className='page aboutme relative min-h-[80vh] lg:min-h-[155vh] flex flex-col'>
			<div className='flex flex-col just min-h-[36vh] lg:min-h-[72vh]'>
				<Image
					src='/images/aleixalsina.webp'
					alt='Aleix Alsina'
					width={600}
					height={600}
					className='max-w-[600px] max-h-[600px] w-5/6 sm:w-4/6 mx-auto mt-auto'
					style={{ opacity: photoOpacity }}
				/>
			</div>
			<div id='sobremi'>
				<H2>
					Sobre mi <Arrow />
				</H2>
				<div className='max-w-2xl mx-auto relative'>
					<p className='my-4'>Comencé a estudiar informática nada más terminar mis estudios obligatorios.</p>
					<p className='my-4'>
						<strong>A los 15 años creé mi primera página en HTML</strong> y supe que el desarrollo web era mi vocación.
					</p>
					<p className='my-4'>
						En la actualidad, con {calculateAge(1990)} años, he acumulado experiencia trabajando para diversas empresas
						y{' '}
						<strong>
							he participado en la creación de una amplia variedad de{' '}
							<a
								className='project-link'
								onClick={scrollOnClick}
								href={links.projects.href}
								aria-label={links.projects.title}>
								{links.projects.title}
							</a>
						</strong>
						.
					</p>
					<p className='my-4'>
						En los últimos años <strong>he enfocado mi especialización en el desarrollo Frontend</strong>, ya que
						siempre ha sido la parte del desarrollo que más he disfrutado.
					</p>
					<p className='my-4'>
						Cuando no estoy frente a la pantalla, normalmente estoy jugando a D&D, tocando la batería o{' '}
						<Link href={links.instagram.href} rel='noopener noreferrer' target='_blank'>
							viajando por el mundo en bicicleta
							<MdArrowOutward />
						</Link>
						.
					</p>
				</div>
			</div>
		</motion.section>
	)
}

export default About
