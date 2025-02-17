import React from 'react';
import { SuperQualities } from '../../Constant';
import { Button } from '../../components';
import { shoe8 } from '../../../public/assets/images';
const SuperQuality = () => {
	return (
		<div className="mt-16 max-container mb-10 padding-x items-center justify-between max-lg:flex-col flex">
			<div>
				{SuperQualities.map((sp, index) => (
					<div key={index}>
						<h1
							data-aos="fade-up"
							data-aos-duration="1400"
							className="lg:max-w-lg capitalize font-bold text-4xl">
							we provide you
							<span className="text-coral-red"> super quality </span> shoes
						</h1>
						<div
							data-aos="fade-up"
							data-aos-duration="1400"
							className="lg:max-w-md mt-4 text-slate-gray">
							<p>{sp.paragraph1}</p>
							<p className="mt-5 mb-6">{sp.paragraph2}</p>
						</div>
						<Button text={'View details'} px={'px-5'} py={'py-4'} />
					</div>
				))}
			</div>
			<div className="mt-10">
				<img data-aos="zoom-in-down" src={shoe8} alt="" />
			</div>
		</div>
	);
};

export default SuperQuality;
