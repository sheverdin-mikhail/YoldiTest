'use client'

import {
	ReactNode, useCallback, useEffect, useRef, useState,
} from 'react'
import clsx from 'clsx'
import { Portal } from '@/shared/ui/Portal/Portal'
import cls from './Modal.module.scss'


interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 200

export const Modal: React.FC<ModalProps> = (props) => {
	const {
		className,
		children,
		isOpen = false,
		onClose,
	} = props

	const [ isClosing, setIsClosing ] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()
	const modalRef = useRef<HTMLElement | undefined>(undefined)

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [ onClose ])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler()
		}
	}, [ closeHandler ])

	useEffect(() => {
		if (typeof document !== 'undefined') {
			modalRef.current = document.getElementById('app-modals') ?? undefined
		}

		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
			document.body.style['overflow'] = 'hidden'
		}

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onKeyDown)
			document.body.style['overflow'] = 'auto'
		}
	}, [ isOpen, onKeyDown ])

	const mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	}

	return (
		<Portal element={modalRef.current}>
			<div className={clsx(cls.modal, mods)}>
				<div className={cls.overlay}>
					<div className={clsx(cls.content, {}, [ className ])}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
