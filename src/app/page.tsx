import NavBar from "@/components/NavBar/NavBar"
import './Home.css'
import Footer from "@/components/Footer/Footer"
import GetInTouchBtn from "@/components/GetInTouchBtn/GetInTouchBtn"

export default function Home() {
	return (
		<main>
			<div className='background-image'>
				<NavBar />
				<div className='hero-section'>
					<div className='hero-section-text'>
						<p className='hero-title'>
							<span className='bold'>Crypto</span> Markets
							<br />
							honest
							<span className='bold'> ticketing</span>
						</p>
						<p>
							METAPASS uses blockchain technology to issue honest <br />
							tickets that put an end to disgraceful secondary market <br />
							prices and ticket fraud. Our digital tickets come with countless
							<br />
							innovative benefits for fans and organizers that you won’t get
							<br />
							anywhere else.
						</p>
					</div>
					<div className='hero-section-btn'>
						<GetInTouchBtn />
					</div>
				</div>
			</div>
			<div className='features-intro'>
				<div className='ellipse1'></div>
				<h2 className='section-title'>the revolution in tickets</h2>
				<h2 className='section-text'>in every aspect you can imagine</h2>
			</div>
			<hr />
			<div className='features-grid'>
				<div className='ellipse2'></div>
				<div className='features-first-half'>
					<div className='feature'>
						<img src='images\feature_icon1.png' alt='' />
						<p>
							<span className='bold'>Digital smart tickets</span> <br />
							You have total control <br />
							and insight during your <br />
							event cycle, thanks to <br />
							the real-time data that <br />
							shows ticket ownership <br />& activity.
						</p>
					</div>
					<div className='feature2'>
						<p>
							<span className='bold'>An end to ticket fraud</span> <br />
							Our tickets are <br />
							registered on the <br />
							blockchain and <br />
							connected to visitor’s <br />
							smartphones, making <br />
							fraud impossible.
						</p>
						<img src='images\feature_icon2.png' alt='' />
					</div>
				</div>
				<div className='features-second-half'>
					<div className='feature'>
						<img src='images\feature_icon3.png' alt='' />
						<p>
							<span className='bold'>Create, validate, control</span>
							<br />
							METAPASS not only <br />
							enables the creation and <br />
							validation of any type of <br />
							tickets, it also facilitates <br />
							(re)selling in a <br />
							controlled way.
						</p>
					</div>
					<div className='feature2'>
						<p>
							<span className='bold'>Serve all markets</span>
							<br />
							Create tickets for <br />
							several channels <br />
							on the primary market, <br />
							and let fans resell <br />
							them on a controlled <br />
							secondary market. <br />
						</p>
						<img src='images\feature_icon4.png' alt='' />
					</div>
				</div>
			</div>
			<div className='usage-section'>
				<div className='usage-section-intro'>
					<h2 className='section-title'>where our product is used</h2>
				</div>
				<hr />
				<div className='usage-grid'>
					<div className='usage-card'>
						<h3>Livestreams</h3>
						<p>
							We let tens of thousands of <br />
							music fans enjoy (pay) live- <br />
							streamed concerts from <br />
							the comfort of their <br />
							own homes. <br />
						</p>
					</div>
					<div className='usage-card'>
						<h3>Museum</h3>
						<p>
							We provide a variety of <br />
							museums the tools needed to <br />
							open their doors to visitors in a <br />
							controlled and completely <br />
							Covid-proof way. <br />
						</p>
					</div>
					<div className='usage-card'>
						<h3>Theatres</h3>
						<p>
							Our NFT tickets can be used for <br />
							theater events — significantly
							<br />
							reducing paper ticket costs, <br />
							ensuring security, and providing <br />
							full control over the secondary <br />
							market.
						</p>
					</div>
				</div>
				<div className='usage-grid'>
					<div className='ellipse3'></div>
					<div className='ellipse4'></div>
					<div className='usage-card'>
						<h3>Festivals</h3>
						<p>
							We are ready to cooperate <br />
							with dance events in most <br />
							countries!!
							<br />
						</p>
					</div>
					<div className='usage-card'>
						<h3>Business</h3>
						<p>
							We are ready to cooperate and <br />
							provide the full functionality of
							<br />
							our services for your business <br />
							meetings.
						</p>
					</div>
					<div className='usage-card'>
						<h3>Concerts</h3>
						<p>
							Your viewers will be delighted <br />
							with the convenience of our <br />
							tickets and the privileges they <br />
							can provide
						</p>
					</div>
				</div>
			</div>
			<div className='highlight-features'>
				<div className='ellipse5'></div>
				<div className='ellipse6'></div>
				<div>
					<h2 className='section-title'>Powerful innovative features</h2>
					<p>For fans, artists, venues & organizers</p>
				</div>
				<div className='feature-highlight'>
					<img src='images\highlight_icon1.png' alt='' />
					<p>
						<span className='bold'>Revenue & costs</span> <br />
						<span className='smaller-text'>
							Unlimited ticket types and upsells, all in one place. Save
							valuable time and prevent costly mistakes, while enjoying
							real-time revenue payouts and insights into your finances. <br />
							___________________________________________________
						</span>
					</p>
				</div>
				<div className='feature-highlight'>
					<p>
						<span className='bold'>Selling & reselling</span> <br />
						<span className='smaller-text'>
							Only you determine how and when tickets are (re)sold. Keep prices
							the same all around, set up discounts for certain groups or even
							switch on dynamic pricing. Your call. <br />
							___________________________________________________
						</span>
					</p>
					<img src='images\highlight_icon2.png' alt='' />
				</div>
				<div className='feature-highlight'>
					<img src='images\highlight_icon3.png' alt='' />
					<p>
						<span className='bold'>Marketing efforts</span> <br />
						<span className='smaller-text'>
							Collect relevant data from current & previous ticket holders and
							friend groups. Cater to specific target groups, identify your
							superusers and make every move a calculated one. <br />
							___________________________________________________
						</span>
					</p>
				</div>
			</div>
			<div className='communication-section'>
				<div className='info-section'>
					<p>
						<span className='bold bigger-text'>Communication & safety</span>
						<br /> You have a direct line with every ticket holder, whether they
						are at the event or not. Crowd control becomes a breeze, as you can
						instantly inform and assist the right people at the right time.
					</p>
					<p>
						<span className='bold bigger-text'>Your fanbase & community</span>
						<br /> Build up and connect your engaged fanbase with groups,
						special offers and direct communication. The blockchain backbone
						provides full transparency for everyone.
					</p>
					<p>
						<span className='bold bigger-text'>Experiences</span>
						<br /> With extreme ease of use and features such as ticket sharing
						and direct communication, the fun for fans starts the moment a
						ticket is purchased and goes on until long after the event takes
						place.
					</p>
				</div>
				<div>
					<img src='images\phone_icon.png' alt='' />
				</div>
			</div>
			<Footer />
		</main>
	)
}