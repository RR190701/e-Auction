import React from 'react';
import Carousel from 'react-material-ui-carousel';

const CustomCarousel = (props) => {
	return (
		<Carousel
			autoPlay={props.autoPlay ? props.autoPlay : false}
			animation="slide"
			fullHeightHover={false}>
			{props.children}
		</Carousel>
	);
};

export default CustomCarousel;
