import clsx from 'clsx'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Header } from '@/widgets/Header'
import cls from './PageLayout.module.scss'


const inter = Inter({ subsets: [ 'latin' ] })

interface PageLayoutProps {
    className?: string
    children: ReactNode
}

export const PageLayout: React.FC<PageLayoutProps> = (props) => {
	const { className, children } = props

	return (

		<div className={cls.layout}>
			<Header className={inter.className} />
			<main className={clsx(cls.mainContent, {}, [ className, inter.className ])}>
				{children}
			</main>
		</div>
	)
}
