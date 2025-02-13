import React from 'react';
import { PopularShoes } from '../../components';
import { products, Settings } from '../../Constant';
import Slider from 'react-slick';
const PopularProducts = () => {
	return (
		<section id="products" className="mt-32 padding-x">
			<div className="flex flex-col justify-start gap-5">
				<h2 data-aos="fade-right" className="text-4xl font-palanquin font-bold">
					Our <span className="text-coral-red"> Popular </span> Products
				</h2>
				<p
					data-aos="fade-right"
					className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
					Experience top-notch quality and style with our sought-after
					selections. Discover a world of comfort, design, and value
				</p>
			</div>
			<Slider {...Settings}>
				{products.map((product, index) => (
					<PopularShoes product={product} key={index} />
				))}
			</Slider>
		</section>
	);
};

export default PopularProducts;
