'use client'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { CustomLink, LinkTheme } from '@/shared/ui/CustomLink/CustomLink'
import { Text } from '@/shared/ui/Text/Text'
import cls from './Footer.module.scss'


interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = (props) => {
	const { className } = props
	const pathname = usePathname()


	return (
		<footer className={clsx(cls.footer, {}, [ className ])}>
			{
				pathname === '/login'
					? (
						<Text className={cls.text}>Еще нет аккаунта? <CustomLink href="/register">Зарегистрироваться</CustomLink></Text>
					)
					: (
						<Text className={cls.text}>Уже есть аккаунт? <CustomLink href="/login">Войти</CustomLink></Text>
					)
			}
		</footer>
	)
}
