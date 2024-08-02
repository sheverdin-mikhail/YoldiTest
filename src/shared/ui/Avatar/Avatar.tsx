import clsx from 'clsx'
import Image from 'next/image'
import type { Image as ImageType } from '@/entities/image'
import cls from './Avatar.module.scss'


interface AvatarProps {
    className?: string;
    image?: ImageType;
    name: string;
	size?: AvatarSize;
}

export enum AvatarSize {
	SMALL = 'small',
	LARGE = 'large'
}

export const Avatar: React.FC<AvatarProps> = (props) => {
	const { className, image, name, size = AvatarSize.SMALL } = props

	return (
		<div
			className={clsx(cls.avatar, cls[size], className)}
			style={
				{
					width: size,
					height: size,
				}
			}
		>
			{
				image
					? (
						<Image
							className={cls.img}
							src={image.url}
							height={Number(image.height)}
							width={Number(image.width)}

							alt={`${name}_avatar`}
						/>
					)
					: <span className={cls.char}>{name[0]}</span>
			}
		</div>
	)
}
