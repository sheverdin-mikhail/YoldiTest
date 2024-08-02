import { Form } from '@/widgets/Form'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import cls from './RegisterForm.module.scss'


interface RegisterFormProps {
    className?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = (props) => {
	const { className } = props

	return (
		<Form title="Регистрация в Yoldi Agency">
			<div className={cls.inputs}>
				<Input
					placeholder="Имя"
					className={cls.input}
					name="name"
				/>
				<Input
					placeholder="E-mail"
					className={cls.input}
					name="email"
				/>
				<Input
					placeholder="Пароль"
					className={cls.input}
					name="password"
					type="password"
				/>
			</div>
			<Button>Создать аккаунт</Button>
		</Form>
	)
}
