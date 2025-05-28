'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PersonIcon from '@mui/icons-material/Person';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { UploadFiles } from '@/components/molecules/UploadFiles';
import { NAV_ITEMS } from '@/mock/sidebar';

const Sidebar: React.FC = () => {
	const pathname = usePathname();
	const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

	const toggleItem = (label: string) => {
		setOpenItems((prev) => ({ ...prev, [label]: !prev[label] }));
	};

	return (
		<aside className=' h-screen bg-gray-50 border-r border-gray-200 flex flex-col'>
			<div className='px-6 py-8'>
				<span className='text-2xl font-bold text-blue-900'>
					License Logic
				</span>
			</div>

			<div className='px-6 py-4 border-b border-gray-200'>
				<UploadFiles />
			</div>

			<nav className='flex-1 overflow-y-auto px-0'>
				<ul className='space-y-1 px-0'>
					{NAV_ITEMS.map((item) => {
						const isActive = pathname === item.href;
						const isOpen = openItems[item.label];

						return (
							<li
								key={item.label}
								className={`text-blue-800 ${
									isActive ? 'bg-blue-100' : ''
								}`}
							>
								{item.children ? (
									<button
										onClick={() => toggleItem(item.label)}
										className={`w-full flex items-center justify-between gap-3 px-6 py-3 rounded-lg font-medium text-base transition-colors cursor-pointer text-blue-800 ${
											isActive
												? 'font-bold'
												: 'hover:bg-blue-50 hover:text-blue-800'
										}`}
									>
										<span className='flex items-center gap-3'>
											{item.icon}
											{item.label}
										</span>
										{isOpen ? (
											<ExpandLess fontSize='small' />
										) : (
											<ExpandMore fontSize='small' />
										)}
									</button>
								) : (
									<Link
										href={item.href}
										className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium text-base transition-colors ${
											isActive
												? 'bg-blue-100 text-blue-700'
												: 'text-blue-800 hover:bg-blue-50 hover:text-blue-800'
										}`}
									>
										{item.icon}
										{item.label}
									</Link>
								)}

								{item.children && isOpen && (
									<ul className='pl-6 mt-2 space-y-1'>
										{item.children.map((child) => (
											<li key={child.label}>
												<Link
													href={child.href}
													className={`flex items-center gap-3 px-6 py-2 rounded-lg font-medium text-sm transition-colors ${
														pathname === child.href
															? 'bg-blue-100 text-blue-700'
															: 'text-blue-600 hover:bg-blue-50 hover:text-blue-800'
													}`}
												>
													{child.icon}
													{child.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						);
					})}
				</ul>
			</nav>

			<div className='mt-auto flex items-center gap-3 px-6 py-6 border-t border-gray-200'>
				<PersonIcon fontSize='medium' className='text-gray-400' />
				<span className='text-sm text-gray-500 font-medium'>Admin</span>
			</div>
		</aside>
	);
};

export default Sidebar;
