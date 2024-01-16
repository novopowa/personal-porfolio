import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Porfolio de ALEIX ALSINA - Frontend Developer',
	description:
		'Soy un técnico especializado en desarrollo web con más de 6 años de experiencia. Aquí podrás encontrar los proyectos en los que he trabajado a lo largo de mi carrera.',
	applicationName: 'Porfolio de Aleix Alsina',
	referrer: 'origin-when-cross-origin',
	metadataBase: new URL('https://aleixalsina.vercel.app'),
	appleWebApp: true,
	openGraph: {
		title: 'Porfolio de ALEIX ALSINA - Frontend Developer',
		description:
			'Soy un técnico especializado en desarrollo web con más de 6 años de experiencia. Aquí podrás encontrar los proyectos en los que he trabajado a lo largo de mi carrera.',
		type: 'website',
		url: new URL('https://aleixalsina.vercel.app'),
		siteName: 'Porfolio de Aleix Alsina',
		locale: 'es_ES'
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
	return (
		<html lang='es'>
			<body>
				<div className='lg:flex min-h-screen'>{children}</div>
			</body>
		</html>
	)
}
