'use client'
import clsx from 'clsx'
import { Flex } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Cover } from '@/shared/ui/Cover/Cover'
import { Container } from '@/shared/ui/Container/Container'
import { Avatar, AvatarSize } from '@/shared/ui/Avatar/Avatar'
import { Text } from '@/shared/ui/Text/Text'
import { useAccount } from '@/entities/account'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import PenIcon from '@/shared/assets/img/icons/pen-solid.svg'
import SignOutIcon from '@/shared/assets/img/icons/sign-out-alt-solid.svg'
import { EditProfileModal } from '@/features/editProfile'
import { useDevice } from '@/entities/device'
import cls from './ProfilePage.module.scss'


export const ProfilePage: React.FC = () => {
	const { account, signOut, isAuth, isLoading } = useAccount()
	const router = useRouter()
	const [ isOpen, setIsOpen ] = useState(false)
	const { isMobileView } = useDevice()

	const onClickExit = () => {
		signOut?.()
	}

	if (!isAuth && !isLoading) {
		router.push('/login')
	}

	return (
		<>
			<div className={clsx(cls.profilePage)}>
				<Cover image={account?.cover} />
				<Container className={cls.container}>
					<Avatar
						size={AvatarSize.LARGE}
						name={account?.name ?? ''}
						image={account?.image}
						className={cls.avatar}
					/>
					<Flex
						align="flex-start"
						justify="space-between"
					>
						<Flex
							align="flex-start"
							className={cls.col}
							vertical

						>
							<Flex gap={10} vertical>
								<Text title>{account?.name}</Text>
								<Text className={cls.email} paragraph>{account?.email}</Text>
								{
									isMobileView && (
										<Button
											size={ButtonSize.SMALL}
											theme={ButtonTheme.SECONDARY}
											className={cls.button}
											onClick={() => setIsOpen(true)}
										>
											<Image
												className={cls.icon}
												src={PenIcon}
												alt="pen"
											/>
											Редактировать
										</Button>
									)
								}
							</Flex>
							<Text className={cls.description} paragraph>{account?.description}</Text>
							<Button
								size={ButtonSize.SMALL}
								className={clsx(cls.exit, cls.button)}
								theme={ButtonTheme.SECONDARY}
								onClick={onClickExit}
							>
								<Image
									className={cls.icon}
									src={SignOutIcon}
									alt="signout"
								/>
							Выйти
							</Button>
						</Flex>
						{
							!isMobileView && (
								<Button
									size={ButtonSize.SMALL}
									theme={ButtonTheme.SECONDARY}
									className={cls.button}
									onClick={() => setIsOpen(true)}
								>
									<Image
										className={cls.icon}
										src={PenIcon}
										alt="pen"
									/>
							Редактировать
								</Button>
							)
						}
					</Flex>
				</Container>
			</div>
			<EditProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	)
}

{/*  */}
