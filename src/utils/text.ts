import { isValid, isEmptyString } from './types';

const DEFAULT_STRING = '';

const capitalize = (value: string | number): string => {
	if (!isValid(value)) return DEFAULT_STRING;
	if (typeof value !== 'string') return String(value);
	if (isEmptyString(value)) return DEFAULT_STRING;

	return value.charAt(0).toUpperCase() + value.slice(1);
};

const toUpperCase = (value: string): string => {
	if (!isValid(value)) return DEFAULT_STRING;
	if (typeof value !== 'string') return String(value);
	if (isEmptyString(value)) return DEFAULT_STRING;

	return value.toUpperCase();
};

export { capitalize, toUpperCase };
