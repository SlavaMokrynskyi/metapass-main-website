"use client"
import './tickets.css'
import { Ticket, TicketsType } from '@/types/types';
import { useState } from 'react'
import React from 'react'
import data from './data';
import { useDispatch} from 'react-redux';
import { addTicket } from '@/store';
import Message from '@/components/Message/message';

const Tickets = () => {
	const[tickets] = useState<TicketsType>(data);
    const[activeMessage, setMessageActive] = useState(false)

	const dispatch = useDispatch();


	const buyTicket = (index : number) =>{
		const ticket: Ticket = {
			id: tickets[index].id,
			image: tickets[index].image,
			name_event: tickets[index].name_event,
			organizer: tickets[index].organizer,
			event_type: tickets[index].event_type,
			description: tickets[index].description,
		} 
		dispatch(addTicket(ticket))

        setMessageActive(true);
        
	}

  return (
		<div className='tickets-box'>
            <Message active={activeMessage} setActive = {setMessageActive}>
                <p>You are successfully bought ticket!<br />You can see your tickets in a profile</p>    
            </Message>
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
                            <button onClick={() => buyTicket(ticket.id)} className='buy-btn'>
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