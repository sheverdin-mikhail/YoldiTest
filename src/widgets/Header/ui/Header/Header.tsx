import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Skeleton } from 'antd'
import SkeletonButton from 'antd/es/skeleton/Button'
import SkeletonAvatar from 'antd/es/skeleton/Avatar'
import LogoIcon from '@/shared/assets/img/icons/logo-icon.svg'
import { Text } from '@/shared/ui/Text/Text'
import { CustomLink, LinkTheme } from '@/shared/ui/CustomLink/CustomLink'
import { useAccount } from '@/entities/account'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import cls from './Header.module.scss'


interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
	const { className } = props
	const { isAuth, account, isLoading } = useAccount()

	return (
		<header className={clsx(cls.header, {}, [ className ])}>
			<div className={cls.row}>
				<Link href="/">
					<Image src={LogoIcon} alt="" />
				</Link>
				<Text paragraph>Разрабатываем и запускаем <br /> сложные веб проекты</Text>
			</div>
			{
				isLoading
					? (
						<Flex align="center" gap={20}>
							<Skeleton
								paragraph={false}
								title={
									{
										width: 80,
									}
								}
								active
							/>
							<SkeletonAvatar
								className={cls.skeleton}
								size={50}
								active
							/>
						</Flex>
					)

					: isAuth
						? (
							<Link className={cls.link} href="/profile/">
								<Flex align="center" gap={20}>
									<Text paragraph>{account?.name}</Text>
									<Avatar
										className={cls.avatar}
										name={account?.name ?? 'G'}
										image={account?.image}
									/>
								</Flex>
							</Link>
						)
						: (
							<CustomLink href="/login" theme={LinkTheme.BUTTON}>
						Войти
							</CustomLink>
						)
			}
		</header>
	)
}
