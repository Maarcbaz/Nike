import React from 'react';

const PopularShoes = ({ product }) => {
	return (
		<div className="flex items-center max-md:mb-4 md:mt-24 max-md:mt-16 justify-center">
			<div className="flex flex-col max-sm:px-4">
				<div>
					<img src={product.imgURL} alt={product.imgURL} />
				</div>
				<div className="pl-2 py-4">
					<div className="flex gap-3 mb-2">
						<div>
							<img src={product.starIcon} alt="star" />
						</div>
						<h3 className="text-slate-gray text-xl">{`(${product.rating})`}</h3>
					</div>
					<h4 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">
						{product.name}
					</h4>
					<h3 className="text-2xl text-coral-red font-semibold">
						{product.price}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default PopularShoes;
