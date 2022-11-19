

function inserir(numero) {

    var numeral = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numeral + numero;


}

function limpaResultado() {

    document.getElementById('resultado').innerHTML = "";
}

function limpaUm() {

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}

function calculando() {

    var resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado) {

        document.getElementById('resultado').innerHTML = eval(resultado);

    }  else {

        document.getElementById('resultado').innerHTML = "";

    }
}