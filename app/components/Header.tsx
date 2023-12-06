import Menu from "./Menu"
import Intro from "./Intro"

function Header(){

  return(
    <header className="flex flex-col mt-0 mx-auto w-full sm:w-[36rem] max-h-screen lg:sticky top-0">
        <Intro />
        <Menu />
    </header>
  )
}

export default Header

