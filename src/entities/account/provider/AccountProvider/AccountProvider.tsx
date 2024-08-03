'use client'
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import useSWR from 'swr'
import { Account } from '@/entities/account'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const'
import { getProfile } from '../../model/services/getProfile/getProfile'


interface AccountProviderProps {
  children: ReactNode
}

interface State{
  token?: string
  isAuth: boolean
  account?: Account
  isLoading?: boolean
  setToken?: (token: string) => void
  signOut?: () => void
  setIsAuth?: (isAuth: boolean) => void
}


const INITIAL_STATE: State = {
	isAuth: false,
}

const AccountContext = createContext<State>({ ...INITIAL_STATE })

export const useAccount = () => useContext<State>(AccountContext)


export const AccountProvider: React.FC<AccountProviderProps> = ({ children }) => {

	const [ token, setToken ] = useState<string>('')
	const [ isAuth, setIsAuth ] = useState(false)
	const { data: account, isLoading, error, mutate } = useSWR('/profile/', getProfile, {
		onSuccess: (account) => {
			if (account) {
				setIsAuth(true)
			}
		},
		onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
			if (error.status === 401) {
				return
			}

			if (retryCount >= 1) {
				return
			}
		},
		onError: () => {
			setIsAuth(false)
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
		},
	})

	const setTokenHandler = (token: string) => {
		setToken(token)
	}

	const signOutHandler = () => {
		localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
		setIsAuth(false)
		setToken('')
		mutate()
	}

	useEffect(() => {
		if (token) {
			mutate()
		}
	}, [ token ])

	useEffect(() => {
		const initialToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)

		if (initialToken) {
			setToken(initialToken)
		}
	}, [])

	const value: State = useMemo(() => ({
		token,
		account,
		isAuth,
		isLoading,
		setToken: setTokenHandler,
		signOut: signOutHandler,
		setIsAuth,
	}), [ token, account, isAuth, isLoading ])


	return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
}

