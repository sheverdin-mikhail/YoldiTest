'use client'
import axios from 'axios'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const'


export const $api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})


$api.interceptors.request.use(
	(config) => {
	  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)

	  if (token) {
			config.headers['X-API-KEY'] = token
	  }

	  return config
	},
	(error) => Promise.reject(error)
)
