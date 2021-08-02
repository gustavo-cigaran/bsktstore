
function validacao(){
	
	if(document.form.nome.value == ""){
		alert("Por favor, preencha seu nome");
		document.form.nome.focus();
		return false;
	}
	
	if(document.form.email.value=="" || document.form.email.value.index('@') ==-1 
	 
	 || document.form.email.value.indexOf('.')==-1){
		 
		alert("Erro. Por favor digite um email válido!");
		document.form.email.focus();
		return false;
	}
	
	if(document.form.caixa.value ==""){
		alert(" Escreva sua mensagem.");
		document.form.caixa.focus();
		return false;
	}
}