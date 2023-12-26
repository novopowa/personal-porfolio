import { Bungee_Outline } from 'next/font/google'

const bungeeOutline = Bungee_Outline({ subsets: ['latin'], weight: '400' })

function H2 ({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <h2 className={`${bungeeOutline.className} text-5xl xl:text-7xl text-center my-16`}>{children}</h2>
  )
}

export default H2
