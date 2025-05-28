import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import PeopleIcon from '@mui/icons-material/People';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SettingsIcon from '@mui/icons-material/Settings';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';

export const NAV_ITEMS = [
	{
		label: 'Insights',
		icon: <HomeOutlinedIcon fontSize='small' />,
		href: '/insights',
	},
	{
		label: 'Vendors',
		icon: <DescriptionIcon fontSize='small' />,
		href: '#',
		children: [
			{
				label: 'Applications',
				icon: <ReceiptLongRoundedIcon fontSize='small' />,
				href: '/vendors/applications',
			},
			{
				label: 'Contracts',
				icon: <DescriptionIcon fontSize='small' />,
				href: '/vendors/contracts',
			},
			{
				label: 'Invoices',
				icon: <ReceiptRoundedIcon fontSize='small' />,
				href: '/vendors/invoices',
			},
			{
				label: 'Price Intelligence',
				icon: <PsychologyRoundedIcon fontSize='small' />,
				href: '/vendors/price-intelligence',
			},
		],
	},
	{
		label: 'Employees',
		icon: <PeopleIcon fontSize='small' />,
		href: '/employees',
	},
	{
		label: 'Renewals',
		icon: <AutorenewIcon fontSize='small' />,
		href: '/renewals',
	},
	{
		label: 'Workflow',
		icon: <SettingsIcon fontSize='small' />,
		href: '/workflow',
	},
];
