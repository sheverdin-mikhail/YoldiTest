import { LoginForm } from '@/features/loginForm'


interface LoginPageProps {
    className?: string;
}

export const LoginPage: React.FC<LoginPageProps> = (props) => {
	const { className } = props

	return (
		<>
			<LoginForm />
		</>
	)
}
