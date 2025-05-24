import "./ProfileTickets.css"
import data from "../Tickets/data";
import { Ticket } from "@/types/types";


const ProfileTickets = () => {
    
    return(
        <>
            <div className="profile-tickets-box">
                <div className="profile-tickets-title">
                    <h1>Your Tickets</h1>
                </div>
                <div className="profile-tickets-info">
                    {data.map((ticket: Ticket) => (
                        <div className='profile-ticket' key={ticket.id}>
					    	<div className='profile-ticket-card' >
				    			<img src="images/profile_ticket_icon.png" alt='' />
			    				<div className='profile-ticket-info'>
                                    <div className='profile-ticket-info-text'>    
	    							    <p>Event name: {ticket.name_event}</p>
    								    <p>Organizer: {ticket.organizer}</p>
								        <p>Event type: {ticket.event_type}</p>
								        <p>Description:</p>
                                    </div>
								    <div className='profile-description-box'>
									    <p>{ticket.description}</p>
								    </div>
							    </div>
						    </div>
                        </div>
					))}
                </div>
            </div>
        </>
    )
}

export default ProfileTickets;