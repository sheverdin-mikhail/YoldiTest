import { Account } from '@/entities/account'
import { $api } from '@/shared/configs/api/api'
import { EditProfileFormFields } from '../../types/editProfile'


export const editProfile = async (fields: EditProfileFormFields) => {
	const response = await $api.patch<Account>('/profile/', fields)

	return response.data
}
