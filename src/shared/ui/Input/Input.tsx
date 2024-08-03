'use client'

import clsx from 'clsx'
import { Input as AInput, InputProps, InputRef } from 'antd'
import Password from 'antd/es/input/Password'
import Image from 'next/image'
import { useCallback, useState, forwardRef } from 'react'
import TextArea from 'antd/es/input/TextArea'
import EyeIcon from '@/shared/assets/img/icons/eye-solid-icon.svg'
import EyeSlashIcon from '@/shared/assets/img/icons/eye-slash-icon.svg'
import LockIcon from '@/shared/assets/img/icons/lock-solid-icon.svg'
import EnvelopeIcon from '@/shared/assets/img/icons/envelope-icon.svg'
import UserIcon from '@/shared/assets/img/icons/user-icon.svg'
import { useDevice } from '@/entities/device'
import cls from './Input.module.scss'


interface MyInputProps extends Record<string, any>{
  className?: string;
  name?: InputName | string;
  hasPreffix?: boolean
  isError?: boolean;
  type: string;
}

export enum InputName {
  NAME = 'name',
  EMAIL = 'email',
  PASSWORD = 'password',
}

const InputIcon: Record<string, any> = {
	[InputName.NAME]: UserIcon,
	[InputName.PASSWORD]: LockIcon,
	[InputName.EMAIL]: EnvelopeIcon,
}

const InputComponent = forwardRef<InputRef, MyInputProps>((props, ref) => {
	const { className, type, name = '', hasPreffix, isError, ...otherProps } = props
	const [ isVisible, setisVisible ] = useState(false)
	const { isMobileView } = useDevice()
	const eyeIconRender = useCallback(
		(visible: boolean) =>
			visible ? (
				<Image
					src={EyeSlashIcon}
					alt="eye"
					className={cls.eyeIcon}
				/>
			) : (
				<Image
					src={EyeIcon}
					alt="eye"
					className={cls.eyeIcon}
				/>
			),
		[]
	)

	if (type === 'password') {
		return (
			<Password
				ref={ref}
				status={isError ? 'error' : undefined}
				prefix={
					name && hasPreffix ? (
						<Image
							src={InputIcon[InputName.PASSWORD]}
							alt={InputName.PASSWORD}
							className={cls.prefixIcon}
						/>
					) : null
				}
				className={clsx(cls.input, className)}
				iconRender={eyeIconRender}
				visibilityToggle={{ visible: isVisible, onVisibleChange: setisVisible }}
				{...otherProps}
			/>
		)
	}

	if (name === 'description') {
		return (
			<TextArea
				ref={ref}
				className={cls.textArea}
				rows={5}
				autoSize={
					isMobileView && {
						maxRows: 10,
					}
				}
				style={
					{
						resize: 'none',
					}
				}
				{...otherProps}
			/>
		)
	}

	if (name === 'slug') {
		return (
			<AInput
				ref={ref}
				className={cls.inputWithAddon}
				addonBefore={<span className={cls.addon}>example.com</span>}
				{...otherProps}
			/>
		)
	}

	return (
		<AInput
			ref={ref}
			className={clsx(cls.input, className)}
			status={isError ? 'error' : undefined}
			prefix={
				hasPreffix && InputIcon[name] ? (
					<Image
						src={InputIcon[name]}
						alt={name}
						className={cls.prefixIcon}
					/>
				) : null
			}
			{...otherProps}
		/>
	)
})

export { InputComponent as Input }
