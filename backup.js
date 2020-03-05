/*var total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}*/
//console.log(total); // 55
//alert(total);
//alert("ola mundo")
//document.write("<br>ola mundo<br>");
//document.write("<h1>total");
//var ano= 2012
//document.write("Eu nasci em : " + (ano - 25) + "<br>");
//document.write("Adriano nasceu em : " + (ano - 26) + "<br>");
//document.write("Paulo nasceu em : " + (ano - 32) + "<br>");
//var naul =5;
//var cau=5; 
//var no=5;
//var total =naul+cau+no;
//document.write("<br> soma das idades:"+total+"<br>")
//alert(total)


//var luigisDebt = 10;
//luigisDebt = luigisDebt * 10;

//console.log(luigisDebt+" jhvshdgvfghs"); // 105
//document.write("total= "+luigisDebt)
//console.log(Math.max(10, 4));
//console.log(Math.min(2, 4) + 100);

//confirm("");

//prompt("Diga-me algo que você saiba.", "...");
//var theNumber = Number(prompt("Pick a number", ""));
//alert("Your number is the square root de " + theNumber * theNumber);
//document.write(theNumber)

//var theNumber = Number(prompt("Digite um número", ""));
//if (!isNaN(theNumber))
  //  alert("Seu número é a raiz quadrada de " +
    //        theNumber * theNumber);
//
  //          else
    //        alert("Ei! Por que você não me deu um número?");


    //var num = Number(prompt("Digite um número", "0"));

//if (num < 0)
  //  alert("Pequeno");
//else if (num < 100)
  //  alert("Médio");
//else
  //  alert("Grande");

/*
var number = 0;
while (number <= 12) {
    //console.log(number);
    number = number + 2;
}

var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}*/
//console.log(result);
// 1024
/*
do {
    var name = prompt("Who are you?");
} while (!name) {
    console.log(name);
}*/

/*
 for (var current = 20; ; current++) {
  if (current % 7 == 0)
      break;
}*/
//console.log(current);
/*
switch (prompt("Como está o tempo?")) {
  case "chuvoso":
      console.log("Lembre-se de trazer um guarda-chuva!");
      break;
  case "ensolarado":
      console.log("Vista roupas leves!");
  case "nublado":
      console.log("Vá lá fora!");
      break;
  default:
      console.log("Tempo desconhecido.");
      break;
}

var repete='';

for (var conta = 0; conta <= 6; conta++) {
 repete+='#'
 console.log(repete)  
}

for (var conta = 1; conta <= 100; conta++){
  
  if(conta % 3 == 0 && conta % 7 == 0)
  console.log(conta +' FizzBuzz');

  else if (conta % 3 == 0)
      console.log(conta +' fizz');
  else if (conta % 7 == 0)
      console.log(conta +' buzz');
  else 
  console.log(conta);


  
}
*/
/*

var square = function(x) {
  return x * x;
};

console.log(square(12));

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

var makeNoise = function() {
  console.log("Pling!");
};

makeNoise();

var power = function(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10));
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

var teste = function (i) {

  return i+i;
}

console.log(teste(5))

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "`´";
    result += "\\";
  };

  flat(1);
  mountain(1);
  mountain(1);
  mountain(1);
  flat(1);
  //flat(0);
  //mountain(0);
  //flat(0);
  return result;
};

console.log(landscape());
document.write("<br>"+"<h1>"+landscape())

// → ___/''''\______/'\_
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
function square(x) {
  return x * x;
}
console.log(square(2))
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(4));

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
function zeroPad(number, width) { // numero para a funcao// numero de repeticao
  var string = String(number);//string=number
  while (string.length < width)//se numero tiver menos de 3 casas decimais
    string = '0' + string;// add 0 mais ao numero
  return string;//retorna a var string
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + ' Cows');
  console.log(zeroPad(chickens, 3) + ' Chickens');
  console.log(zeroPad(pigs, 3) + ' Pigs');
}

printFarmInventory(7, 16, 3);

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////


function min(a,b) {
  return Math.min(a, b)
}
console.log(min(0, 10));
console.log(min(0, -10));

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

function isEven(n) {
  function vs() {
    if(n % 2==0){
      return i=' true'
    }
    else if (n % 2==1) {
      return i=' false'
    }
    else
    return i=' ???'

    
  }
  return n % 2 + vs();
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

/*function countBs(string) {
  for (var counter=0;counter < string.length; counter++) {
    return string.length(string)

  }


}
console.log(countBs('BBC'));


var mack = [];
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);
// → ["Mack", "the", "Knife"]
console.log(mack.join(" "));
// → Mack the Knife
console.log(mack.pop());
// → Knife
console.log(mack);
// → ["Mack", "the"]*/
/*
var anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
function pularLinha() {
  document.write("<hr>");
}
var run = function(i) {    
  pularLinha();
  document.write(i); 
};*/
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/*var peso=prompt('Seu peso');
var altura=prompt('sua altura');

function calculaIMC(altura,peso) {
  imc = peso / (altura*peso);
  return Math.round(imc);
};

run("O seu imc é " +calculaIMC(altura,peso));*/
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

/*var idade = prompt("Quantos anos você tem?");
var dias = idade * 365;
document.write("Você já viveu " + dias + " dias de vida");*/
/////////////////////////////////////////////////////
/////////////parseInt transforma texto em numero////////////////
/*
var vitorias = 3;
var empates = "1"; // string!
empates = parseInt(empates);
var pontos = vitorias * 3 + empates;
alert(total);*/
/*
var numeroPensado = Math.round(Math.random() * 10);
run(numeroPensado);


var chute = prompt("Já pensei. Qual você acha que é?");
if(chute == numeroPensado) {
    run("Uau! Você acertou, pois eu pensei no " + numeroPensado);
} else {
    run("Você errou! Eu tinha pensado no " + numeroPensado);
}

run(isNaN("banana"));*/

/* TABUADA
function tabuada(n) {  
var m = 1;
    while(m <= 10) {
        run(n * m);
        m = m + 1;
    }
}
var n =prompt('tabuada do numero: ')
for (m = 0; m<=10;m++) {
  run(n * m); 
}
run(n)*/


/*
var totalDeFamiliares = prompt("Quantos familiares são?");
var numero = 1;
while(numero <= totalDeFamiliares) {
    var idade = parseInt(prompt("Qual é a idade?"));
    console.log(totalDeFamiliares);
numero++;}

 var add = parseInt(prompt('add mais numero'))
  while (add<=10) {

    add += parseInt(prompt('add mais numero'))
    console.log(add)
  }*/

  /*
var ntexto = prompt('digite');


var mud = document.getElementById('novo');
var add=0
  while (add<=2) {
    ntexto += ' ' + prompt('novo texto');
    
    add++
    console.log(ntexto)
    
  }

  mud.textContent = ntexto;



var colors = ['white','black','custom'];
var rrr = document.getElementById('btn')
rrr.textContent = colors[0];
*/
