import { Bungee_Outline } from 'next/font/google'

const bungeeOutline = Bungee_Outline({ subsets: ['latin'], weight: '400' })

function Contact(){
    return(
        <section id="contacto" className="page contact min-h-screen relative">
            <h2 className={`${bungeeOutline.className} text-white`}>Contacto</h2>
        </section>
    )
}

export default Contact