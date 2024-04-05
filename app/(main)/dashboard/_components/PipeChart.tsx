'use client'

import { PieChart, Pie, Cell } from 'recharts'
import { Card } from '@/components/ui/card'

const COLORS = ['#E11D48', ' #2358ff ']

interface PipeChartProps {
	chartTitle: string
	legends: Array<string>
	data: Array<object>
}

const PipeChart = ({ chartTitle, legends, data }: PipeChartProps) => {
	return (
		<Card className='w-72 border-2 rounded-sm p-4'>
			<p className='font-semibold text-xl'>{chartTitle}</p>
			<div className='flex flex-col items-center'>
				<PieChart width={200} height={200}>
					<Pie
						data={data}
						dataKey='value'
						cx='50%'
						cy='50%'
						outerRadius={60}
						fill='#E11D48'
					>
						{data.map((entry, index: number) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
				<div className='flex items-center gap-x-2 text-xs text-muted-foreground w'>
					<div className='flex items-center gap-x-2'>
						<div className='bg-primary rounded-full w-2 h-2' />
						<p>{legends[0]} </p>
					</div>
					<div className='flex items-center gap-x-2'>
						<div className='bg-blue-700 rounded-full w-2 h-2' />
						{legends[1]}
					</div>
				</div>
			</div>
		</Card>
	)
}

export default PipeChart
