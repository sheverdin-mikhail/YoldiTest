'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/root.scss'
import Head from 'next/head'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { useEffect, useState } from 'react'
import { PageLayout } from '@/widgets/PageLayout'
import { AccountProvider } from '@/entities/account'
import { DeviceProvider } from '@/entities/device'
import { AntdConfigProvider } from '../providers/AntdConfigProvider/AntdConfigProvider'


const inter = Inter({
	subsets: [ 'latin' ],
	weight: [ '400', '500' ],
	variable: '--font-family-main',
})

export const metadata: Metadata = {
	title: 'Yoldi Test App',
	description: 'Yoldi Test App',
}

export function RootLayout({ children }: { children: React.ReactNode }) {
	const [ userAgent, setUserAgent ] = useState<string | null>(null)

	useEffect(() => {
		setUserAgent(window.navigator.userAgent)
	}, [])

	return (
		<html lang="en" className={`${inter.variable} font-sans`}>
			<Head>
				<title key="title">Yold test task</title>
				<meta
					key="description"
					name="description"
					content="Yold test task application"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				<meta name="format-detection" content="telephone=no" />
			</Head>

			<body>
				<AntdRegistry>
					<AntdConfigProvider>
						<DeviceProvider userAgent={userAgent || ''}>
							<AccountProvider>
								<PageLayout>
									{children}
								</PageLayout>
								<div id="app-modals" />
							</AccountProvider>
						</DeviceProvider>
					</AntdConfigProvider>
				</AntdRegistry>
			</body>
		</html>
	)
}
