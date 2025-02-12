import React from 'react';

const ServicesCard = ({ ser }) => {
	return (
		<div id="about-us" className="md:mt-20 pb-10 padding-x">
			<div className="flex rounded-xl max-lg:p-8 shadow-xl px-8 max-lg:w-full max-lg:h-fit h-[200px] gap-4 justify-center flex-col">
				<div className="">
					<img
						src={ser.imgURL}
						className="w-[35px] p-2 bg-coral-red rounded-full"
						alt=""
					/>
				</div>
				<div className="">
					<h3 className="font-semibold text-2xl">{ser.label}</h3>
					<p className="text-slate-gray">{ser.subtext}</p>
				</div>
			</div>
		</div>
	);
};

export default ServicesCard;
