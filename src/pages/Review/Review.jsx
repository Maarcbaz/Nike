import React from 'react';
import { reviews, Settings } from '../../Constant';
// import { ReviewCard } from '../../components';
import Slider from 'react-slick';
import { ReviewCard } from '../../components';

export const Review = () => {
	return (
		<section className="bg-pale-blue padding mt-24">
			<section className="max-container flex flex-col justify-center">
				<div className="text-center">
					<h2 className="text-4xl font-bold capitalize my-4">
						what our <span className="text-coral-red">customers</span> say?
					</h2>
					<p className="text-slate-gray m-auto max-w-lg">
						Hear genuine stories from our satisfied customers about their
						exceptional experiences with us.
					</p>
				</div>
				<Slider {...Settings}>
					{reviews.map((review, index) => (
						<ReviewCard review={review} key={index} />
					))}
				</Slider>
			</section>
		</section>
	);
};
