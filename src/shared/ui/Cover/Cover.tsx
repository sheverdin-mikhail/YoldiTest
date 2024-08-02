import clsx from 'clsx'
import Image from 'next/image'
import type { Image as ImageType } from '@/entities/image'
import cls from './Cover.module.scss'


interface CoverProps {
    className?: string;
    height?: number;
    image?: ImageType;
}

export const Cover: React.FC<CoverProps> = (props) => {
	const { className, image, height = 200 } = props

	return (
		<div className={clsx(cls.cover, {}, [ className ])} style={{ height: height }}>
			{
				image && (
					<Image
						className={cls.image}
						width={Number(image.width)}
						height={Number(image.height)}
						src={image.url}
						alt="cover"
					/>
				)
			}
		</div>
	)
}
