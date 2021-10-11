/*Sistema de reservas para restaurant bodega Kaluma

/En el siguiente ejemplo, se toman 30 reservas por noche para el restaurant de la bodega Kaluma. En caso de las reservas 5, 15 y 25, las mismas se guardan para parejas (mesas de 2 personas) que no hayan reservado via web y lleguen la misma noche para cenar.

Se utiliza la sentencia for para crear un bucle y el condicional if / else if para tomar las reservas, y se realizan diversas salidas por consola o alerta según la disponibilidad o no del turno. En el caso de que el turno esté disponible, se concatenan los datos solicitados al comensal con el número de reserva correspondiente.

*/

for (let i=1; i<=30; i++) {
    let DNI = parseInt(prompt("Ingrese su número de DNI"));
    let nombreCompleto = prompt("Ingrese su nombre y apellido");
    if (i==5) {
        console.log ("reserva in situ");
        alert ("Turno reservado. Ingrese nuevamente sus datos");
        continue;
    }
    else if (i==15) {
        console.log ("reserva in situ");
        alert ("Turno reservado. Ingrese nuevamente sus datos");
        continue;
    }
    else if (i==25) {
        console.log ("reserva in situ");
        alert ("Turno reservado. Ingrese nuevamente sus datos");
        continue;
    }
    alert ("Estimado/a" + " " + nombreCompleto + " " + "con DNI" + " " + DNI + "\nSu turno es el: " + " " + i);
}

/*Luis: al ejemplo anterior, quise sumarle un WHILE para solicitar un dato más (número de comensales) además del DNI y nombre de la persona para la reserva. A esta condición WHILE, le sumé los operadores && y || para excluir espacios vacíos y ceros como respuestas válidas. Mi idea era que, luego de pedir DNI y nombre en el ejercicio anterior, los usuarios tuvieran que completar con el número de comensales, pero tuve inconvenientes para incluir la sentencia WHILE dentro del FOR. 

Debajo detallo lo que intenté hacer y no me salió. ¿Es posible anidar un WHILE dentro de un FOR? Si es un tema que veremos más adelante, dejo esta consulta para su correspondiente clase!

for (let i=1; i<=30; i++) {
    let DNI = parseInt(prompt("Ingrese su número de DNI"));
    let nombreCompleto = prompt("Ingrese su nombre y apellido");
    let comensales = parseInt(prompt="Ingrese número de comensales",0);
        while ((comensales != "") && (comensales !=0)) {
            alert ("Su reserva ha sido registrada. ¡Los esperamos!");
            if ((comensales == "") || (comensales ==0)) {
                alert ("Ingrese un número válido")
            }
        }
    if (i==5) {
        console.log ("reserva in situ");
        alert ("Turno reservado. Ingrese nuevamente sus datos");
        continue;
    }
    else if (i==15) {
        console.log ("reserva in situ");
        alert ("Turno reservado. Ingrese nuevamente sus datos");
        continue;
    }
    else if (i==25) {
        console.log ("reserva in situ");
        alert ("Turno reservado. Ingrese nuevamente sus datos");
        continue;
    }
    alert ("Estimado/a" + " " + nombreCompleto + " " + "con DNI" + " " + DNI + "\nSu turno es el: " + " " + i);
}


*/