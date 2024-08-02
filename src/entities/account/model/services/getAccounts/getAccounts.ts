import { Account } from '@/entities/account'
import { $api } from '@/shared/configs/api/api'


export const getAccounts = async () => {
	const response = await $api.get<Account[]>('/user', {
		params: {
			_limit: 10,
		},
	})

	return response.data
}
