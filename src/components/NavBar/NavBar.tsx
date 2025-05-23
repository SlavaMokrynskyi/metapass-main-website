'use client';

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './NavBar.css'
import { usePathname } from 'next/navigation';
import Modal from '../ModalWindow/modal';
import WalletConnect from '../WalletConnect/WalletConnect';
import toast from 'react-hot-toast';

const NavBar = () => {
	const pathname = usePathname()
	const[isVisible, setIsVisible] = useState(true);
	const[lastScrollY, setLastScrollY] = useState(0);
	const[walletActive,setWalletActive] = useState(false);
	const [walletAddress, setWalletAddress] = useState<string | null>(null)

	const checkIfWalletIsConnected = async () => {
		try {
			const { solana } = window as any
			if (solana && solana.isPhantom) {
				const response = await solana.connect({ onlyIfTrusted: true })
				setWalletAddress(response.publicKey.toString())
			}
		} catch (err) {
			console.error(`Wallet connection error:{err}`)
		}
	}
	useEffect(() => {
		checkIfWalletIsConnected()
	}, [])
	useEffect(()=>{
		const handlerScroll = () => {
			const currentScrollY =  window.scrollY;
			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
			setLastScrollY(currentScrollY);
		};
		window.addEventListener('scroll', handlerScroll);
		return () => window.removeEventListener('scroll', handlerScroll);
	},[lastScrollY])

	return (
		<>
		<Modal active = {walletActive} setActive={setWalletActive}>
			<div className='auth-page'>
				    <div className="auth-elipse1"></div>
                    <div className="auth-elipse2"></div>
                    <div className='auth-logic'>
					    <div className='auth-title'>
						    <h1>Continue with </h1>
						    <img src='images\PhantomWallet_icon.png' alt='' />
					    </div>
                        <img src="images\phone_icon.png" alt="" />
					    <WalletConnect />
				    </div>
			    </div>
		</Modal>
			<div className={`nav-bar ${isVisible ? 'visible' : 'hidden'}`}>
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
					{walletAddress ? (
					<a>Connected</a>
					) : (
						<button onClick={()=>{setWalletActive(true)}}>Wallet</button>
					)}		
				</div>
			</div>
			<input type='checkbox' id='mobile-menu-toggle' hidden />
			<label htmlFor='mobile-menu-toggle' className='burger'>
				<div></div>
				<div></div>
				<div></div>
			</label>

			<div className='mobile-menu'>
				<Link
					href='/'
					className={`nav-link ${pathname === '/' ? 'active' : ''}`}
				>
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
				<Link
					href='/wallet'
					className={`nav-link ${pathname === '/wallet' ? 'active' : ''}`}
				>
					wallet
				</Link>
			</div>
		</>
	)
}

export default NavBar;
