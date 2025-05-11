'use client'

import React from 'react'
import Link from 'next/link'
import './NavBarWallet.css'

const NavBarWallet = () => {
	return (
		<>
			<div className='nav-bar'>
				<div className='nav-bar-main-div'>
					<p>METAPASS</p>
					<Link href='/'>home</Link>
				</div>
				<div>
					<Link href='/wallet'>Wallet</Link>
				</div>

				{/* Бургер-меню для мобільних */}
				<input type='checkbox' id='menu-toggle-wallet' hidden />
				<label htmlFor='menu-toggle-wallet' className='burger'>
					<div></div>
					<div></div>
					<div></div>
				</label>
			</div>
			<div className='mobile-menu'>
				<Link href='/'>home</Link>
				<Link href='/wallet'>Wallet</Link>
			</div>
		</>
	)
}

export default NavBarWallet
