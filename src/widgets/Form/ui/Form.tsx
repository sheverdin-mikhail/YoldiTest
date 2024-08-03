'use client'
import clsx from 'clsx'
import { FormEventHandler, FormHTMLAttributes, ReactNode } from 'react'
import { Text } from '@/shared/ui/Text/Text'
import cls from './Form.module.scss'


interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    className?: string
    title?: string
    children: ReactNode
}

export const Form: React.FC<FormProps> = (props) => {
	const { className, title, children, onSubmit } = props


	return (
		<div className={clsx(cls.wrapper, {}, [ className ])}>
			<form className={cls.formContent} onSubmit={onSubmit}>
				<Text className={cls.title} title>
					{title}
				</Text>

				{children}
			</form>
		</div>
	)
}
