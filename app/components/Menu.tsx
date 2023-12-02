import Link from "next/link"

function Menu(){
  return(
    <nav className="h-26 p-4">
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/skills">skills</Link></li>
          <li><Link href="/projects">projects</Link></li>
          <li><Link href="/contact">contact</Link></li>
        </ul>
    </nav>
  )
}

export default Menu