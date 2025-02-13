import React from 'react';
const ReviewCard = ({ review }) => {
	return (
		<div className="flex md:mt-16 max-md:mt-10 mb-4 items-center flex-col">
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
				<h3 className="mt-1 text-3xl text-center font-bold">
					{review.customerName}
				</h3>
			</div>
		</div>
	);
};

export default ReviewCard;
