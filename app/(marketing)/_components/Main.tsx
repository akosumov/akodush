'use client'

import { Button } from '@/components/ui/button'
import Chart from './Chart'
import { useRegisterModal } from '@/hooks/use-register-modal'

const Main = () => {
	const registerSettings = useRegisterModal()
	return (
		<div className='rounded-lg h-2/3 w-full text-center bg-primary pt-32 flex flex-col items-center gap-y-10 dark:bg-card'>
			<h1 className='text-6xl font-bold text-white '>
				CUSTOMER <br />
				RELATIONSHIP MAGIC
			</h1>
			<h3 className='text-lg font-medium text-white'>
				Powerful,flexible and data-driven, Akodush system makes it easy to build
				the exact CRM <br /> your business needs.
			</h3>
			<Button variant='secondary' onClick={registerSettings.onOpen}>
				Get Akodush free
			</Button>
			<Chart />
		</div>
	)
}

export default Main
