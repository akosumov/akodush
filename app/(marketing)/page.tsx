'use client'

import Footer from './_components/Footer'
import Header from './_components/Header'
import Main from './_components/Main'
import { redirect, useRouter } from 'next/navigation'
import { auth } from '@/firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'

const MarketingPage = () => {
	const router = useRouter()
	const [user, loading] = useAuthState(auth)

	if (user) {
		redirect('dashboard')
	}

	if (loading) {
		return <></>
	}

	return (
		<div className='h-full py-5 px-10 '>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default MarketingPage
