'use client'

import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'


interface PortalProps {
	children: ReactNode;
	element?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = (props) => {
	const { children, element } = props
	const [ mounted, setMounted ] = useState(false)
	const [ container, setContainer ] = useState<HTMLElement | null>(null)

	useEffect(() => {
		setMounted(true)

		if (element) {
			setContainer(element)
		}
		else {
			setContainer(document.body)
		}
	}, [ element ])

	if (!mounted || !container) {
		return null
	}

	return createPortal(children, container)
}
