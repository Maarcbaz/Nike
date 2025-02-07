import React from 'react';

const Button = ({ text, px, py, img }) => {
	return (
		<div>
			<button
				className={`${px} flex justify-center items-center gap-2	 ${py} btn`}>
				<p>{text}</p>
				{img && (
					<div>
						<img className='w-5 h-5'  src={img} alt="" />
					</div>
				)}
			</button>
		</div>
	);
};

export default Button;
