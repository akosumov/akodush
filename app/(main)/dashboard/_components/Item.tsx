import { LucideIcon } from 'lucide-react'
import { useState } from 'react'

interface ItemProps {
	label: string
	onClick?: () => void
	icon: LucideIcon
}

const Item = ({ label, icon: Icon, onClick }: ItemProps) => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div onClick={onClick} role='button'>
			<Icon className='text-muted-foreground transition hover:text-primary' />
		</div>
	)
}

export default Item
