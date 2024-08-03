import { $api } from '@/shared/configs/api/api'
import { RegisterFormFields } from '../types/register'


export const signUp = async (fields: RegisterFormFields) => {
	const response = await $api.post<{value: string}>('/auth/sign-up/', fields)

	return response.data.value
}
