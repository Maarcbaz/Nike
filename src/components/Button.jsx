import React from 'react';

const Button = ({ text, px, py, img }) => {
	return (
		<div>
			<button className={`${px} ${py} btn`}>
				<p>{text}</p>
				{/* {img && (
					<div>
						<img src={img} alt="" />
					</div>
				)} */}
			</button>
		</div>
	);
};

export default Button;
