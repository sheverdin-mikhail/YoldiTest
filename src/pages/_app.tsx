import '@/app/styles/root.scss'
import App, { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { PageLayout } from '@/widgets/PageLayout'


const MyApp = ({ Component, pageProps }: AppProps) => {

	return (
		<>
			<Head>
				<title key="title">Yold test task</title>
				<meta
					key="description"
					name="description"
					content="Yold test task application"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			</Head>

			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>

		</>
	)
}


MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext)

	return appProps
}

export default MyApp
