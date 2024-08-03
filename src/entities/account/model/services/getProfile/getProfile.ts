import { Account } from '@/entities/account'
import { $api } from '@/shared/configs/api/api'


export const getProfile = async () => {
	const response = await $api.get<Account>('/profile/')

	return response.data
}
