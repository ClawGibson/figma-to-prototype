import React from 'react';

import { TabValues } from '@/enums/dashboard-tabs-sections';

type TabType = {
	label: unknown;
	value: TabValues;
	icon?: React.ReactNode;
};

type TabsProps = {
	tabs: TabType[];
	activeTab: string;
	onTabChange: (value: TabValues) => void;
	className?: string;
};

const Tabs: React.FC<TabsProps> = ({
	tabs,
	activeTab,
	onTabChange,
	className = '',
}) => {
	return (
		<div className={`flex border-b border-gray-200 mb-4 ${className}`}>
			{tabs.map((tab) => (
				<button
					key={tab.value}
					className={`py-2 px-4 text-sm font-medium -mb-px transition-colors cursor-pointer ${
						activeTab === tab.value
							? 'border-b-2 border-blue-500 text-blue-600'
							: 'text-gray-500 hover:text-gray-700'
					}`}
					onClick={() => onTabChange(tab.value)}
				>
					{tab.icon && <span className='mr-2'>{tab.icon}</span>}
					{tab.label as string}
				</button>
			))}
		</div>
	);
};

export default Tabs;
