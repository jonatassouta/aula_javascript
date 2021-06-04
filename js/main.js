
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por lalala</b>"; //.innerHTML te permite inserir tags HTML.
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://youtube.com/");
    //window.location.href = "http://youtube.com";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}



/*
function soma(n1, n2){
    return n1+n2;
}
*/

/*
var validar = 0;

function validaIdade(idade){
    if (idade >= 18)
        validar = true
    else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));

/*
var d = new Date()
alert(d);
alert(d.getMonth()+1); //SEMPRE TEM QUE COLOCAR +1 PARA TRAZER O MES CERTO.
*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}  // outra estrutura de repetição.
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1; //Ou count++ que é a mesma coisa
};  //while cria uma estrutura de repetição.
*/

/*
var idade = prompt("Qual sua idade");  //prompt abre uma caixa de texto no navegador, e o que o usuario comentar sera gravado na variavel.
//var idade = 18;
if (idade >= 18){
    alert("Maior de Idade")
}
else{
    alert("Menor de Idade")
};
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);   //console.log é exibido na area console d navegador
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta);
alert(fruta.cor);
*/

//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

/*
var nome = "Jonatas Souta";
var n1 = 22;
var n2 = 5;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.toLocaleUpperCase());
//alert(frase.replace("Japão", "Braisil"));
*/