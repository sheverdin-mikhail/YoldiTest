import clsx from 'clsx'
import { ReactNode } from 'react'
import cls from './Text.module.scss'


interface TextProps {
    className?: string;
    title?: boolean;
    paragraph?: boolean;
    children: ReactNode;
}

export const Text: React.FC<TextProps> = (props) => {
	const { className, title, paragraph, children } = props

	if (title) {
		return <h1 className={clsx(cls.title, className)}>{children}</h1>
	}

	if (paragraph) {
		return <p className={clsx(cls.paragraph, className)}>{children}</p>
	}

	return (
		<span className={className}>
			{children}
		</span>
	)
}
