import { Account } from '@/entities/account'
import { $api } from '@/shared/configs/api/api'


export const getAccounts = async () => {
	const response = await $api.get<Account[]>('/user')

	return response.data
}
