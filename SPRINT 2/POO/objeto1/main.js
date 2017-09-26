// prompt ("hola mundo!");

function mainObj() {
    var questions = [
     {    
        question: '¿Cuantos departamentos tiene el Peru?',
        rpta: 24
     },
     { 
        question: '¿Cuantos continentes existen?',
        rpta: 7
     },
     {
        question: '¿Cuantos años tiene tiene PPK?',
        rpta: 78
     }
   ];
   for (var i = 0; i <   questions.length; i++)
      alert ( questions[i].question + " => " + questions[i].rpta);
  
   
   var i = 0, correctos = 0; 
   while ( i < questions.length) {
      var q = questions[i];
      var rpta = parseInt(prompt ( q.question ));
      if (rpta === q.rpta )
         correctos++;
      i++;
   }
   alert ("Numero de respuestas correctas: " + correctos);
   
}

function main () {
   var questions = [
     ['¿Cuantos departamentos tiene el Peru?', 24],
     ['¿Cuantos continentes existen?', 7],
     ['¿Cuantos años tiene tiene PPK?', 78]
   ];
   for (var i = 0; i <   questions.length; i++)
      alert ( questions[i][0] + " => " + questions[i][1]);
   
   var i = 0, correctos = 0; 
   while ( i < questions.length) {
      var q = questions[i];
      var rpta = parseInt(prompt ( q[0] ));
      if (rpta === q[1] )
         correctos++;
      i++;
   }
   alert ("Numero de respuestas correctas: " + correctos);
}

//

function main () {
   var person = {
     name: "Alex",
     surname: "Ocsa",
     dni: 43585849,
     bithday : "12/04/86",
     adress: "Los Olmos D1",
     nationality : "Peruano",
     age : function () {

     }
   };
   for (var property in person ) 
      alert (property + " : " + person [property] );
}


/////////////////////////

function Poligono(n, L){
   this.n = n;
   this.L = L;
   this.area = function() {
      var apotema =  this.L / ( 2 * Math.tan (  3.1416 / this.n));
      return apotema * this.perimetro ()  / 2; 
   }
   this.perimetro = function () {
      return this.n * this.L;
   }
}

function main () {
   
   var lados = [5, 6, 7, 9, 12 , 15];
   for ( var i in lados ) {
      var n = lados [i];      
      var p = new Poligono (n, 10);
      
      alert ("Poligono de " + n + " lados \n" + 
             "Area: " + p.area () + "\n " + "Perimetro: " + p.perimetro() );
   }
   
}