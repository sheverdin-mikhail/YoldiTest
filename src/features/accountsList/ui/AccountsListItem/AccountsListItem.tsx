import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { Account } from '@/entities/account'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import cls from './AccountsListItem.module.scss'


interface AccountsListItemProps {
    className?: string;
    item: Account;
}

export const AccountsListItem: React.FC<AccountsListItemProps> = (props) => {
	const { className, item } = props
	const router = useRouter()

	const onClickHandler = () => {
		router.push(`/account/${item.slug}`)
	}

	return (
		<div className={clsx(cls.accountsListItem, {}, [ className ])} onClick={onClickHandler}>
			<div className={cls.row}>
				<Avatar
					image={item.image}
					name={item.name}
					className={cls.avatar}
				/>
				<span className={cls.name}>{item.name}</span>
			</div>
			<span className={cls.email}>
				{item.email}
			</span>
		</div>
	)
}
