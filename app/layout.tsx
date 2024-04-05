import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import ModalProvider from '@/components/providers/modal-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Akodush',
	description: 'dushboard made by Aleksei Kosumov',
	icons: {},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<ModalProvider />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
