import React from 'react';

import { DashboardTabsSection } from '@/components/organisms/DashboardTabsSection';
import { Search } from '@/components/molecules/Search';

export default function InsightsPage() {
	return (
		<main className='w-full min-h-screen bg-inherit'>
			<section className='flex items-center justify-between p-4'>
				<h1 className='text-3xl font-bold mb-6 p-4 text-blue-800 text-left'>
					Insights
				</h1>
				<Search />
			</section>
			<DashboardTabsSection />
		</main>
	);
}
