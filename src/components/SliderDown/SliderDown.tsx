'use client'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreType } from '@/types/types'
import './SliderDown.css'
import { clearList } from '@/store'

const SliderDown = () => {
	const [index, setIndex] = useState<number>(0)
	const dispatch = useDispatch()
	const tickets = useSelector((state: StoreType) => state.tickets)

	const nextSlide = () => {
		setIndex(prev => (prev === tickets.tickets.length - 1 ? 0 : prev + 1))
	}

	const prevSlide = () => {
		setIndex(prev => (prev === 0 ? tickets.tickets.length - 1 : prev - 1))
	}

	const clearSlider = () => {
		dispatch(clearList())
		setIndex(0)
	}

	return (
		<div className='events'>
			<div className='events-title'>
				<h2>Your tickets</h2>
			</div>

			{tickets.tickets.length === 0 ? (
				<h2>You don't have any tickets yet</h2>
			) : (
				<>
					<div className='slider-vertical-controls'>
						<button className='prev-slide' onClick={prevSlide}>
							⮝
						</button>
					</div>

					<div className='slider-window'>
						<div
							className='ticket-track'
							style={{
								transform: `translateY(-${index * 500}px)`,
							}}
						>
							{tickets.tickets.map(ticket => (
								<div className='ticket' key={ticket.id}>
									<img src={ticket.image} alt='' />
									<div className='ticket-info-text-profile'>
										<p>Event name: {ticket.name_event}</p>
										<p>Organizer: {ticket.organizer}</p>
										<p>Event type: {ticket.event_type}</p>
										<p>Description:</p>
										<div className='description-box-profile'>
											<p>{ticket.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='slider-vertical-controls'>
						<button onClick={nextSlide}>⮟</button>
						<button onClick={clearSlider}>Clear</button>
					</div>
				</>
			)}
		</div>
	)
}

export default SliderDown
