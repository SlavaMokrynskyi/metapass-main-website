import "./page.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import EventCards from "@/components/EventCards/EventCards";

export default function Profile() {


  return (
		<main>
			<NavBar />
			<div className='profile-page'>
				<div className='profile-content'>
					<div className='left-side'>
						<div className='events'>
							<div className='events-title'>
								<h2>Events you have attended</h2>
							</div>
							<EventCards />
							<div className='arrow-down'></div>
						</div>
					</div>

					<div className='right-side'>
						<div className='right-side-title'>
							<h2 className='user-name'>User name</h2>
							<div className='avatar'></div>
						</div>

						<div className='description-box'>
							<p className='desc-label'>Description</p>
						</div>

						<div className='contact'>
							<h3>Contact</h3>
							<p>METAPASS@gmail.com</p>
							<p>+777 777 777 777</p>
							<p>Instagram()</p>
							<p>Discord()</p>
							<p>Telegram()</p>
							<p>X</p>
						</div>
					</div>
				</div>

				<div className='bg-gradient ellipse-profile1'></div>
				<div className='bg-gradient ellipse-profile2'></div>
				<div className='bg-gradient ellipse-profile3'></div>
				<div className='bg-gradient ellipse-profile4'></div>
				<div className='bg-gradient ellipse-profile5'></div>
			</div>
			<Footer />
		</main>
	)
}
