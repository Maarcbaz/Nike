import React from 'react';
import { headerLogo } from '../../public/assets/images';
import { navLinks } from '../Constant';
import Button from './Button';
import { hamburger } from '../../public/assets/icons';
import { useHamburgerFunc, useHamburgerState } from '../context/UseContext';

const Navbar = () => {
	const activefunc = useHamburgerFunc();
	const activeState = useHamburgerState();

	return (
		// HEADER COMPONENT
		// All links are imported from the constant file [constat/index.js]

		<header className="padding-x transition-all duration-300 fixed w-full top-0 shadow-lg bg-white">
			<nav className="flex justify-between py-4 items-center">
				<div className="cursor-pointer  max-[380px]:w-[90px] max-[420px]:w-[100px]">
					<img src={headerLogo} alt="" />
				</div>

				{/* Navlinks  */}
				{/* this code contains lots of break point. i hate editing it :) if you get a better way make a request  */}

				<div
					className={`flex justify-center max-lg:z-10 right-0 bottom-0 max-lg:h-screen top-[3.8rem] max-lg:bg-white max-[420px]:text-sm  max-[420px]:w-[230px] max-[420px]:top-[3.5rem]  max-lg:shadow-2xl max-lg:flex-col max-[420px]:pb-[150px] max-lg:text-white max-lg:w-[285px] max-lg:absolute items-center gap-14 max-lg:gap-10 max-lg:pb-[140px] transition-all duration-300 ${
						activeState && 'max-lg:translate-x-[100%] '
					} `}>
					{/* navlinks imported from constant/index.js  */}
					{navLinks.map((nav, index) => (
						<ul key={index}>
							<li className="leading-normal text-lg max-[420px]:text-sm hover:text-slate-gray/60 text-slate-gray">
								<a href={nav.href}>{nav.label}</a>
							</li>
						</ul>
					))}
					<div className="">
						<Button text={'Sign In'} px={'px-4'} py={'py-3'} />
					</div>
				</div>
				<div className="w-[25px] h-[25px] hidden cursor-pointer max-lg:block">
					<img src={hamburger} onClick={activefunc} alt="" />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
