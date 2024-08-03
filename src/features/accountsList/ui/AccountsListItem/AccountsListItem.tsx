import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { Account } from '@/entities/account'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { useDevice } from '@/entities/device'
import cls from './AccountsListItem.module.scss'


interface AccountsListItemProps {
    className?: string;
    item: Account;
}

export const AccountsListItem: React.FC<AccountsListItemProps> = (props) => {
	const { className, item } = props
	const router = useRouter()
	const { isMobileView } = useDevice()

	const onClickHandler = () => {
		router.push(`/account/${item.slug}`)
	}

	return (
		<div className={clsx(cls.accountsListItem, {}, [ className ])} onClick={onClickHandler}>
			<Avatar
				image={item.image}
				name={item.name}
				className={cls.avatar}
			/>
			<div className={cls.row}>
				<span className={cls.name}>{item.name}</span>
				{
					isMobileView && (
						<span className={cls.email}>
							{item.email}
						</span>
					)
				}
			</div>
			{
				!isMobileView && (
					<span className={cls.email}>
						{item.email}
					</span>
				)
			}
		</div>
	)
}
