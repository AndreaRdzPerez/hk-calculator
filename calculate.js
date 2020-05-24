
    var num1 = 0;
    var num2 = 0;
    var opera;

    function insertNum(numero){
      if(num1==0){
      num1 = numero;
      }else{
      num1 += numero;
      }
      refrescar();
      }

    function clearScreen() {
        num1 = 0;
        num2 = 0;
        refrescar();
          }

    function insertOp(valor){
        if (num1 == 0){
            num1 = parseFloat(document.getElementById("display").value);
        }
        num2 = parseFloat(num1);
        num1= 0;
        opera = valor;
    }

    function esIgual(){
          num1 = parseFloat(num1);
          switch (opera){
              case 1:
                  num1 += num2;
              break;
              case 2:
                  num1 = num2 - num1;
              break;
              case 3:
                  num1 *= num2;
              break;
              case 4:
                  num1 = num2 / num1;
              break;
          }
          refrescar();
          num2 = parseFloat(num1);
          num1 = 0;
      }

      function refrescar(){
          document.getElementById("display").value = num1;
      }
