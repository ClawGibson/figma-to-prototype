import React from 'react';

import { ApplicationsLineChart } from '@/components/molecules/ApplicationsLineChart';
import { DashboradRow } from '@/components/organisms/DashboardRow';

const DashboardApplications = () => {
	return (
		<section className='p-4 flex flex-col gap-4'>
			<DashboradRow />
			<ApplicationsLineChart />
		</section>
	);
};

export default DashboardApplications;
