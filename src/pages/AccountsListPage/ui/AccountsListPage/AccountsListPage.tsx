import { Text } from '@/shared/ui/Text/Text'
import { Container } from '@/shared/ui/Container/Container'
import { AccountsList } from '@/features/accountsList'
import cls from './AccountsListPage.module.scss'


export const AccountsListPage = () => {
	return (
		<Container
			className={cls.accountsListPage}
		>
			<Text className={cls.title} title>Список аккаунтов</Text>
			<AccountsList />
		</Container>
	)
}
