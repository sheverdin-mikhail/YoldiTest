import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import cls from './CustomLink.module.scss'


interface CustomLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: LinkTheme;
}

export enum LinkTheme {
    BUTTON = 'button',
    TEXT = 'text'
}

export const CustomLink: React.FC<CustomLinkProps> = (props) => {
	const { className, href, children, theme = LinkTheme.TEXT, ...otherProps } = props

	return (
		<Link
			href={href}
			className={clsx(cls.customLink, {}, [ cls[theme], className ])}
			{...otherProps}
		>
			{children}
		</Link>
	)
}
