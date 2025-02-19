import { copyrightSign } from '../../public/assets/icons';
import { footerLogo } from '../../public/assets/images';

import { footerLinks, socialMedia } from '../Constant';

const Footer = () => {
	return (
		<footer className="max-container bg-black pt-20 pb-6">
			<div className="flex justify-between padding-x items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img
							data-aos="zoom-in"
							src={footerLogo}
							alt="logo"
							width={150}
							height={46}
							className="m-0"
						/>
					</a>
					<p
						data-aos="fade-up"
						className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
						Get shoes ready for the new term at your nearest Nike store. Find
						Your perfect Size In Store. Get Rewards
					</p>
					<div className="flex items-center gap-5 mt-8">
						{socialMedia.map((icon) => (
							<div
								data-aos="fade-up"
								className="flex justify-center items-center w-12 h-12 bg-white hover:bg-white-400 transiiton-all duration-300 cursor-pointer rounded-full"
								key={icon.alt}>
								<img src={icon.src} alt={icon.alt} width={24} height={24} />
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
					{footerLinks.map((section) => (
						<div key={section.title}>
							<h4
								data-aos="fade-up"
								className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
								{section.title}
							</h4>
							<ul data-aos="zoom-in-up">
								{section.links.map((link) => (
									<li
										className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
										key={link.name}>
										<a href={link.link}>{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="flex padding-x justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
				<div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
					<img
						src={copyrightSign}
						alt="copyright sign"
						width={20}
						height={20}
						className="rounded-full m-0"
					/>
					<p>Copyright. All rights reserved.</p>
				</div>
				<p className="font-montserrat cursor-pointer">Terms & Conditions</p>
			</div>
		</footer>
	);
};

export default Footer;
