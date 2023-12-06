import Link from "next/link"
import { Links } from "../types"

function Menu({links}: {links: Links}){
  return(
    <nav className="h-26 p-4">
        <ul>
          <li><Link href={links.aboutme.href}>{links.aboutme.title}</Link></li>
          <li><Link href={links.skills.href}>{links.skills.title}</Link></li>
          <li><Link href={links.projects.href}>{links.projects.title}</Link></li>
          <li><Link href={links.contact.href}>{links.contact.title}</Link></li>
        </ul>
    </nav>
  )
}

export default Menu