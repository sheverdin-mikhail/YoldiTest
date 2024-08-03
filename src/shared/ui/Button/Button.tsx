import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'
import cls from './Button.module.scss'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
	size?: ButtonSize
}

export enum ButtonTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export enum ButtonSize {
    LARGE = 'lg',
    SMALL = 'sm'
}

export const Button: React.FC<ButtonProps> = (props) => {
	const { className, theme = ButtonTheme.PRIMARY, children, size = ButtonSize.LARGE, ...otherProps } = props


	return (
		<button className={clsx(cls.button, {}, [ cls[theme], cls[size], className ])} {...otherProps}>
			{children}
		</button>
	)
}
