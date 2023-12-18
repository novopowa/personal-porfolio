import { Major_Mono_Display } from 'next/font/google'
import Menu from "./Menu"
import Intro from "./Intro"
import { Links } from "../types"

const major = Major_Mono_Display({ subsets: ['latin'], weight: '400' })

function Header({h1, links}: {h1: string, links: Links}){

  return(
    <header className={`flex flex-col mt-0 mx-auto w-screen sm:w-[36rem] lg:w-auto lg:flex-[0_0_36rem]  min-h-screen lg:sticky ${major.className}`}>
        <Intro links={links} />
        <Menu h1={h1} links={links}  />
    </header>
  )
}

export default Header

