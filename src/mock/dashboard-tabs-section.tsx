import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined';

import { TabValues } from '@/enums/dashboard-tabs-sections';

export const TAB_OPTIONS = [
	{
		label: 'Contracts',
		value: TabValues.CONTRACTS,
		icon: <HistoryEduOutlinedIcon />,
	},
	{
		label: 'Applications',
		value: TabValues.APPLICATIONS,
		icon: <SystemSecurityUpdateGoodOutlinedIcon />,
	},
	{
		label: 'Employee',
		value: TabValues.EMPLOYEE,
		icon: <PersonOutlineOutlinedIcon />,
	},
];
