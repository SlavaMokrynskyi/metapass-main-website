import React from 'react'
import NavBarWallet from '@/components/NavBarWallet/NavBarWallet'
import LoginBtn from '@/components/LoginBtn/LoginBtn'
import './Wallet.css'
import WalletConnect from '@/components/WalletConnect/WalletConnect'

const Wallet = () => {
  return (
		<main>
			<NavBarWallet />
			<div className='auth-page'>
				<div className='auth-ellipse1'></div>
				<div className='auth-ellipse2'></div>
				<div className='auth-ellipse3'></div>
				<div className='auth-ellipse4'></div>
				<div className='auth-ellipse5'></div>
				<div className='auth-logic'>
					<div className='auth-title'>
						<h1>Continue with </h1>
						<img src='images\PhantomWallet_icon.png' alt='' />
					</div>
					<WalletConnect />
				</div>
				<div className='auth-image'>
					<img src='images\phone_icon.png' alt='' />
				</div>
			</div>
		</main>
	)
}

export default Wallet
