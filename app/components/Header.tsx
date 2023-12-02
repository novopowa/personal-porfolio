import Menu from "./Menu"

function Header(){
  return(
    <header className="flex flex-col w-full sm:w-[36rem] max-h-screen lg:sticky top-0">
        <div className="font-bold p-5 text-4xl md:text-6xl flex-1">
          <p className="block mb-4">&gt;hello world</p>
          <h1 className="block mb-4">&gt;my name is <span>Aleix Alsina</span></h1> 
          <p className="block mb-4">&gt;i'm a <span>frontend developer</span></p> 
          <p>&gt;if you are here maybe you are interested in...</p> 
        </div>
        <Menu />
    </header>
  )
}

export default Header