'use client';

import React from 'react'

const TelegramBtn = () => {


  return (
		<div>
			<button
				className='telegram-btn'
				onClick={() => window.open('https://t.me/MetaPassRivne', '_blank')}
			></button>
		</div>
	)
}

export default TelegramBtn
