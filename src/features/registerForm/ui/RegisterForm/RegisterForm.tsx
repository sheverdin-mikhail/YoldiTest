'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSWRConfig } from 'swr'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Form } from '@/widgets/Form'
import { Button } from '@/shared/ui/Button/Button'
import { InputRow } from '@/shared/ui/InputRow/InputRow'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const'
import { useAccount } from '@/entities/account'
import type { RegisterFormFields } from '../../model/types/register'
import cls from './RegisterForm.module.scss'
import { signUp } from '../../model/services/signUp'


interface RegisterFormProps {
    className?: string;
}

const schema = yup
	.object({
		name: yup.string().required('Это поле обязательно для заполнения'),
		email: yup.string().email('E-mail ввден неверно').required('Это поле обязательно для заполнения'),
		password: yup.string().required('Это поле обязательно для заполнения'),
	}).required()

export const RegisterForm: React.FC<RegisterFormProps> = (props) => {
	const { className } = props
	const { mutate } = useSWRConfig()
	const { setToken, setIsAuth } = useAccount()
	const router = useRouter()
	const [ isLoading, setIsLoading ] = useState(false)

	const {
		handleSubmit,
		setError,
		control,
		formState: { errors, isValid },
	  } = useForm<RegisterFormFields>(
		{
			mode: 'onBlur',
			resolver: yupResolver(schema),
		}
	)

	  const onSubmitHandler: SubmitHandler<RegisterFormFields> = async (data) => {
		setIsLoading(true)
		mutate('/api/accounts', signUp(data))
			.then(value => {
				if (value) {
					localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, value)
					setToken?.(value)
					setIsAuth?.(true)
					router.push('profile')
				}
			})
			.catch(err => {
				if (err.response.status === 409) {
					setError('email', {
						message: err.response.data.message,
					})
				}
			})
			.then(() => setIsLoading(false))
	  }


	return (
		<Form title="Регистрация в Yoldi Agency" onSubmit={handleSubmit(onSubmitHandler)}>
			<div className={cls.inputs}>
				<InputRow
					error={errors.name}
					control={control}
					name="name"
					placeholder="Имя"
				/>
				<InputRow
					error={errors.email}
					control={control}
					name="email"
					placeholder="E-mail"
				/>
				<InputRow
					error={errors.password}
					control={control}
					name="password"
					placeholder="Пароль"
					type="password"
				/>
			</div>
			<Button disabled={!isValid || isLoading}>Создать аккаунт</Button>
		</Form>
	)
}
