import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { BiLogoTailwindCss } from 'react-icons/bi'

const FooterElement = ({ children, color }: { children: React.ReactNode; color: string }): React.JSX.Element => {
	return <span className={`[&>svg]:inline-block [&>svg]:-mt-1  font-semibold ${color}`}>{children}</span>
}

function Footer(): React.JSX.Element {
	return (
		<footer className='py-4 text-center text-sm italic text-gray-300 font-light'>
			<p>
				Hecho con{' '}
				<FooterElement color='text-red-300'>
					<TbBrandNextjs /> Next.js
				</FooterElement>
				,{' '}
				<FooterElement color='text-green-300'>
					<BiLogoTailwindCss /> Tailwind CSS
				</FooterElement>{' '}
				y{' '}
				<FooterElement color='text-blue-300'>
					<TbBrandTypescript /> TypeScript
				</FooterElement>
				.
			</p>
		</footer>
	)
}

export default Footer
