function init(){

    var operandoA;
    var operandoB;
    var operacion;
    var resultado = document.getElementById('resultado');
    var igual = document.getElementById('=');
    //Numeros
    var N0 = document.getElementById('0');
    var N1 = document.getElementById('1');
    var N2 = document.getElementById('2');
    var N3 = document.getElementById('3');
    var N4 = document.getElementById('4');
    var N5 = document.getElementById('5');
    var N6 = document.getElementById('6');
    var N7 = document.getElementById('7');
    var N8 = document.getElementById('8');
    var N9 = document.getElementById('9');

    //Operaciones
    var suma = document.getElementById('+');
    var resta = document.getElementById('-');
    var division = document.getElementById('/');
    var multiplicacion = document.getElementById('*');

    var reset = document.getElementById('C');
    //eventos

    N1.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    N2.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    N3.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    N4.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    N5.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    N6.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    N7.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    N8.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    N9.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    N0.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    //eventos operaciones
    suma.onclick = function(e){
        resultado.textContent = resultado.textContent + "+";
    }
    resta.onclick = function(e){
        resultado.textContent = resultado.textContent + "-";
    }
    multiplicacion.onclick = function(e){
        resultado.textContent = resultado.textContent + "*";
    }
    division.onclick = function(e){
        resultado.textContent = resultado.textContent + "/";
    }
    
    //evento reset
    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    division.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
    }

    igual.onclick = function(e){
        operandoB = resultado.textContent;
        resolver();
    }

    function resetear(){
        resultado.textContent = "";
        operandoA = 0;
        operandoB = 0;
        operacion = "";
      }

      function limpiar(){
          resultado.textContent = " ";
      }
    
      function resolver()
      {
          var res= 0;
          switch(operacion)
          {
                  case "+":
                  res = parseFloat(operandoA) + parseFloat(operandoB);
                  break;
                  case "-":
                  res = parseFloat(operandoA) - parseFloat(operandoB);
                  break;
                  case "/":
                  res = parseFloat(operandoA) / parseFloat(operandoB);
                  break;
                  case "*":
                  res = parseFloat(operandoA) * parseFloat(operandoB);
                  break;
          }
          resetear();
          resultado.textContent = res;
      }
}