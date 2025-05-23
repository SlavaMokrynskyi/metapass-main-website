"use client"
import './tickets.css'
import { Ticket, TicketsType } from '@/types/types';
import React from 'react'
import data from './data';
import { useDispatch} from 'react-redux';
import { addTicket } from '@/store';
import toast from 'react-hot-toast';

const Tickets = () => {

	const tickets : TicketsType = data;
	const dispatch = useDispatch();


	const buyTicket = (ticket : Ticket) =>{
		dispatch(addTicket(ticket))
	}

  return (
		<div className='tickets-box'>
			<div className='tickets-window'>
				<div className='tickets'>
					{data.map((ticket: Ticket) => (
                        <div className='ticket' key={ticket.id}>
					    	<div className='ticket-card' >
				    			<img src={ticket.image} alt='' />
			    				<div className='ticket-info'>
                                    <div className='ticket-info-text'>    
	    							    <p>Event name: {ticket.name_event}</p>
    								    <p>Organizer: {ticket.organizer}</p>
								        <p>Event type: {ticket.event_type}</p>
								        <p>Description:</p>
                                    </div>
								    <div className='description-box'>
									    <p>{ticket.description}</p>
								    </div>
							    </div>
						    </div>
                            <button onClick={() => buyTicket(ticket)} className='buy-btn'>
								Buy
							</button>
                        </div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Tickets