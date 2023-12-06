import Menu from "./Menu"
import Intro from "./Intro"
import { Links } from "../types"


function Header({links}: {links: Links}){

  
  return(
    <header className="flex flex-col mt-0 mx-auto w-full sm:w-[36rem] max-h-screen lg:sticky top-0">
        <Intro links={links} />
        <Menu links={links}  />
    </header>
  )
}

export default Header

