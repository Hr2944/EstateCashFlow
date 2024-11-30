export type Expenses = {
	maintenance: number;
	insurance: number;
	replacementReserve: number;
	taxes: number;
	vacancyPercentage: number;
};

export type Summary = {
	rent: number;
	loan: number;
	expenses: number;
	cashFlow: number;
};

export type Unit = {
	rent: number;
};
