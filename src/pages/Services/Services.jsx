import React from 'react';
import { servicesItm } from '../../Constant';
import { ServicesCard } from '../../components';

const Services = () => {
	return (
		<div
			id="about-us"
			className="flex flex-wrap my-24 max-md:gap-16 justify-between padding-x">
			{servicesItm.map((ser, index) => (
				<ServicesCard ser={ser} key={index} />
			))}
		</div>
	);
};

export default Services;
