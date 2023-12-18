import { ReactNode, useRef } from "react"

function Background({ children }:{ children: ReactNode }){

    /*const scrollRef = useRef<HTMLElement>(null)

    const {scrollYProgress} = useScroll({
      container: scrollRef
    }) 

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      console.log("Page scroll: ", latest)
    })

    //clip-path: path('M0 0 L100 0 L100 100 Q80 150, 100 100 L100 0 Z'); /* Forma una "S" en la parte derecha */

    
    return(
      <main className="flex-1 bg-cover bg-left background-aboutme relative overflow-auto">
          {children}
      </main>
    )
  }
  
export default Background 