'use client'
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts'
import { data } from '@/data/chart-data'

const Chart = () => {
	return (
		<div
			className=' w-2/4 h-96 absolute left-2/4 -translate-x-2/4 rounded-lg bg-white dark:bg-secondary'
			style={{ top: '560px' }}
		>
			<h1 className='text-muted-foreground text-lg p-2 dark:bg-secondary '>
				Users over Time
			</h1>
			<ResponsiveContainer
				width='100%'
				height='100%'
				className='dark:bg-secondary'
			>
				<AreaChart
					className='dark:bg-secondary'
					width={500}
					height={400}
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}
				>
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />

					<Area
						type='monotone'
						dataKey='users'
						stroke='#E11D48'
						fill='#E11D48'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Chart
