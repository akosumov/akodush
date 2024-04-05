'use client'

import { ListFilter, ArrowDownNarrowWide } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { cn } from '@/lib/utils'

import { CustomerData } from '@/data/customer-data'
import { Input } from '@/components/ui/input'

const Dashboard = () => {
	const [dataCustomer, setDataCustomer] = useState(CustomerData)
	const [dataCustomerClone, setDataCustomerClone] = useState([...dataCustomer])
	const [isMounted, setIsMounted] = useState(false)
	const [search, setSearch] = useState('')

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				searchAccounts()
			}
		}

		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [search])

	if (!isMounted) {
		return null
	}

	const searchAccounts = () => {
		if (search.length === 0) setDataCustomerClone([...CustomerData])

		const filteredData = [...dataCustomer].filter(item => {
			return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
		})

		setDataCustomerClone([...filteredData])
	}

	const handleSort = (value: string) => {
		const sortedData = [...dataCustomerClone]

		if (value === 'country') {
			sortedData.sort((a, b) => {
				return a.country.localeCompare(b.country)
			})
		}

		if (value === 'type') {
			sortedData.sort((a, b) => {
				return a.type.localeCompare(b.type)
			})
		}

		if (value === 'name') {
			sortedData.sort((a, b) => {
				return a.name.localeCompare(b.name)
			})
		}

		setDataCustomerClone([...sortedData])
	}

	const handleFilter = (value: string) => {
		setDataCustomerClone([...dataCustomer])

		const filteredData = [...dataCustomer].filter(item => {
			return item.type === value
		})

		setDataCustomerClone([...filteredData])

		if (value === 'None') {
			setDataCustomerClone([...dataCustomer])
		}
	}

	const handleDelete = (id: number) => {
		console.log(id)

		const filteredData = dataCustomer.filter(item => {
			return item.id !== id
		})

		setDataCustomer([...filteredData])
		setDataCustomerClone([...filteredData])
	}

	return (
		<div className='h-full flex flex-col gap-y-10 '>
			<h1 className='font-medium text-2xl'>Accounts</h1>
			<Card className=''>
				<CardContent className='pt-6 flex flex-col gap-y-10'>
					<div className='flex justify-between'>
						<Input
							placeholder='Search'
							className='w-20'
							value={search}
							onClick={e => {
								searchAccounts()
							}}
							onChange={e => {
								setSearch(e.target.value)
								searchAccounts()
							}}
						/>
						<div className='flex gap-x-5'>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant='outline' className=' h-10 w-20'>
										<ListFilter className='h-3.5 w-3.5' />
										<span className='sr-only sm:not-sr-only'>Filter</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align='end'>
									<DropdownMenuLabel>Filter by</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuCheckboxItem
										onClick={() => {
											handleFilter('Customer')
										}}
									>
										Customer
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem
										onClick={() => {
											handleFilter('Partner')
										}}
									>
										Partner
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem
										onClick={() => {
											handleFilter('Investor')
										}}
									>
										Investor
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem
										onClick={() => {
											handleFilter('None')
										}}
									>
										Show all
									</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant='outline' className=' h-10 w-22'>
										<ArrowDownNarrowWide className='h-3.5 w-3.5' />
										<span className='sr-only sm:not-sr-only'>Sort by</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align='end'>
									<DropdownMenuLabel>Sort by</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuCheckboxItem
										onClick={() => {
											handleSort('name')
										}}
									>
										Name
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem
										onClick={() => {
											handleSort('country')
										}}
									>
										Country
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem
										onClick={() => {
											handleSort('type')
										}}
									>
										Type
									</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
					<div>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Name</TableHead>
									<TableHead className='hidden sm:table-cell'>
										Industry
									</TableHead>
									<TableHead className='hidden sm:table-cell'>
										Country
									</TableHead>
									<TableHead className='hidden md:table-cell'>Type</TableHead>
									<TableHead className='text-right'>Action</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{dataCustomerClone.map((item, key) => (
									<TableRow key={item.gmail}>
										<TableCell>
											<div className='flex items-center gap-x-2'>
												<Avatar className='hidden h-9 w-9 sm:flex'>
													<AvatarImage src='/avatars/01.png' alt='Avatar' />
													<AvatarFallback>{item.avatarName}</AvatarFallback>
												</Avatar>
												<div>
													<div className='font-medium'>{item.name}</div>
													<div className='hidden text-sm text-muted-foreground md:inline'>
														{item.gmail}
													</div>
												</div>
											</div>
										</TableCell>
										<TableCell className='hidden sm:table-cell'>
											{item.industry}
										</TableCell>
										<TableCell className='hidden sm:table-cell'>
											<p className='text-muted-foreground'>{item.country}</p>
										</TableCell>
										<TableCell className='hidden md:table-cell'>
											<p
												className={cn(
													'text-blue-600 bg-blue-50 font-bold  max-w-min p-2 rounded-sm',
													item.type === 'Investor' &&
														'text-green-600 bg-green-50',
													item.type === 'Customer' &&
														'text-orange-600 bg-orange-50'
												)}
											>
												{item.type}
											</p>
										</TableCell>
										<TableCell className='text-right'>
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<p role='button' className='font-semibold text-lg'>
														...
													</p>
												</DropdownMenuTrigger>
												<DropdownMenuContent align='end'>
													<DropdownMenuLabel>Action</DropdownMenuLabel>
													<DropdownMenuSeparator />
													<DropdownMenuCheckboxItem
														onClick={() => {
															handleDelete(item.id)
														}}
													>
														Delete
													</DropdownMenuCheckboxItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</TableCell>
									</TableRow>
								))}
								{dataCustomerClone.length === 0 && (
									<p className='text-2xl mt-10'> No Customer</p>
								)}
							</TableBody>
						</Table>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default Dashboard
