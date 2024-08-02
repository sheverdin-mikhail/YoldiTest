import { LoginForm } from '@/features/loginForm'
import { RegisterForm } from '@/features/registerForm'


interface RegisterPageProps {
    className?: string;
}

export const RegisterPage: React.FC<RegisterPageProps> = (props) => {
	const { className } = props

	return (
		<>
			<RegisterForm />
		</>
	)
}
