import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import LogoIcon from '@/shared/assets/img/icons/logo-icon.svg'
import { Text } from '@/shared/ui/Text/Text'
import { CustomLink, LinkTheme } from '@/shared/ui/CustomLink/CustomLink'
import cls from './Header.module.scss'


interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
	const { className } = props

	return (
		<header className={clsx(cls.header, {}, [ className ])}>
			<div className={cls.row}>
				<Link href="/">
					<Image src={LogoIcon} alt="" />
				</Link>
				<Text paragraph>Разрабатываем и запускаем <br /> сложные веб проекты</Text>
			</div>
			<CustomLink href="/login" theme={LinkTheme.BUTTON}>
                Войти
			</CustomLink>
		</header>
	)
}
