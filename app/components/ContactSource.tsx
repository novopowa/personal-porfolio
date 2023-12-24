import { CONTACT_SOURCE } from "@/app/types"
import {Major_Mono_Display } from 'next/font/google'
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const major = Major_Mono_Display({ subsets: ['latin'], weight: '400' })

function ContactSource(props: CONTACT_SOURCE){
  
  enum copyTexts { copy = "copiar", copied= "copiado" }
  const [copyText, setCopyText] = useState<string>(copyTexts.copy)

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopyText(copyTexts.copied) 
    setTimeout(() =>{
      setCopyText(copyTexts.copy) 
    }, 3000)
  }

  const content = () => {
    return props.link ? 
      <a href={props.link} rel="noopener noreferrer" target="_blank" className={`${major.className} text-lg my-3 p-3 rounded-xl border-2 min-w-[25rem]`}>
        {props.icon}{props.name}<MdArrowOutward />
      </a> 
    : 
      <div className={`${major.className} text-lg my-3 p-3 rounded-xl border-2 min-w-[25rem]`}>
        {props.icon}{props.name}
        <button className={`float-right text-sm p-1 ${copyText === copyTexts.copy ? "not-copied" : "copied"}`} onClick={() => copy(props.name)}>{copyText}</button>
      </div>
  }

  return content()
}

export default ContactSource