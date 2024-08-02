'use client'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { Text } from '@/shared/ui/Text/Text'
import cls from './Form.module.scss'


interface FormProps {
    className?: string
    title?: string
    children: ReactNode
}

export const Form: React.FC<FormProps> = (props) => {
	const { className, title, children } = props

	return (
		<div className={clsx(cls.wrapper, {}, [ className ])}>
			<form className={cls.formContent} onSubmit={e => e.preventDefault()}>
				<Text className={cls.title} title>
					{title}
				</Text>

				{children}
			</form>
		</div>
	)
}
