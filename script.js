function validarDados() {
	var nome = document.getElementById('nome').value;
	var senha = document.getElementById('senha').value;
	var login = document.getElementById('login').value;
	if (nome == '') {
		alert('Informe um nome válido.');
		return false;
	}
	else if (login == '') {
		alert('Informe um Login válido.');
		return false;
	}
	else if (senha == '') {
		alert('Informe uma Senha válida.');
		return false;
	}
	return true;
}