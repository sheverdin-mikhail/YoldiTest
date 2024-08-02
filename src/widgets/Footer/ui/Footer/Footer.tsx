'use client'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { CustomLink, LinkTheme } from '@/shared/ui/CustomLink/CustomLink'
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
						<span>Еще нет аккаунта? <CustomLink href="/register">Зарегистрироваться</CustomLink></span>
					)
					: (
						<span>Уже есть аккаунт? <CustomLink href="/login">Войти</CustomLink></span>
					)
			}
		</footer>
	)
}
