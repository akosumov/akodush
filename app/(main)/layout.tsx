'use client'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase/config'
import Navigation from './dashboard/_components/Navigation'
import { redirect } from 'next/navigation'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	const [user, loading] = useAuthState(auth)

	if (loading) {
		return <></>
	}

	if (!user || !localStorage.getItem('isAuthenticated')) {
		redirect('/')
	}

	return (
		<div className='h-full flex '>
			<Navigation />
			<main className='flex-1 h-full pl-5 pt-5'>{children}</main>
		</div>
	)
}

export default DashboardLayout
