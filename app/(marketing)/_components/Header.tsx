'use client'

import { Button } from '@/components/ui/button'
import Logo from './Logo'
import { useLoginModal } from '@/hooks/use-login-modal'
import { useRegisterModal } from '@/hooks/use-register-modal'

const Header = () => {
	const loginSettings = useLoginModal()
	const registerSettings = useRegisterModal()

	return (
		<div className='flex justify-between mb-8 '>
			<Logo />
			<div className='flex items-center gap-x-2'>
				<Button variant='ghost' onClick={loginSettings.onOpen}>
					Log in
				</Button>
				<Button onClick={registerSettings.onOpen}>Start for free</Button>
			</div>
		</div>
	)
}

export default Header
