// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
	let wrongBal = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i].deposits && array[i].withdrawals) {
			let sum1 = 0;
			let sum2 = 0;
			for (let j = 0; j < array[i].deposits.length; j++) {
				sum1 += array[i].deposits[j];
			}
			for (let k = 0; k < array[i].withdrawals.length; k++) {
				sum2 += array[i].withdrawals[k];
			}
			if (sum1 - sum2 !== array[i].balance) {
				wrongBal.push(array[i]);
			}
		}
	}
	return wrongBal;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
