
import Head from 'next/head'
import { Metadata } from 'next'
import "./layout.css"
import { Providers } from './Provider'

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
				</Providers>
			</body>
		</html>
	)
}