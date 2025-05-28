import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
	return (
		<TextField
			id='search-input'
			className='bg-white text-gray-900'
			variant='outlined'
			size='small'
			placeholder='Search here...'
			slotProps={{
				input: {
					endAdornment: (
						<InputAdornment position='end'>
							<SearchIcon />
						</InputAdornment>
					),
				},
			}}
		/>
	);
};

export default Search;
