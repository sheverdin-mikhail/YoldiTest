import clsx from 'clsx'
import { Form } from '@/widgets/Form'
import { Button } from '@/shared/ui/Button/Button'
import cls from './LoginForm.module.scss'
import Password from 'antd/es/input/Password';
import { Input } from '@/shared/ui/Input/Input';


interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
	const { className } = props

	return (
		<Form title="Вход в Yoldi Agency">
			<div className={cls.inputs}>
                <Input 
                    placeholder='E-mail' 
                    className={cls.input} 
                    name='email'
                />
                <Input 
                    placeholder='Пароль' 
                    className={cls.input} 
                    name='password'
                    type='password'
                />
            </div>
			<Button>Войти</Button>
		</Form>
	)
}
