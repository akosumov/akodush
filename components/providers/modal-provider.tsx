'use client'

import LoginModal from '../modals/LoginModal'
import { useState, useEffect } from 'react'
import RegisterModal from '../modals/RegisterModal'
import SettingsModal from '../modals/settings-modal'

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => setIsMounted(true), [])

	if (!isMounted) return null

	return (
		<>
			<LoginModal />
			<RegisterModal />
			<SettingsModal />
		</>
	)
}

export default ModalProvider
