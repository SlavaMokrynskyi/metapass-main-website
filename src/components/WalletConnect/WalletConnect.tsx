'use client'
import { useEffect, useState } from 'react'
import "./WalletConnect.css"
import toast from 'react-hot-toast'

export default function WalletConnect() {
	const [walletAddress, setWalletAddress] = useState<string | null>(null)

	const checkIfWalletIsConnected = async () => {
		try {
			const { solana } = window as any
			if (solana && solana.isPhantom) {
				const response = await solana.connect({ onlyIfTrusted: true })
				setWalletAddress(response.publicKey.toString())
			}
		} catch (err) {
			console.error('Wallet connection error:', err)
		}
	}

	const connectWallet = async () => {
		try {
			const { solana } = window as any
			if (solana) {
				const response = await solana.connect()
				setWalletAddress(response.publicKey.toString())
			} else {
				toast.error('Phantom wallet not found. Install him first.')
			}
		} catch (err) {
			console.error('Wallet connect error:', err)
		}
	}

	useEffect(() => {
		checkIfWalletIsConnected()
	}, [])

	return (
		<div>
			{walletAddress ? (
				<p>Connected</p>
			) : (
				<button className='connect-btn' onClick={connectWallet}>Connect wallet</button>
			)}
		</div>
	)
}
export const getProvider = () => {
	if (typeof window !== 'undefined' && 'solana' in window) {
		const provider = (window as any).solana
		if (provider.isPhantom) {
			return provider
		}
	}
	return null
}
