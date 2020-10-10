// Funcions de validació
export function validateEmail(email) {
	const regex = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
	return regex.test(email);
}

export function validatePhone(phone) {
	const regex = /^[0-9]{2,3}-? ?[0-9]{6,7}$/;
	return regex.test(phone);
}

export function validateCodiCentre(centre) {
	const regex = /^07[0-9]{6}$/i;
	return regex.test(centre);
}

export function validateNumeric(num) {
	const regex = /^[0-9]+$/i;
	return regex.test(num);
}


export function validateDate(date, format = "dd/mm/aaaa") {
	let regex = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
	if (format == "dd-mm-aaaa")
		regex = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
	return regex.test(date);
}

 export function validateDNI(dni) {
	const regex = /^\d{8}[a-zA-Z]$/;

	if (regex.test(dni)) {
		var numero = dni.substr(0, dni.length - 1);
		var letr = dni.substr(dni.length - 1, 1);
		numero = numero % 23;
		let letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
		letra = letra.substring(numero, numero + 1);
		if (letra != letr.toUpperCase()) return false;
	} else {
		return false;
	}

	return true;
}

export function validateAccount(date) {
	regex = /^[0-9]+$/i;
	return regex.test(date);
}

