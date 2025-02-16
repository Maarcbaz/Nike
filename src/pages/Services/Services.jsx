import React from 'react';
import { servicesItm, Settings } from '../../Constant';
import { ServicesCard } from '../../components';
import Slider from 'react-slick';

const Services = () => {
	return (
		<section className="max-container">
			<Slider {...Settings}>
				{servicesItm.map((ser, index) => (
					<ServicesCard ser={ser} key={index} />
				))}
			</Slider>
		</section>
	);
};

export default Services;
