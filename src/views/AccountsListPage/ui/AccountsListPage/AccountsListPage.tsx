import { Text } from '@/shared/ui/Text/Text'
import { Container } from '@/shared/ui/Container/Container'
import cls from './AccountsListPage.module.scss'


export const AccountsListPage = () => {
	return (

		<Container
			className={cls.accountsListPage}
		>
			<Text title>Список аккаунтов</Text>
		</Container>
	)
}
