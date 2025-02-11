import React from 'react';

const Button = ({ text, px, py, img }) => {
	return (
		<div>
			<button
				className={`${px} flex justify-center items-center gap-2	 ${py} btn`}>
				<p>{text}</p>
				{img && (
					<div>
						<img src={img} alt="" />
					</div>
				)}
			</button>
		</div>
	);
};

export default Button;
