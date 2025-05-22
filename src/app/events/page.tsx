import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import Form from '@/components/Form/Form'
import Tickets from '@/components/Tickets/tickets'
import './Events.css'

const Events = () => {
  return (
		<main>
			<NavBar />
			<div className='events-page'>
				<div className='events-ellipse1'></div>
				<div className='events-ellipse2'></div>
				<div className='events-ellipse3'></div>
				<div className='events-page-title'>
					<h1>New Event</h1>
					<hr />
				</div>
				<div className='img-grid'>
					<div className='top-half'>
						<div className='img1-top'>
							<img src='images\event1.jpg' alt='' />
						</div>
						<div className='img2-top'>
							<img src='images\event2.jpg' alt='' />
						</div>
					</div>
					<div className='bottom-half'>
						<div className='img1-bottom'>
							<img src='images\event3.avif' alt='' />
						</div>
						<div className='img2-bottom'>
							<img src='images\event4.jpg' alt='' />
						</div>
					</div>
				</div>
				<div className='ticket-shop'>
					<h1>Buy a ticket</h1>
					<Tickets></Tickets>
				</div>
				<div className='form-div'>
					<Form />
				</div>
			</div>
			<Footer />
		</main>
	)
}

export default Events
