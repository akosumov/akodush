import { CircleArrowUp } from 'lucide-react'

interface CardProps {
	cardTitle: string
	stata: string
	isDollar?: boolean
	percentages: string
}

import { Card as CardData } from '@/components/ui/card'

const Card = ({
	cardTitle,
	stata,
	isDollar = false,
	percentages,
}: CardProps) => {
	return (
		<CardData className='flex flex-col gap-y-2 border-2 rounded-sm p-4 '>
			<p className='font-semibold text-xl'>{cardTitle}</p>
			<div className='flex justify-between'>
				<h2 className='font-semibold text-xl'>
					{isDollar && '$'}
					{stata}
				</h2>
				<div className='flex gap-x-3 items-center bg-primary-foreground text-white p-1 rounded-sm'>
					<CircleArrowUp size={20} className='text-primary' />
					<p className='text-primary font-semibold'>+{percentages}%</p>
				</div>
			</div>
		</CardData>
	)
}

export default Card
