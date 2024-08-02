import { Skeleton } from 'antd'
import cls from './AccountsListSkeleton.module.scss'


interface AccountsListSkeletonProps {
    className?: string;
}

export const AccountsListSkeleton: React.FC<AccountsListSkeletonProps> = (props) => {

	return (
		<>
			<Skeleton
				title={
					{
						style: { height: '50px' },
					}
				}
				paragraph={false}
				className={cls.skeleton}
				active
			/>
			<Skeleton
				title={
					{
						style: { height: '50px' },
					}
				}
				paragraph={false}
				className={cls.skeleton}
				active
			/>
			<Skeleton
				title={
					{
						style: { height: '50px' },
					}
				}
				paragraph={false}
				className={cls.skeleton}
				active
			/>
			<Skeleton
				title={
					{
						style: { height: '50px' },
					}
				}
				paragraph={false}
				className={cls.skeleton}
				active
			/>
		</>
	)
}
