'use client';
import React, { useState, useEffect } from 'react';
import {
	ComposedChart,
	Area,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { MenuItem } from '@mui/material';

import { Card } from '@/components/atoms/Card';
import { CustomPaperTable } from '@/components/molecules/CustomPaperTable';
import {
	LINKED_APPS_COLOR,
	UNLINKED_APPS_COLOR,
	CHART_DATA,
	COLUMNS,
	TABLE_DATA,
} from '@/mock/applications-line-chart';

const ApplicationsLineChart: React.FC = () => {
	const [hasMounted, setHasMounted] = useState(false);
	const [selectedPeriod, setSelectedPeriod] = useState('month');

	const handleSelectChange = (event: SelectChangeEvent) => {
		setSelectedPeriod(event.target.value);
	};

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) return null;

	return (
		<Card>
			<div className='flex-1'>
				<h2 className='text-3xl font-semibold mb-15 text-gray-900'>
					App Adoption Overview
				</h2>

				<h3 className={`text-lg font-semibold mb-4`}>
					5 New apps added in the last{' '}
					<span className='text-blue-500'>{selectedPeriod}</span>
				</h3>

				<div className='flex gap-2 justify-between items-center mb-4 flex-wrap'>
					<div className='flex gap-2 flex-wrap'>
						<div className='flex items-center gap-2'>
							<ArrowCircleLeftIcon
								style={{
									rotate: '-90deg',
									fill: '#ff0000',
								}}
							/>
							<span className='inline-flex font-semibold text-2xl text-red-600'>
								-260%
							</span>
						</div>
						<span className='text-gray-500 text-md self-center'>
							vs. previous
						</span>
						<Select
							defaultValue='month'
							value={selectedPeriod}
							onChange={handleSelectChange}
							className='w-25'
							size='small'
							sx={{
								fontSize: '0.85rem',
								backgroundColor: `${LINKED_APPS_COLOR}22`,
								color: LINKED_APPS_COLOR,
								fontWeight: 700,
								'& .MuiSelect-icon': {
									color: LINKED_APPS_COLOR,
								},
								'& .MuiOutlinedInput-notchedOutline': {
									border: 'none',
								},
							}}
						>
							<MenuItem value='month'>1 month</MenuItem>
							<MenuItem value='3 months'>3 months</MenuItem>
							<MenuItem value='6 months'>6 months</MenuItem>
						</Select>
					</div>

					<div className='flex items-center gap-4 min-w-[140px] justify-end'>
						<div className='flex items-center gap-2'>
							<span
								className='inline-block w-4 h-4 rounded'
								style={{ backgroundColor: LINKED_APPS_COLOR }}
							/>
							<span className='text-md text-blue-700'>Linked Apps</span>
						</div>
						<div className='flex items-center gap-2'>
							<span
								className='inline-block w-4 h-4 rounded'
								style={{ backgroundColor: UNLINKED_APPS_COLOR }}
							/>
							<span className='text-md text-gray-700'>
								Unlinked Apps
							</span>
						</div>
					</div>
				</div>

				<div className='w-full h-[250px] sm:h-[200px] xs:h-[150px]'>
					<ResponsiveContainer width='100%' height='100%'>
						<ComposedChart data={CHART_DATA}>
							<CartesianGrid strokeDasharray='3' stroke='#ccc' />
							<XAxis
								dataKey='month'
								stroke='#333'
								tick={{ fill: '#333' }}
							/>
							<YAxis stroke='#333' tick={{ fill: '#333' }} />
							<Tooltip
								contentStyle={{
									backgroundColor: '#fff',
									borderColor: '#ccc',
									color: '#000',
								}}
								labelStyle={{ color: '#555' }}
							/>
							<Area
								type='monotone'
								dataKey='unlinked'
								name='Unlinked Apps'
								stroke={UNLINKED_APPS_COLOR}
								fill={`${UNLINKED_APPS_COLOR}22`}
							/>
							<Line
								type='monotone'
								dataKey='linked'
								name='Linked Apps'
								stroke={LINKED_APPS_COLOR}
								strokeWidth={3}
								dot={{ r: 6 }}
							/>
						</ComposedChart>
					</ResponsiveContainer>
				</div>

				<Divider sx={{ my: 5, borderColor: '#ccc' }} />

				<h3 className={`text-lg font-semibold mb-4 text-gray-900`}>
					5 Inactive or Abandoned accounts in paid apps
				</h3>

				<CustomPaperTable columns={COLUMNS} data={TABLE_DATA} />
			</div>
		</Card>
	);
};

export default ApplicationsLineChart;
