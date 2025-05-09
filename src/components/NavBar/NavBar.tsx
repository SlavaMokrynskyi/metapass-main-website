'use client';

import React from 'react'
import Link from 'next/link'
import './NavBar.css'
import { usePathname } from 'next/navigation';

const NavBar = () => {
	const pathname = usePathname()
	console.log(pathname)
	return (
		<>
			<div className='nav-bar'>
				<div className='nav-bar-main-div'>
					<p>METAPASS</p>
					<Link
						href='/'
						className={`nav-link ${pathname === '/' ? 'active' : ''}`}
					>
						{' '}
						home
					</Link>
					<Link
						href='/events'
						className={`nav-link ${pathname === '/events' ? 'active' : ''}`}
					>
						events
					</Link>
					<Link
						href='/profile'
						className={`nav-link ${pathname === '/profile' ? 'active' : ''}`}
					>
						profile
					</Link>
					<Link
						href='/about'
						className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
					>
						about
					</Link>
				</div>
				<div className='wallet-link'>
					<Link
						href='/wallet'
						className={`nav-link ${pathname === '/wallet' ? 'active' : ''}`}
					>
						Wallet
					</Link>
				</div>
			</div>
		</>
	)
}

export default NavBar;
