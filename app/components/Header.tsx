import Menu from "./Menu"
import Intro from "./Intro"
import { Links } from "../types"


function Header({h1, links}: {h1: string, links: Links}){

  
  return(
    <header className="flex flex-col mt-0 mx-auto w-screen sm:w-[36rem] min-h-screen lg:sticky">
        <Intro links={links} />
        <Menu h1={h1} links={links}  />
    </header>
  )
}

export default Header

