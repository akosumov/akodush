import Image from 'next/image'

const Logo = () => {
	return (
		<div className='flex items-center gap-x-2'>
			<Image src='/logo.png' alt='logo' width={60} height={60} />
			<p className='text-muted-foreground font-semibold'>Akoboard</p>
		</div>
	)
}

export default Logo
