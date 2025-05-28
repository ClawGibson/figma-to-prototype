import React from 'react';
import UploadFileOutlined from '@mui/icons-material/UploadFileOutlined';

const UploadFiles = () => {
	return (
		<div className='flex flex-col items-center'>
			<button
				type='button'
				className='flex items-center bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md  ease-in-out cursor-pointer'
			>
				<UploadFileOutlined className='text-white' />
				<span className='ml-2 text-xs inline-block whitespace-nowrap'>
					Upload Documents
				</span>
			</button>
		</div>
	);
};

export default UploadFiles;
