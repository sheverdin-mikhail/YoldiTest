import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import cls from './Button.module.scss'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}

export enum ButtonTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export const Button: React.FC<ButtonProps> = (props) => {
	const { className, theme = ButtonTheme.PRIMARY, children, onClick, ...otherProps } = props

	return (
		<button className={clsx(cls.button, {}, [ cls[theme], className ])} {...otherProps}>
			{children}
		</button>
	)
}
