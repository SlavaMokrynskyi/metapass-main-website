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
			</div>
		</>
	)
}

export default NavBarWallet
