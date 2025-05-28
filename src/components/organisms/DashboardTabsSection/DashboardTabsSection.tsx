'use client';
import React, { useState } from 'react';

import { Tabs } from '@/components/molecules/Tabs';

import { TabValues } from '@/enums/dashboard-tabs-sections';
import { TAB_OPTIONS } from '@/mock/dashboard-tabs-section';
import { DashboardApplications } from '../DashboardApplications';

const DashboardTabsSection = () => {
	const [activeTab, setActiveTab] = useState<TabValues>(
		TabValues.APPLICATIONS,
	);

	const handleTabChange = (value: TabValues) => setActiveTab(value);

	return (
		<section className='p-4 bg-inherit mt-4'>
			<Tabs
				tabs={TAB_OPTIONS}
				activeTab={activeTab}
				onTabChange={handleTabChange}
			/>
			{activeTab === TabValues.CONTRACTS && (
				<div>
					<h2>Contracts Content</h2>
					<p>Details about contracts will go here.</p>
				</div>
			)}
			{activeTab === TabValues.APPLICATIONS && <DashboardApplications />}
			{activeTab === TabValues.EMPLOYEE && (
				<div>
					<h2>Employee Content</h2>
					<p>Details about employee will go here.</p>
				</div>
			)}
		</section>
	);
};

export default DashboardTabsSection;
