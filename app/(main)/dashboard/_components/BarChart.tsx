'use client'
import { BarChart as Chart, Bar, Tooltip, ResponsiveContainer } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CircleArrowUp } from 'lucide-react'

import { dataBar } from '@/data/dushboard-data'

const BarChart = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>The total revenue for this year</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-y-3 '>
				<div className='border-2 rounded-sm flex justify-between items-center py-7 px-4'>
					<div className='flex items-center gap-x-3'>
						<h2 className='font-semibold text-2xl'>$482,489</h2>
						<div className='flex gap-x-3 items-center bg-primary-foreground text-white p-1 rounded-sm'>
							<CircleArrowUp size={20} className='text-primary' />
							<p className='text-primary font-semibold'>+30%</p>
						</div>
					</div>
					<div className='flex flex-col gap-y-2'>
						<p className='text-sm font-semibold'>Increase amount $2.992.00</p>
						<p className='text-sm text-muted-foreground'>
							From 25/12/2023-25/12/2024
						</p>
					</div>
				</div>
				<div>
					<ResponsiveContainer width='100%' height={200}>
						<Chart
							width={500}
							height={300}
							data={dataBar}
							margin={{
								top: 20,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<Tooltip />
							<Bar yAxisId='left' dataKey='Revenue' fill='#E11D48' />
						</Chart>
					</ResponsiveContainer>
				</div>
				<div>
					<div className='bg-slate-200' style={{ height: '2px' }} />
					<div className='flex justify-around text-sm text-muted-foreground'>
						<p>Jan</p>
						<p>Feb</p>
						<p>Mar</p>
						<p>Apr</p>
						<p>May</p>
						<p>Jun</p>
						<p>Jul</p>
						<p>Aug</p>
						<p>Sep</p>
						<p>Oct</p>
						<p>Nov</p>
						<p>Dec</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default BarChart
