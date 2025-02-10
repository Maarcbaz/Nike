import React from 'react';

const Button = ({ text, px, py, img, tranps, lg }) => {
	return (
		<div className={`${lg}`}>
			<button
				className={`${px} ${tranps} flex justify-center items-center gap-2 ${py} btn`}>
				<p>{text}</p>
				{img && (
					<div>
						<img className="w-5 h-5" src={img} alt="" />
					</div>
				)}
			</button>
		</div>
	);
};

export default Button;
