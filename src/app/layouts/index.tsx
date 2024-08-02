import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/root.scss'
import Head from 'next/head'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { PageLayout } from '@/widgets/PageLayout'
import { AntdConfigProvider } from '../providers/AntdConfigProvider/AntdConfigProvider'


const inter = Inter({ subsets: [ 'latin' ] })

export const metadata: Metadata = {
	title: 'Yoldi Test App',
	description: 'Yoldi Test App',
}

export function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Head>
				<title key="title">Yold test task</title>
				<meta
					key="description"
					name="description"
					content="Yold test task application"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet" />
			</Head>

			<body className={inter.className}>
				<AntdRegistry>
					<AntdConfigProvider>
						<PageLayout>
							{children}
						</PageLayout>
					</AntdConfigProvider>
				</AntdRegistry>
			</body>
		</html>
	)
}
