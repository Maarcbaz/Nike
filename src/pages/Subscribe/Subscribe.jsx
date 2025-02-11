import React from 'react';
import { Button } from '../../components';

const Subscribe = () => {
	return (
		<section
			id="contact-us"
			className="max-container mt-32 mb-24 padding-x flex justify-between items-center max-lg:flex-col gap-10">
			<h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
				Sign Up for
				<span className="text-coral-red"> Updates </span>& Newsletter
			</h3>
			<div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
				<input type="text" placeholder="subscribe@nike.com" className="input" />
				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					<Button text={'Sign Up'} lg={"w-full"} px={'px-6'} py={'py-3'} />
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
