/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type ColumnType = {
	id: string;
	label: string;
};

interface CustomPaperTableProps {
	columns: ColumnType[];
	data: Record<string, any>[];
}

const TOTAL_PERCENTAGE = 100;

const CustomPaperTable: React.FC<CustomPaperTableProps> = ({
	columns,
	data,
}) => {
	return (
		<TableContainer
			component={Paper}
			elevation={0}
			className='bg-transparent shadow-none rounded-2xl bg-gray-50'
		>
			<Table size='small'>
				<TableHead>
					<TableRow>
						{columns.map((column) => (
							<TableCell key={column.id}>
								<div className='font-bold text-gray-700'>
									{column.label}
								</div>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, index) => {
						const breakdown = Number(row.breakdown) || 0;
						const usedWidth = breakdown * TOTAL_PERCENTAGE;
						const remainingWidth = TOTAL_PERCENTAGE - usedWidth;

						return (
							<TableRow key={index} className='hover:bg-gray-100'>
								<TableCell>
									<div className='flex items-center gap-2'>
										{row.icon && (
											<Image
												src={row.icon as string}
												alt={`${row.appName} icon`}
												width={24}
												height={24}
												className='rounded-full'
											/>
										)}
										<span className='text-gray-900'>
											{row.appName || '-- No Name --'}
										</span>
									</div>
								</TableCell>
								<TableCell>
									<div className='flex items-center gap-2 w-full h-4'>
										{Boolean(row?.breakdown) && (
											<span
												className='inline-block h-full rounded bg-pink-500 transition-all duration-300'
												style={{ width: `${usedWidth}%` }}
											/>
										)}
										<span
											className='inline-block h-full rounded bg-green-600 transition-all duration-300'
											style={{ width: `${remainingWidth}%` }}
										/>
									</div>
								</TableCell>
								<TableCell className='text-gray-700'>
									{row.stats || '-- No Stats --'}
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CustomPaperTable;
