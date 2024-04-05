import BarChart from './_components/BarChart'
import Card from './_components/Card'
import Customer from './_components/Customer'
import PipeChart from './_components/PipeChart'

import { dataGender, dataCustomer, dataNewUser } from '@/data/dushboard-data'
const Dushboard = () => {
	return (
		<div className='h-full flex flex-col gap-y-10'>
			<h1 className='font-medium text-2xl'>Good Morning, Aleksei</h1>
			<div className='grid grid-cols-2 gap-10'>
				<div className='grid grid-cols-2 gap-5 '>
					<Card
						cardTitle='Total Profit'
						stata='6,350'
						isDollar
						percentages='23'
					/>
					<Card cardTitle='Total Customer' stata='655,345' percentages='20' />
					<Card cardTitle='Total order' stata='13,837' percentages='12' />
					<Card cardTitle='Active customer' stata='482,489' percentages='30' />
				</div>

				<div className='flex gap-x-20'>
					<PipeChart
						chartTitle='Statistic by gender'
						legends={['Female', 'Male']}
						data={dataGender}
					/>
					<PipeChart
						chartTitle='Accounts Type'
						data={dataCustomer}
						legends={['Facebook', 'Website']}
					/>
				</div>

				<BarChart />

				<div className='flex gap-x-20'>
					<Customer />
					<div className='items-start'>
						<PipeChart
							chartTitle='New Customers'
							data={dataNewUser}
							legends={['New', 'Old']}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dushboard
