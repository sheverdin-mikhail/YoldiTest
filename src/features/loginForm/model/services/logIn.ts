import { $api } from '@/shared/configs/api/api'
import { LoginFormFields } from '../types/loginForm'


export const logIn = async (fields: LoginFormFields) => {
	const response = await $api.post<{value: string}>('/auth/login/', fields)

	return response.data.value
}
