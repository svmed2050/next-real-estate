import { useContext, useEffect } from 'react'
import Image from 'next/image'
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import 'react-horizontal-scrolling-menu/dist/styles.css'
import { useMediaQuery } from 'react-responsive'

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext)

	return (
		<Flex justifyContent='center' alignItems='center' marginRight='1'>
			<Icon
				as={FaArrowAltCircleLeft}
				onClick={() => scrollPrev()}
				fontSize='2xl'
				cursor='pointer'
			/>
		</Flex>
	)
}
const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext)

	return (
		<Flex justifyContent='center' alignItems='center' marginRight='1'>
			<Icon
				as={FaArrowAltCircleRight}
				onClick={() => scrollNext()}
				fontSize='2xl'
				cursor='pointer'
			/>
		</Flex>
	)
}

const ImageScrollbar = ({ data }) => {
	const width500 = useMediaQuery({ query: '(max-width: 500px)' })
	const width1023 = useMediaQuery({ query: '(max-width: 1023px)' })

	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			{data.map((item) => (
				<Box
					key={item.id}
					title={item.id}
					width={(width500 && 300) || (width1023 && !width500 && 510) || 910}
					itemID={item.id}
					overflow='hidden'
					p='1'
				>
					<Image
						alt='property'
						placeholder='blur'
						blurDataURL={item.url}
						src={item.url}
						// width={(width500 && 350) || (width1023 && !width500 && 570) || 1000}
						width={1000}
						height={500}
						style={{ objectFit: 'cover' }}
					/>
				</Box>
			))}
		</ScrollMenu>
	)
}

export default ImageScrollbar
