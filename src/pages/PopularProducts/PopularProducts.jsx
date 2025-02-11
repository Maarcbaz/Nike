import React from 'react';
import { PopularShoes } from '../../components';
import { products } from '../../Constant';
const PopularProducts = () => {
	return (
		<section id="products" className="mt-32 padding-x">
			<div className="flex flex-col justify-start gap-5">
				<h2 className="text-4xl font-palanquin font-bold">
					Our <span className="text-coral-red"> Popular </span> Products
				</h2>
				<p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
					Experience top-notch quality and style with our sought-after
					selections. Discover a world of comfort, design, and value
				</p>
			</div>
			<div className="flex max-xl:flex-wrap items-center gap-10 mt-16">
				{products.map((product, index) => (
					<PopularShoes product={product} key={index} />
				))}
			</div>
		</section>
	);
};

export default PopularProducts;
