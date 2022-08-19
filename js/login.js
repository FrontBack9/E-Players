// inicializa o jQuery
$(document).ready(function(){
    
    $(".signin").click(function(){
        
        //Captura os dados dos campos:
        
        let nome = $("#nome").val();
        let usuario = $("#usuario").val();
        let senha = $("#senha").val();

        if(nome.trim() == "" || usuario.trim() == "" || senha == ""){
            alert("Preencha todos os campos");
        } else {
            $(".mensagem").text("Formulários preenchidos prontos para Logar!!");
        }
    });
});