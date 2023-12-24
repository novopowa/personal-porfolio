import { type PROJECT } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import { MdOpenInNew } from 'react-icons/md'

function Project (props: PROJECT): React.JSX.Element {
  const clickText = (): React.JSX.Element => {
    return (
      <>
        Ir a la URL del proyecto <MdOpenInNew />
      </>
    )
  }
  return (
      <div className="project w-full max-w-sm rounded-lg overflow-hidden relative">
        <Link href={props.url} rel="noopener noreferrer" target="_blank" className="image">
          <span className="absolute top-1/2 w-full text-center z-10 py-3 hidden">{clickText()}</span>
          <Image src={`/images/${props.image}`} alt={props.name} width={400} height={450} className="w-[400px] h-[450px]"/>
        </Link>
        <div className="p-5">
          <h3 className="text-lg font-bold">{props.name}</h3>
          <p className="py-3">{props.desc}</p>
        </div>
        <Link href={props.url} rel="noopener noreferrer" target="_blank" className="button block w-full text-center p-3 no-underline font-semibold">
           {clickText()}
        </Link>
      </div>
  )
}

export default Project
