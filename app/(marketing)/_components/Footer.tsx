import Logo from './Logo'
import { Button } from '@/components/ui/button'

const Footer = () => {
	return (
		<div className='mt-72 flex justify-between items-center'>
			<Logo />
			<div className='flex items-center space-x-4'>
				<Button variant='ghost'>Privacy Policy</Button>
				<Button variant='ghost'>Terms & Conditions</Button>
			</div>
		</div>
	)
}

export default Footer
