var positive = parseFloat(prompt("Digite um valor"))

function value (positive) {
	if (positive < 0) {
		return document.body.append("O valor é negativo");
	} else {
		return document.body.append("O valor é positivo")
	}
}

value(positive);