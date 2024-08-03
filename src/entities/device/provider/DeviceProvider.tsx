'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { isWebview } from '@dvlden/is-webview'
import { debounce } from '@/shared/utils/debounce'


const handleViewportResize = (): ViewState => {
	const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

	return {
		isMobileView: width < 761,
		isDesktopView: width >= 761,
		isWebView: isWebview(window.navigator.userAgent),
	}
}

export const _isMobileDevice = (userAgent: string) => {
	const isAndroid = Boolean(userAgent.match(/Android/i))
	const isIOS = Boolean(userAgent.match(/iPhone|iPad|iPod/i))
	const isOpera = Boolean(userAgent.match(/Opera Mini/i))
	const isWindows = Boolean(userAgent.match(/IEMobile/i))
	const isMobileDevice = Boolean(isAndroid || isIOS || isOpera || isWindows)
	const isWebView = isWebview(userAgent)

	return {
		isMobileDevice,
		isAndroid,
		isIOS,
		isWebView,
	}
}

type ViewState = {
  // viewport < 761
  isMobileView?: boolean
  // viewport >= 761
  isDesktopView?: boolean
  // browser in mobile app
  isWebView?: boolean
}

type State = ViewState & {
  isMobileDevice?: boolean
  isAndroid?: boolean
  isIOS?: boolean
  isWebView?: boolean
}

const INITIAL_STATE = {

}

export const DeviceContext = createContext<State>(INITIAL_STATE)

export const useDevice = () => {
	return useContext(DeviceContext)
}

type DeviceProviderProps = {
  userAgent: string
}

export const DeviceProvider: React.FC<React.PropsWithChildren<DeviceProviderProps>> = (props) => {
	const { children, userAgent } = props

	const [ viewState, setViewState ] = useState<ViewState>({
		isMobileView: true,
		isDesktopView: true,
		isWebView: true,
	})

	const { isMobileDevice, isAndroid, isIOS } = _isMobileDevice(userAgent)

	useEffect(() => {
		setViewState(handleViewportResize())

		const handleResize = debounce(() => {
			setViewState(handleViewportResize())
		}, 100)

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const context = {
		...viewState,
		isMobileDevice,
		isAndroid,
		isIOS,
		isWebview,
	}

	return (
		<DeviceContext.Provider value={context}>
			{children}
		</DeviceContext.Provider>
	)
}
