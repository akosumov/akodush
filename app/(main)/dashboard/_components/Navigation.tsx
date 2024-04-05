'use client'

import Image from 'next/image'
import Item from './Item'
import { LogOut, LayoutDashboard, Settings, UserSearch } from 'lucide-react'
import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/config'
import { useRouter } from 'next/navigation'
import { useSettings } from '@/hooks/use-settings'

const Navigation = () => {
	const router = useRouter()
	const settings = useSettings()

	const [signOut, loading, error] = useSignOut(auth)

	const handleSignOut = async () => {
		localStorage.removeItem('isAuthenticated')
		const success = await signOut()
		console.log(success)
	}

	return (
		<>
			<aside className='h-full border-r overflow-y-auto relative flex flex-col w-32  mb-5 items-center pt-3 gap-y-8'>
				<Image src='/logo.png' alt='logo' width={60} height={60} />
				<Item
					label='Home'
					icon={LayoutDashboard}
					onClick={() => router.push('/dashboard')}
				/>
				<Item
					label='Contacts'
					icon={UserSearch}
					onClick={() => router.push('/contacts')}
				/>
				<Item
					label='Settings'
					icon={Settings}
					onClick={() => {
						settings.onOpen()
						console.log(settings.isOpen)
					}}
				/>
				<Item label='Logout' icon={LogOut} onClick={handleSignOut} />
			</aside>
		</>
	)
}

export default Navigation
