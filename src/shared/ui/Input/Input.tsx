'use client'
import clsx from 'clsx'
import { Input as AInput, InputProps } from 'antd'
import Password from 'antd/es/input/Password'
import Image from 'next/image'
import { ChangeEventHandler, useCallback, useMemo, useState } from 'react'
import EyeIcon from '@/shared/assets/img/icons/eye-solid-icon.svg'
import EyeSlashIcon from '@/shared/assets/img/icons/eye-slash-icon.svg'
import LockIcon from '@/shared/assets/img/icons/lock-solid-icon.svg'
import EnvelopeIcon from '@/shared/assets/img/icons/envelope-icon.svg'
import UserIcon from '@/shared/assets/img/icons/user-icon.svg'
import cls from './Input.module.scss'


interface MyInputProps extends InputProps{
    className?: string;
    name?: InputName | string;
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

export const Input: React.FC<MyInputProps> = (props) => {
	const { className, type, name = '', ...otherProps } = props
	const [ isVisible, setisVisible ] = useState(false)
	const eyeIconRender = useCallback((visible: boolean) => (visible ? (
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
	)), [])


	if (type === 'password' ) {
		return (
			<Password
				prefix={
					name ? (
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

	return (
		<AInput
			className={clsx(cls.input, className)}
			prefix={
				InputIcon[name] ? (
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
}
