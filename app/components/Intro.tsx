"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { jsxElementToString } from "../utils/functions"
import { motion } from "framer-motion"
import { IntroTexts, Links } from "../types"

function Intro({links}: {links: Links}){

  //STATES
  //The amount of introTexts must be equal to the number of introTextsData Elements
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
      animate: {color: "#666" },
      transition: { ease: 'easeOut', duration: 10 },
  }

  //DATA 
  const prompt: string = ">"
  const introTextsData: React.JSX.Element[] = [
    <>hola mundo!</>,

    <>me llamo  <motion.span {...animationProps} animate={{ color: "#FFF" }}>
        <a  href={links.homepage.href} style={{ textDecoration: "none" }}> Aleix Alsina</a>
      </motion.span>
    </>,

    <>soy <motion.span {...animationProps} animate={{ color: "var(--frontend-developer-color)" }}>frontend developer</motion.span></>,

    <>si has llegado hasta mi web posiblemente sea porque quieres saber más <motion.span {...animationProps} animate={{ color: "var(--about-me-color)" }}>
          <a href={links.aboutme.href}>{links.aboutme.title}</a>
      </motion.span>
    </>,
    
    <>Aquí podrás encontrar un portafolio con todos los <motion.span {...animationProps} animate={{ color: "var(--projects-color)"}}>
          <a href={links.projects.href}>{links.projects.title}</a>
      </motion.span> donde he trabajado, así como un detallado listado de mi&nbsp; <motion.span {...animationProps} animate={{ color: "var(--skills-color)"}}>
        <a href={links.skills.href}>{links.skills.title}</a>
      </motion.span>
    </>
  ] 


  //INTRO TEXTS USE EFFECT
  useEffect(() => { 

    const showPrompt = async (dataKey: string) => {
      setIntroTexts((currentIntroTexts) => { return {...currentIntroTexts, [dataKey]: prompt }})
      await new Promise(resolve => setTimeout(resolve, 700))
    }

    const showTextLetterByLetter = async (dataKey: string, stateIndex: number) => {
      let introTextDataString: string = jsxElementToString(introTextsData[stateIndex])
      for (let i=0; i<introTextDataString.length; i++) {
        setIntroTexts((currentIntroTexts) => { 
          return {...currentIntroTexts, [dataKey]: currentIntroTexts[dataKey] + introTextDataString[i] }
        })
        await new Promise(resolve => setTimeout(resolve, 40))
      }
    }

    const changeStringIntroToJSX = async (dataKey: string, stateIndex: number) => {
      setIntroTexts((currentIntroTexts) => { 
        return {...currentIntroTexts, 
          [dataKey]:<motion.span {...animationProps} >{prompt}{introTextsData[stateIndex]}</motion.span>
        }
      })
    }

    const showIntro = async () => {
      let stateIndex = introTextIndex.current
      let dataKey = `introText${stateIndex}`
      await showPrompt(dataKey)
      await showTextLetterByLetter(dataKey, stateIndex)
      changeStringIntroToJSX(dataKey, stateIndex)
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
      if(!(introTextIndex.current >= showCursorsClass.length && showCursorsClass.every(value => !value))){
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
      {Object.keys(introTexts).map((dataKey, i) => {
        return <p key={i} className={`block mb-6 ${showCursorsClass[i] ? "cursor": ""}`}>{introTexts[dataKey]}</p>
      })}
    </div>
  )
}

export default Intro