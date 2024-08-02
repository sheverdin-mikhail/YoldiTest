import { Account } from '@/entities/account'
import { $api } from '@/shared/configs/api/api'


export const getAccountDetail = (accountSlug: string) => async () => {
	const response = await $api.get<Account>(`/user/${accountSlug}/`)

	return response.data
}
