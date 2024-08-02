import clsx from 'clsx'
import { ReactElement, ReactNode } from 'react'
import cls from './Container.module.scss'


interface ContainerProps {
    className?: string;
    children: ReactNode;
}

export const Container: React.FC<ContainerProps> = (props) => {
	const { className, children } = props

	return (
		<div className={clsx(cls.container, {}, [ className ])}>
			{children}
		</div>
	)
}
