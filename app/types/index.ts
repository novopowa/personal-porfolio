// Index
export type LINKS = Record<string, { title: string; href: string }>

// Intro
export type INTROTEXT = Record<string, React.JSX.Element | string>

// Project
export interface PROJECT {
	image: string
	name: string
	desc: string
	url: string
}

// Experience
export interface EXPERIENCE {
	start: string
	end: string
	company: string
	location: string
	position: string
	desc: React.JSX.Element
	technologies: string[]
}

// Contact
export interface CONTACT_SOURCE {
	icon: React.JSX.Element
	name: string
	link?: string
	canBeCopied: boolean
}
