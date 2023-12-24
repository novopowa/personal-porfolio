import { EXPERIENCE } from "@/app/types"


function Experience(props: EXPERIENCE){

  return(
      <div className="experience flex gap-3 mb-12 max-w-2xl relative p-3">
        <div className="years min-w-[9rem] text-sm text-right">{props.start} — {props.end}</div>
        <div className="[&>p]:mb-2">
          <h3 className="text-lg font-bold leading-4 mb-2">{props.position}</h3>
          <h4 className="mb-2">{props.company} ({props.location})</h4>
          {props.desc}
          <div className="mt-4">
            {props.technologies.map((technology, i) => { 
              return <span className="tag inline-block p-1 px-2 rounded-md mr-2 mb-2 text-sm" key={i}>{technology}</span>
            })}
          </div>
        </div>
      </div>  
  )
}

export default Experience