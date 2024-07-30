import clsx from 'clsx';
import cls from './PageLayout.module.scss';
import { ReactNode } from 'react';
import { Header } from '@/widgets/Header';
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

interface PageLayoutProps {
    className?: string
    children: ReactNode
}

export const PageLayout: React.FC<PageLayoutProps> = (props) => {
    const { className, children } = props

    return (

        <div className={cls.layout}>
            <Header className={inter.className}/>
            <main className={clsx(cls.mainContent, {}, [className, inter.className])}>
                {children}
            </main>
        </div>
    );
}