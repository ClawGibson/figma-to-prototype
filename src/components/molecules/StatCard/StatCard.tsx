import React from 'react';

import { Card } from '@/components/atoms/Card';
import { toUpperCase } from '@/utils/text';

type StatCardProps = {
	label: string;
	value: string;
	description?: string;
	icon?: React.ReactNode;
	color?: string;
};

const StatCard: React.FC<StatCardProps> = ({
	label,
	value,
	description,
	icon,
	color,
}) => {
	return (
		<Card>
			<div>
				<div className='text-sm text-gray-500'>{toUpperCase(label)}</div>
				<div className='text-2xl font-semibold'>{value}</div>
				{description && (
					<div className='text-sm text-gray-400 mt-1'>{description}</div>
				)}
			</div>
			{icon && (
				<div className={`${color} text-white p-2 rounded-full`}>{icon}</div>
			)}
		</Card>
	);
};

export default StatCard;
