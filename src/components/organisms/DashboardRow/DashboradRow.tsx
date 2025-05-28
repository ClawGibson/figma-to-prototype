import React from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import AppsIcon from '@mui/icons-material/Apps';

import { StatCard } from '@/components/molecules/StatCard';

const DashboradRow = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
			<StatCard
				label='Total Applications'
				value='300'
				description='Total Unlinked: 250'
				icon={<AppsIcon className='w-6 h-6' />}
				color='bg-blue-500'
			/>
			<StatCard
				label='Average L30 Utilization'
				value='40%'
				description='% Change MoM: Green Arrow 5%'
				icon={<DataUsageIcon className='w-6 h-6' />}
				color='bg-green-500'
			/>
			<StatCard
				label='Saving Potential'
				value='$204k'
				icon={<CurrencyExchangeIcon className='w-6 h-6' />}
				color='bg-yellow-500'
			/>
		</div>
	);
};

export default DashboradRow;
