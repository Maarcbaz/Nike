import React from 'react';
import { reviews } from '../../Constant';

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
				<div className="flex justify-evenly max-md:flex-col mt-24">
					{reviews.map((review, index) => (
						<div key={index} className="flex items-center flex-col">
							<div>
								<img
									className="rounded-full object-cover w-[120px] h-[120px]"
									src={review.imgURL}
									alt={review.imgURL}
								/>
							</div>
							<div className="mt-8">
								<p className="text-slate-gray max-w-sm text-center">
									{review.feedback}
								</p>
								<div className="mt-3 flex justify-center items-center gap-2.5">
									<img
										src={review.Rstart}
										width="24"
										height="24"
										alt="rating star"
										className="object-contain m-0"
									/>
									<p className="text-xl font-montserrat text-slate-gray">
										({review.rating})
									</p>
								</div>
								<h3 class="mt-1 text-3xl text-center font-bold">
									{review.customerName}
								</h3>
							</div>
						</div>
					))}
				</div>
			</section>
		</section>
	);
};
