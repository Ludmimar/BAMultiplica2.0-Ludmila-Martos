let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));
let op = parseInt(prompt("Ingrese que operacion desea realizar: 1)Suma/ 2)Resta/ 3)Multiplicacion/ 4)Division"));
let respuesta;

/*validar que seleccione una opcion correcta */
while(op > 4){
    op = parseInt(prompt("Ingrese una opcion valida: 1-> para Suma/ 2-> para Resta/ 3-> para Multiplicacion/ 4-> para Division"));
}

switch(op){
    case 1:
        respuesta = "La suma entre: " + String(num1)+ " y " +String(num2)+ " es: " +String(num1+num2);
        break;
    case 2:
        respuesta = "La resta entre: " + String(num1)+ " y " +String(num2)+ " es: " +String(num1-num2);
        break;
    case 3:
        respuesta = "La multiplicacion entre: " + String(num1)+ " y " + String(num2)+ " es: " +String(num1*num2);
        break;
    case 4:
        while (num2 <= 0){
            num2 = parseFloat(prompt("Ingrese un divisor mayor a cero: "));
        }
        respuesta = "La division entre: " + String(num1)+ " y " + String(num2)+ " es: " +String(num1/num2);
        break;
}
alert(respuesta)

