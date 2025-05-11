"use client"
import './Slider.css'
import { Ticket, Tickets } from '@/types/types';
import { useState } from 'react'
import React from 'react'
import data from './data';
import { useDispatch, UseDispatch } from 'react-redux';

import { addTicket } from '@/store';

const Slider = () => {
	const[tickets] = useState<Tickets>(data);
	const[index,setIndex] = useState<number>(0);

	const dispatch = useDispatch();

	const nextSlide = () =>{
		if(index == data.length-1)
		{
			setIndex(0);
		}
		else
		{
			setIndex(index + 1);
		}
	}
	const prevSlide = () => {
		if (index == 0) {
			setIndex(data.length-1)
		} else {
			setIndex(index - 1)
		}
	}

	const buyTicket = () =>{
		const ticket: Ticket = {
			id: tickets[index].id,
			image: tickets[index].image,
			name_event: tickets[index].name_event,
			organizer: tickets[index].organizer,
			event_type: tickets[index].event_type,
			description: tickets[index].description,
		} 
		dispatch(addTicket(ticket))
	}

  return (
		<div className='slider-box'>
			<div className='slider-window'>
				<div
					className='slider-track'
					style={{
						transform: `translateX(-${index * 100}%)`,
					}}
				>
					{data.map((ticket: Ticket) => (
						<div className='slider-slide' key={ticket.id}>
							<img src={ticket.image} alt='' />
							<div className='ticket-info-text'>
								<p>Event name: {ticket.name_event}</p>
								<p>Organizer: {ticket.organizer}</p>
								<p>Event type: {ticket.event_type}</p>
								<p>Description:</p>
								<div className='description-box'>
									<p>{ticket.description}</p>
								</div>
								<button onClick={buyTicket} className='buy-btn'>
									Buy
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='slider-controls'>
				<button className='prev-slide' onClick={prevSlide}>
					❮
				</button>
				<button onClick={nextSlide}>❯</button>
			</div>
		</div>
	)
}

export default Slider
