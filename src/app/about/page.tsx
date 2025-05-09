import './page.css'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'

export default function About() {
  return (
		<main>
			<NavBar />
			<div className='container'>
				<h1 className='title '>We are METAPASS Tickets</h1>
				<p className='subtitle'>
					We aim to eradicate all dishonest practices from the world of
					ticketing on a commercial scale.
				</p>

				<div className='bg-gradient ellipse-about1'></div>
				<div className='bg-gradient ellipse-about2'></div>
				<div className='bg-gradient ellipse-about3'></div>
				<div className='bg-gradient ellipse-about4'></div>

				<div className='columns'>
					<div className='column'>
						<p>
							With METAPASS, we want to prove how insane and unfair the
							mainstream business practices of the ticketing industry are – and
							how unnecessary. Ticketing can be much easier, safer and – dare we
							say it? – even fun.
						</p>
						<p>
							There truly is no excuse for any fan having to pay more than
							intended by the event organiser, or for anyone to experience
							uncertainty about the validity of their purchased tickets. It's
							not the 18th century anymore.
						</p>
					</div>

					<div className='column'>
						<p>
							Rest assured, we are not just a bunch of pipe-dreaming idealists
							waiting for the world to change – we are leading the fight
							ourselves. While politicians from all corners of the world
							struggle to find an effective regulatory approach that protects
							consumers, we have designed a technical solution.
						</p>
						<p>
							It’s called ‘OPEN Ticketing’; a smart-ticketing solution that
							forms the backbone of our system and can instantly be used by any
							ticketing company in the world to make their tickets honest and
							transparent. Using our system and the underlying protocol will
							eradicate scalping on a commercial scale.
						</p>
					</div>
				</div>

				<h1 className='title_our'>Our approach</h1>

				<div className='row'>
					<div className='text-column'>
						<p>
							We design and apply innovative technology such as blockchain and
							dynamic QR-codes in order to create an easier-than-ever user
							experience for any audience. People of all ages can effortlessly
							use our ticketing system and its features.
						</p>
						<p>
							Over the past few years, we have already successfully ticketed
							hundreds of events, from stadium concerts to international
							business conferences to dance parties with thousands of people
							from dozens of different countries.
						</p>
					</div>

					<div className='image-column'>
						<img src='images\phone.png' alt='Phone Ticket' />
					</div>
				</div>
				<h1 className='title '>The people behind METAPASS</h1>
				<div className='text-column-p'>
					<p>
						Our team consists of 4 optimistic and promising IT students, we
						strive to achieve great heights together with our project.
					</p>
				</div>
				<div className='user-grid'>
					<div className='user-card'>
						<img src='images\user.png' alt='User 1' />
					</div>
					<div className='user-card'>
						<img src='images\user.png' alt='User 2' />
					</div>
					<div className='user-card'>
						<img src='images\user.png' alt='User 3' />
					</div>
					<div className='user-card'>
						<img src='images\user.png' alt='User 4' />
					</div>
				</div>
			</div>
			<Footer />
		</main>
	)

}

