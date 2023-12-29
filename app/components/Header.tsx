import { Major_Mono_Display } from 'next/font/google'
import Menu from './Menu'
// import Intro from './Intro'
import { type LINKS } from '../types'

const major = Major_Mono_Display({ subsets: ['latin'], weight: '400' })

function Header({ h1, links, selectedPage }: { h1: string; links: LINKS; selectedPage: string }): React.JSX.Element {
	return (
		<header
			className={`flex flex-col mt-0 mx-auto w-screen sm:w-[36rem] lg:w-auto lg:flex-[0_0_36rem] max-h-screen lg:sticky top-0 ${major.className}`}>
			{/* <Intro selectedPage={selectedPage} links={links} /> */}
			<Menu selectedPage={selectedPage} h1={h1} links={links} />
		</header>
	)
}

export default Header
