'use client';
import React from 'react'
import './LoginBtn.css'
import { getProvider } from '../solana';
import WalletConnect from '../WalletConnect/WalletConnect';

const LoginBtn = () => {

  return (
    <div>
      <WalletConnect/>
    </div>
  )
}

export default LoginBtn
