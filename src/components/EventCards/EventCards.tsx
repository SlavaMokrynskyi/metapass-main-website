"use client";
import React, { useEffect, useState } from 'react'

const EventCards = () => {
	const [cards, setCards] = useState<string[]>([])

	useEffect(() => {
		{
		}
	})

	return (
		<>
			{cards.length === 0 ? (
                <h2>You haven't attended any events yet</h2>
			) : (			
				<ul>
					{cards.map((card, index) => (
						<li key={index}>
							<div className='event-card'>{card}</div>
						</li>
					))}
				</ul>
			)}
		</>
	)
}

export default EventCards
