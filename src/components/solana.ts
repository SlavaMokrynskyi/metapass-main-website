export const getProvider = () => {
	if (typeof window !== 'undefined' && 'solana' in window) {
		const provider = (window as any).solana
		if (provider.isPhantom) {
			return provider
		}
	}
	return null
}
