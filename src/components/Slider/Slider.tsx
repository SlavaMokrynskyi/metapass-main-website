"use client";
import React, { useState } from 'react'
import "./Slider.css"

type SimpleSliderProps = {
	images: string[] 
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () => {
		setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
        console.log('next slide')
    }

	const prevSlide = () => {
		setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
        console.log('prev slide')
	}

	return (
		<div
			className='slider-box'
			style={{ position: 'relative', maxWidth: '800px', margin: 'auto' }}
		>
			<div className='slider-img'>
				<img src={images[currentIndex]} alt='' />
				<div>
					<p>name event: 77777</p>
					<p>organize: 77777</p>
					<p>event type: 77777</p>
					<p>brief description :</p>
                    <div className='description'>               
                        77777777 <br />
                        77777777 <br />
                        77777777 <br />
                    </div>
				</div>
			</div>
			<div
				className='slider-btn-left'
				onClick={prevSlide}
				style={{ position: 'absolute', left: '10px', top: '50%' }}
			></div>
			<div
				className='slider-btn-right'
				onClick={nextSlide}
				style={{ position: 'absolute', right: '10px', top: '50%' }}
			></div>
		</div>
	)
}

export default SimpleSlider