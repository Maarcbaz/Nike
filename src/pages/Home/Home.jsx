import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import { shoesImg, statistics } from '../../Constant';
import { ShoeCard, Button } from '../../components';
import { bigShoe1 } from '../../../public/assets/images';
import { arrowRight } from '../../../public/assets/icons';

const Home = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
	const [ref, inView] = useInView({
		triggerOnce: false, // Trigger only once when it comes into view
		threshold: 0.5, // Start the animation when 50% of the element is visible
	});
	return (
		<section
			id="home"
			className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
			<div className="relative padding-x xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
				<p
					data-aos="fade-up"
					className="text-xl font-montserrat text-coral-red">
					Our Summer collections
				</p>

				<h1
					data-aos="fade-left"
					className="z-10 mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
					<span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3">Nike</span> Shoes
				</h1>
				<p
					data-aos="fade-up"
					className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
					Discover stylish Nike arrivals, quality comfort, and innovation for
					your active life.
				</p>

				<Button text={'Shop Now'} px={'px-7'} py={'py-4'} img={arrowRight} />

				<div className="flex justify-start items-start max-md:flex-wrap max-sm:flex-col w-full mt-20 gap-10">
					{statistics.map((stat, index) => (
						<div key={index}>
							<div className="text-4xl font-palanquin font-bold" ref={ref}>
								{inView && (
									<CountUp
										start={0}
										end={`${stat.value}`} // Final value
										duration={2} // Animation duration in seconds
										separator="" // Add comma separators
									/>
								)}
								<span>k+</span>
							</div>
							<p className="leading-7 font-montserrat text-slate-gray">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
				<img
					data-aos="zoom-in-up"
					src={bigShoeImg}
					alt="shoe colletion"
					width={510}
					height={502}
					className="object-contain relative z-10"
				/>

				<div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
					{shoesImg.map((image, index) => (
						<div key={index}>
							<ShoeCard
								index={index}
								imgURL={image}
								changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Home;
