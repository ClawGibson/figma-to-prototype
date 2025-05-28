const isValid = (value: unknown): boolean => {
	return value !== null && value !== undefined;
};

const isEmptyString = (value: string): boolean => {
	return isValid(value) && typeof value === 'string' && value.trim() === '';
};

export { isValid, isEmptyString };
