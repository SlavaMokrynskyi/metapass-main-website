
import Head from 'next/head'
import { Metadata } from 'next'
import "./layout.css"
import { Providers } from './Provider'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
	title: 'MetaPass',
	icons: {
		icon: 'images/MetaPass_icon.ico',
		apple: 'images/MetaPass_icon.ico',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Providers>
					<div>{children}</div>
					<Toaster position='top-right' reverseOrder={false}
						toastOptions={{style : {
							background: 'rgba(4, 2, 23, 1)',
							color: '#fff',
							borderRadius: '10px',
							padding: '16px',
							},
							success: {
							iconTheme: {
								primary: '#4ade80',
								secondary: '#f0fdf4',
							},
							},
							error: {
							style: {
								background: 'rgb(34, 3, 3)',
							},
							},
						}}
					/>
				</Providers>
			</body>
		</html>
	)
}