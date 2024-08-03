'use client'

import clsx from 'clsx'
import useSWR from 'swr'
import { getAccounts } from '@/entities/account'
import cls from './AccountsList.module.scss'
import { AccountsListItem } from '../AccountsListItem/AccountsListItem'
import { AccountsListSkeleton } from '../AccountsListSkeleton/AccountsSkeleton'


interface AccountsListProps {
    className?: string;
}

export const AccountsList: React.FC<AccountsListProps> = (props) => {
	const { className } = props
	const { data: accountsList, isLoading } = useSWR('/api/accounts', getAccounts)

	return (
		<div className={clsx(cls.accountsList, {}, [ className ])}>
			{
				isLoading
					? <AccountsListSkeleton />
					: accountsList?.length && accountsList?.map(account => (
						<AccountsListItem key={account.slug} item={account} />
					))
			}
		</div>
	)
}
