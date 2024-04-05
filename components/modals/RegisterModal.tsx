'use client'

import { Dialog, DialogContent, DialogHeader } from '../ui/dialog'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useRegisterModal } from '@/hooks/use-register-modal'
import { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/config'
import { useRouter } from 'next/navigation'

const RegisterModal = () => {
	const registerSettings = useRegisterModal()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	const [createUserWithEmailAndPassword] =
		useCreateUserWithEmailAndPassword(auth)

	const handleSignUp = async () => {
		try {
			const res = await createUserWithEmailAndPassword(email, password)
			console.log({ res })
			setEmail('')
			setPassword('')
			localStorage.setItem('isAuthenticated', 'true')
			registerSettings.onClose()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Dialog
			open={registerSettings.isOpen}
			onOpenChange={registerSettings.onClose}
		>
			<DialogContent>
				<DialogHeader>
					<h2 className='text-center text-log font-semibold'>Register</h2>
				</DialogHeader>

				<Input
					placeholder='Email'
					type='email'
					value={email}
					onChange={e => {
						setEmail(e.target.value)
					}}
				/>
				<Input
					placeholder='Password'
					type='password'
					value={password}
					onChange={e => {
						setPassword(e.target.value)
					}}
				/>
				<Button onClick={handleSignUp}>Register</Button>
			</DialogContent>
		</Dialog>
	)
}

export default RegisterModal
