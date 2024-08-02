'use client'
import clsx from 'clsx'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import { Flex } from 'antd'
import { Cover } from '@/shared/ui/Cover/Cover'
import { Container } from '@/shared/ui/Container/Container'
import { Avatar, AvatarSize } from '@/shared/ui/Avatar/Avatar'
import { getAccountDetail } from '@/entities/account'
import { Text } from '@/shared/ui/Text/Text'
import cls from './AccountDetailPage.module.scss'


interface AccountDetailPageProps {
    className?: string;
}

export const AccountDetailPage: React.FC<AccountDetailPageProps> = (props) => {
	const { className } = props
	const params = useParams<{account_slug: string}>()
	const { data: account } = useSWR(`/api/accounts/${params?.account_slug}/`, getAccountDetail(params!.account_slug))

	return (
		<div className={clsx(cls.accountDetailPage, {}, [ className ])}>
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
