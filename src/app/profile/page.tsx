import "./page.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import SliderDown from "@/components/SliderDown/SliderDown";

export default function Profile() {


  return (
		<main>
			<NavBar />
			<div className='profile-page'>
				<div className='profile-content'>
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
					<div className='left-side'>
						<SliderDown/>
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
