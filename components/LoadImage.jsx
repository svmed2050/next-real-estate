import { useState, useEffect, useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const LoadImage = (props) => {
	// console.log(props)

	const [blur, setBlur] = useState(true)
	// const loadingImage = useRef()

	// useEffect(() => {
	// 	if (loadingImage.current.complete) {
	// 		setBlur(false)
	// 	}

	// 	loadingImage.current.addEventListener('load', () => {
	// 		setBlur(false)
	// 	})
	// }, [])

	return (
		<div
		//  className={`image-container ${blur ? 'blur' : 'unblur'}`}
		>
			<LazyLoadImage
				className='placeholder-image'
				src={props.smallImageSrc}
				alt='property-min'
				effect='blur'
			/>
			<LazyLoadImage
				className='real-image'
				// ref={loadingImage}
				src={props.largeImageSrc}
				alt='property-max'
				effect='blur'
			/>
		</div>
	)
}

export default LoadImage
