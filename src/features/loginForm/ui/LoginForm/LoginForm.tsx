'use client'
import { useSWRConfig } from 'swr'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRouter } from 'next/navigation'
import { InputRow } from '@/shared/ui/InputRow/InputRow'
import { Button } from '@/shared/ui/Button/Button'
import { Form } from '@/widgets/Form'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const'
import { Text } from '@/shared/ui/Text/Text'
import { useAccount } from '@/entities/account'
import { LoginFormFields } from '../../model/types/loginForm'
import cls from './LoginForm.module.scss'
import { logIn } from '../../model/services/logIn'


interface LoginFormProps {
    className?: string;
}

const schema = yup
	.object({
		email: yup.string().email('E-mail ввден неверно').required('Это поле обязательно для заполнения'),
		password: yup.string().required('Это поле обязательно для заполнения'),
	}).required()

export const LoginForm: React.FC<LoginFormProps> = (props) => {
	const { className } = props
	const router = useRouter()
	const { mutate } = useSWRConfig()
	const { setToken, setIsAuth } = useAccount()

	const {
		handleSubmit,
		setError,
		control,
		formState: { errors },
	  } = useForm<LoginFormFields>(
		{
			mode: 'onBlur',
			resolver: yupResolver(schema),
		}
	)

	  const onSubmitHandler: SubmitHandler<LoginFormFields> = (data) => {
		mutate('/api/accounts', logIn(data))
			.then((value) => {
				if (value) {
					localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, value)
					setToken?.(value)
					setIsAuth?.(true)
					router.push('profile')
				}
			})
			.catch(err => {
				if (err.response.status === 401) {
					setError('root', {
						message: err.response.data.message,
					})
				}
			})
	  }


	return (
		<Form title="Вход в Yoldi Agency" onSubmit={handleSubmit(onSubmitHandler)}>
			<div className={cls.inputs}>
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
			<Button>Войти</Button>
			<Text className={cls.error} paragraph>{errors.root?.message}</Text>
		</Form>
	)
}
