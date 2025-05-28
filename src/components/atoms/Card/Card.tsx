import React from 'react';

type CardProps = {
	children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
	return (
		<section className='bg-white text-gray-900 rounded-xl shadow p-6 flex items-start justify-between gap-4'>
			{children}
		</section>
	);
};

export default Card;
