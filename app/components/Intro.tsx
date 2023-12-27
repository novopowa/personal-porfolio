'use client'

import { scrollOnClick, jsxElementToString } from '../utils/functions'
import { useEffect, useRef, useState } from 'react'

import { motion } from 'framer-motion'
import { type INTROTEXT, type LINKS } from '../types'
import localStorageService from '../services/localStorageService'

function Intro ({ links, selectedPage }: { links: LINKS, selectedPage: string }): React.JSX.Element {
  // STATES
  // The amount of introTexts must be equal to the number of introTextsData Elements
  const [introTexts, setIntroTexts] = useState<INTROTEXT>(
    { introText0: '', introText1: '', introText2: '', introText3: '', introText4: '' }
  )
  const [showCursorsClass, setShowCursorsClass] = useState<boolean[]>([
    false, false, false, false, false
  ])

  // SERVICES
  const animateIntro = (): boolean => {
    const introStatus = localStorageService.getItem('introStatus')
    return introStatus === null && introStatus !== 'shown'
  }

  // REF
  const introTextIndex = useRef(0)

  // ANIMATION GENERAL CONFIG
  const animationProps = {
    animate: { color: '#666' },
    transition: { ease: 'easeOut', duration: animateIntro() ? 10 : 0 }
  }

  // DATA
  const prompt: string = '>'
  const introTextsData: React.JSX.Element[] = [
    <>hola mundo!</>,

    <>me llamo  <motion.span {...animationProps} animate={{ color: '#FFF' }}>
        <a href={links.homepage.href} style={{ textDecoration: 'none' }}> Aleix Alsina</a>
      </motion.span>
    </>,

    <>soy <motion.span {...animationProps} animate={{ color: 'var(--frontend-developer-color)' }}>frontend developer</motion.span></>,

    <>si has llegado hasta mi web posiblemente sea porque quieres saber más <motion.span {...animationProps} animate={{ color: 'var(--about-me-color)' }}>
          <a onClick={scrollOnClick} className={`intro-link about ${selectedPage === 'aboutme' ? 'selected' : ''}`} href={links.aboutme.href}><span>{links.aboutme.title}</span></a>
      </motion.span>
    </>,

    <>Aquí podrás encontrar un portafolio con todos los <motion.span {...animationProps} animate={{ color: 'var(--projects-color)' }}>
          <a onClick={scrollOnClick} className={`intro-link projects ${selectedPage === 'projects' ? 'selected' : ''}`} href={links.projects.href}><span>{links.projects.title}</span></a>
      </motion.span> donde he trabajado, así como un detallado listado de mi&nbsp; <motion.span {...animationProps} animate={{ color: 'var(--experiences-color)' }}>
        <a onClick={scrollOnClick} className={`intro-link experiences ${selectedPage === 'experiences' ? 'selected' : ''}`} href={links.experience.href}><span>{links.experience.title}</span></a>
      </motion.span>
    </>
  ]

  // INTRO TEXTS USE EFFECT
  useEffect(() => {
    const showPrompt = async (dataKey: string): Promise<void> => {
      setIntroTexts((currentIntroTexts) => { return { ...currentIntroTexts, [dataKey]: prompt } })
      await new Promise(resolve => setTimeout(resolve, 700))
    }

    const showTextLetterByLetter = async (dataKey: string, stateIndex: number): Promise<void> => {
      const introTextDataString: string = jsxElementToString(introTextsData[stateIndex])
      for (let i = 0; i < introTextDataString.length; i++) {
        setIntroTexts((currentIntroTexts) => {
          return { ...currentIntroTexts, [dataKey]: currentIntroTexts[dataKey] as string + introTextDataString[i] }
        })
        await new Promise(resolve => setTimeout(resolve, 40))
      }
    }

    const changeStringIntroToJSX = async (dataKey: string, stateIndex: number): Promise<void> => {
      setIntroTexts((currentIntroTexts) => {
        return {
          ...currentIntroTexts,
          [dataKey]: <motion.span {...animationProps} >{prompt}{introTextsData[stateIndex]}</motion.span>
        }
      })
    }

    const showIntro = async (): Promise<void> => {
      const stateIndex = introTextIndex.current
      const dataKey = `introText${stateIndex}`
      await showPrompt(dataKey)
      await showTextLetterByLetter(dataKey, stateIndex)
      changeStringIntroToJSX(dataKey, stateIndex).then(() => {}, () => {})
      introTextIndex.current++
    }

    const showIntros = async (): Promise<void> => {
      if (animateIntro()) {
        for (let i = 0; i < Object.keys(introTexts).length; i++) {
          await showIntro()
        }
        localStorageService.setItem<string>('introStatus', 'shown')
      } else {
        showIntroAllAtOnce()
      }
    }

    showIntros().then(() => {}, () => {})
  }, [])

  // CURSOR USE EFFECT
  useEffect(() => {
    const cursorAnimate = async (): Promise<void> => {
      await new Promise(resolve => setTimeout(resolve, 450))
      if (animateIntro()) {
        if (!(introTextIndex.current >= showCursorsClass.length && showCursorsClass.every(value => !value))) {
          setShowCursorsClass(currentCursor => {
            return currentCursor.map((cursor, index) => introTextIndex.current === index ? !cursor : false)
          })
        }
      }
    }
    cursorAnimate().then(() => {}, () => {})
  }, [showCursorsClass])

  // ON SELECTED PAGE CHANGE

  const showIntroAllAtOnce = (): void => {
    console.log('entra')
    setIntroTexts((currentIntroTexts) => {
      const newIntroTexts = { ...currentIntroTexts }
      introTextsData.forEach((text, index) => {
        const key = `introText${index}`
        newIntroTexts[key] = <motion.span {...animationProps}>{prompt}{text}</motion.span>
      })
      return newIntroTexts
    })
  }

  useEffect(() => {
    if (animateIntro()) {
      if (introTextIndex.current > introTextsData.length - 1) {
        showIntroAllAtOnce()
      }
    } else {
      showIntroAllAtOnce()
    }
  }, [selectedPage])

  // RENDER
  return (
    <div className="intro font-bold p-4 sm:p-6 text-lg sm:text-3xl flex-1 w-[23rem] sm:w-[36rem]">
      {Object.keys(introTexts).map((dataKey, i) => {
        return <p key={i} className={`block mb-6 ${showCursorsClass[i] ? 'cursor' : ''}`}>{introTexts[dataKey]}</p>
      })}
    </div>
  )
}

export default Intro
