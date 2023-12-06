"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { jsxElementToString } from "../utils/functions"
import { motion } from "framer-motion"
import { IntroTexts, Links } from "../types"

function Intro({links}: {links: Links}){

  //STATES
  //The amount of useStates must be equal to the number of introTextsData Elements
   const [introTexts, setIntroTexts] = useState<IntroTexts>(
    {introText0: "", introText1:"", introText2:"", introText3:"", introText4:""}
  )
  const [showCursorsClass, setShowCursorsClass] = useState<boolean[]>([
    false, false, false, false, false
  ])

  //REF
  const introTextIndex = useRef(0)

  //ANIMATION GENERAL CONFIG
  const animationProps = {
      animate: {color: "#444" },
      transition: { ease: 'easeOut', duration: 10 },
  }

  //DATA 
  const prompt: string = ">"
  const introTextsData: React.JSX.Element[] = [
    <>hola mundo!</>,

    <>me llamo  <motion.span {...animationProps} animate={{ color: "#FFF" }}>
        <Link href={links.homepage.href}> Aleix Alsina</Link>
      </motion.span>
    </>,

    <>soy <motion.span {...animationProps} animate={{ color: "#F66" }}>frontend developer</motion.span></>,

    <>si has llegado hasta mi web posiblemente sea porque quieres saber más <motion.span {...animationProps} animate={{ color: "#Ffb366" }} style={{textDecoration: "underline"}}>
          <Link href={links.aboutme.href}>{links.aboutme.title}</Link>
      </motion.span>
    </>,
    
    <>Aquí podrás encontrar un portafolio con todos los <motion.span {...animationProps} animate={{ color: "#6f6"}} style={{textDecoration: "underline"}}>
          <Link href={links.projects.href}>{links.projects.title}</Link>
      </motion.span> donde he trabajado, así como un detallado listado de mis <motion.span {...animationProps} animate={{ color: "#6ff"}} style={{textDecoration: "underline"}}>
        <Link href={links.skills.href}>{links.skills.title}</Link>
      </motion.span>
    </>
  ] 


  //INTRO TEXTS USE EFFECT
  useEffect(() => { 

    const showPrompt = async (key: string) => {
      setIntroTexts((currentIntroTexts) => { return {...currentIntroTexts, [key]: prompt }})
      await new Promise(resolve => setTimeout(resolve, 1200))
    }

    const showTextLetterByLetter = async (key: string, index: number) => {
      let introTextData: string = jsxElementToString(introTextsData[index])
      for (let i=0; i<introTextData.length; i++) {
        setIntroTexts((currentIntroTexts) => { 
          return {...currentIntroTexts, [key]: currentIntroTexts[key] + introTextData[i] }
        })
        await new Promise(resolve => setTimeout(resolve, 60))
      }
    }

    const changeStringIntroToJSX = async (key: string, index: number) => {
      setIntroTexts((currentIntroTexts) => { 
        return {...currentIntroTexts, 
          [key]:<motion.span {...animationProps} >{prompt}{introTextsData[index]}</motion.span>
        }
      })
    }

    const showIntro = async () => {
      let index = introTextIndex.current
      let introTextKey = `introText${index}`
      await showPrompt(introTextKey)
      await showTextLetterByLetter(introTextKey, index)
      changeStringIntroToJSX(introTextKey, index)
      introTextIndex.current++
    }

    const showIntros = async () => {
      for (let i=0; i<Object.keys(introTexts).length; i++) {
        await showIntro()
      }
    }

    showIntros()

  }, [])


  //CURSOR USE EFFECT
  useEffect(()=>{
    const cursorAnimate = async () => {
      await new Promise(resolve => setTimeout(resolve, 450))
      if(!(introTextIndex.current >= showCursorsClass.length &&
        showCursorsClass.every(value => !value))){
        setShowCursorsClass(currentCursor => { 
          return currentCursor.map((cursor, index) => {
            return introTextIndex.current === index ? !cursor : false
          })
        })
      }
    }
    cursorAnimate()
  },[showCursorsClass])


  //RENDER
  return(
    <div className="intro font-bold p-4 sm:p-6 text-lg sm:text-3xl flex-1 w-[23rem] sm:w-[36rem]">
      {Object.keys(introTexts).map((key, index) => {
        return <p key={index} className={`block mb-6 ${showCursorsClass[index] ? "cursor": ""}`}>{introTexts[key]}</p>
      })}
    </div>
  )
}

export default Intro