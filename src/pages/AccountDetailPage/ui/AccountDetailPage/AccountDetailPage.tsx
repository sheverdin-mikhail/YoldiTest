'use client'
import clsx from 'clsx'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import { Flex } from 'antd'
import { FC, ReactNode } from 'react'
import { Cover } from '@/shared/ui/Cover/Cover'
import { Container } from '@/shared/ui/Container/Container'
import { Avatar, AvatarSize } from '@/shared/ui/Avatar/Avatar'
import { getAccountDetail } from '@/entities/account'
import { Text } from '@/shared/ui/Text/Text'
import cls from './AccountDetailPage.module.scss'


interface AccountDetailPageProps {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

export const AccountDetailPage: FC<AccountDetailPageProps> = ({ params }) => {
	const { data: account } = useSWR(`/api/accounts/${params?.slug}/`, getAccountDetail(params!.slug))

	return (
		<div className={clsx(cls.accountDetailPage)}>
			<Cover image={account?.cover} />
			<Container className={cls.container}>
				<Avatar
					size={AvatarSize.LARGE}
					name={account?.name ?? ''}
					image={account?.image}
					className={cls.avatar}
				/>
				<Flex className={cls.nameRow}>
					<Text title>{account?.name}</Text>
				</Flex>
				<Flex gap={30} vertical>
					<Text className={cls.email} paragraph>{account?.email}</Text>
					<Text className={cls.description} paragraph>{account?.description}</Text>
				</Flex>
			</Container>
		</div>
	)
}
