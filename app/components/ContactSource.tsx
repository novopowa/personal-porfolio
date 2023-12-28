import { type CONTACT_SOURCE } from '@/app/types'
import { Major_Mono_Display } from 'next/font/google'
import { useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'

const major = Major_Mono_Display({ subsets: ['latin'], weight: '400' })

function ContactSource(props: CONTACT_SOURCE): React.JSX.Element {
	enum copyTexts {
		copy = 'copiar',
		copied = 'copiado'
	}
	const [copyText, setCopyText] = useState<string>(copyTexts.copy)

	const copy = (text: string): void => {
		navigator.clipboard.writeText(text).then(
			() => {
				setCopyText(copyTexts.copied)
				setTimeout(() => {
					setCopyText(copyTexts.copy)
				}, 3000)
			},
			() => {}
		)
	}

	const content = (): React.JSX.Element => {
		return props.link !== undefined ? (
			<a
				href={props.link}
				rel='noopener noreferrer'
				target='_blank'
				className={`${major.className} text-lg my-3 p-3 rounded-xl border-2 min-w-[25rem]`}>
				{props.icon}
				{props.name}
				<MdArrowOutward />
			</a>
		) : (
			<button
				className={`${major.className} text-lg text-left my-3 p-3 rounded-xl border-2 min-w-[25rem]`}
				onClick={() => {
					copy(props.name)
				}}>
				{props.icon}
				{props.name}
				<span className={`float-right text-sm p-1 ${copyText === copyTexts.copy ? 'not-copied' : 'copied'}`}>
					{copyText}
				</span>
			</button>
		)
	}

	return content()
}

export default ContactSource
