//Layout
export interface Links { [key: string]: {title: string, href: string} }

//Intro
export interface IntroTexts {[key:string]: React.JSX.Element|string}

//Project
export interface PROJECT {
    image: string,
    name: string,
    desc: string,
    url: string
}