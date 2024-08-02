import clsx from 'clsx'
import { ReactElement } from 'react'
import cls from './Container.module.scss'


interface ContainerProps {
    className?: string;
    children: ReactElement;
}

export const Container: React.FC<ContainerProps> = (props) => {
	const { className, children } = props

	return (
		<div className={clsx(cls.container, {}, [ className ])}>
			{children}
		</div>
	)
}
