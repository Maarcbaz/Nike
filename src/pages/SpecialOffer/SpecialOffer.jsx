import React, { Fragment } from 'react';
import { offer } from '../../../public/assets/images';
import { Offers } from '../../Constant';
import { Button } from '../../components';
import { arrowRight } from '../../../public/assets/icons';

const SpecialOffer = () => {
	return (
		<section className="padding-x max-container max-lg:flex-col-reverse mt-24 max-lg:gap-12 flex justify-between items-center">
			<div className="flex-1">
				<img data-aos="zoom-in" src={offer} alt="" />
			</div>
			<div className="flex-1">
				{Offers.map((offer, index) => (
					<Fragment key={index}>
						<h1
							data-aos="fade-up"
							data-aos-duration="1200"
							className="capitalize text-4xl font-bold">
							<span className="text-coral-red">special</span> offer
						</h1>
						<div className="max-w-md flex flex-col gap-4 text-slate-gray mt-6">
							<p data-aos="fade-up" data-aos-delay="1100">
								{offer.paragraph1}
							</p>
							<p data-aos="fade-up" data-aos-delay="1200">
								{offer.paragraph2}
							</p>
						</div>
						<div className="flex max-sm:flex-col items-center gap-4 mt-8">
							<Button
								text={offer.btn1}
								px={'px-7'}
								py={'py-4'}
								img={arrowRight}
							/>
							<Button
								tranps={
									'bg-transparent border-coral-red text-coral-red hover:bg-coral-red hover:text-white'
								}
								text={offer.btn2}
								px={'px-7'}
								py={'py-4'}
							/>
						</div>
					</Fragment>
				))}
			</div>
		</section>
	);
};

export default SpecialOffer;
