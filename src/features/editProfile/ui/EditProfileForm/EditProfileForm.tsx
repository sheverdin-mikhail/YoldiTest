'use client'
import useSWR from 'swr'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Flex } from 'antd'
import { MouseEventHandler, useEffect } from 'react'
import { InputRow } from '@/shared/ui/InputRow/InputRow'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Text } from '@/shared/ui/Text/Text'
import { EditProfileFormFields } from '../../model/types/editProfile'
import cls from './EditProfileForm.module.scss'
import { editProfile } from '../../model/services/editProfile/editProfile'


interface EditProfileFormProps {
    className?: string
    onCancel?: () => void
}

const schema = yup
	.object({
		name: yup.string(),
		slug: yup.string(),
		description: yup.string(),
	})

export const EditProfileForm: React.FC<EditProfileFormProps> = (props) => {
	const { className, onCancel } = props
	const { data: account, mutate } = useSWR('/profile/')

	const {
		handleSubmit,
		control,
		formState: { errors },
	  } = useForm<EditProfileFormFields>(
		{
			mode: 'onBlur',
			resolver: yupResolver(schema),
			defaultValues: {
				name: account?.name ?? '',
				description: account?.description ?? '',
				slug: account?.slug ?? '',
			},
			values: {
				name: account?.name ?? '',
				description: account?.description ?? '',
				slug: account?.slug ?? '',
			},
		}
	)

	  const onSubmitHandler: SubmitHandler<EditProfileFormFields> = (data) => {
		mutate(editProfile(data)).then(() => onCancel?.())
	  }

	const onCancelHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()
		onCancel?.()
	}


	return (
		<form
			className={cls.editProfileForm}
			onSubmit={handleSubmit(onSubmitHandler)}
		>
			<Text title>Редактировать профиль</Text>
			<Flex gap={10} vertical>
				<InputRow
					error={errors.name}
					control={control}
					hasPreffix={false}
					defaultValue={account?.name}
					placeholder="Имя"
					name="name"
					label="Имя"
				/>
				<InputRow
					error={errors.description}
					control={control}
					name="slug"
					placeholder="Адрес профиля"
					label="Адрес профиля"
				/>
				<InputRow
					error={errors.description}
					control={control}
					name="description"
					placeholder="Описание"
					label="Описание"
				/>
			</Flex>
			<Flex justify="space-between" gap={10}>
				<Button
					className={cls.button}
					theme={ButtonTheme.SECONDARY}
					onClick={onCancelHandler}
				>Отмена
				</Button>
				<Button
					className={cls.button}
					type="submit"
				>Сохранить
				</Button>
			</Flex>
			<Text className={cls.error} paragraph>{errors.root?.message}</Text>
		</form>
	)
}
