'use client'

import { useLoginModal } from '@/hooks/use-login-modal'
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState } from 'react'
import { auth } from '@/firebase/config'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { toast } from 'sonner'

const LoginModal = () => {
	const loginSetting = useLoginModal()

	const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSignIn = async () => {
		try {
			const res = await signInWithEmailAndPassword(email, password)
			console.log({ res })
			setEmail('')
			setPassword('')
			localStorage.setItem('isAuthenticated', 'true')
			loginSetting.onClose()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Dialog open={loginSetting.isOpen} onOpenChange={loginSetting.onClose}>
			<DialogContent>
				<DialogHeader>
					<h2 className='text-center text-log font-semibold'>Log in</h2>
				</DialogHeader>

				<Input
					placeholder='Email'
					type='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<Input
					placeholder='Password'
					type='password'
					value={password}
					onChange={e => {
						setPassword(e.target.value)
					}}
				/>
				<Button onClick={handleSignIn}>Log in</Button>
			</DialogContent>
		</Dialog>
	)
}

export default LoginModal
