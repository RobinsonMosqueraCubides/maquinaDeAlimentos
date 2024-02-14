const precioComida = {1: 270, 2: 340, 3: 390};
let producto = 0, aux = 0, moneda = 0, cambio = 0, total = 0;
let imprimir = "";
for (let i = 1; i <= 3; i++) {
    imprimir += `Producto ${i}: ${precioComida[i]}\n`;
}

let bandera = false;
while (!bandera) {
    try {
        producto = parseInt(prompt(imprimir+ "\nIngrese el número del producto:"));
        if (1 <= producto && producto <= 3) {
            bandera = true;
        } else {
            alert("Por favor, ingrese un número del 1 al 3.");
        }
    } catch (error) {
        alert("Por favor, ingrese un número válido.");
    }
}
bandera = true;
while (bandera) {
    let bande = false;
    while (!bande) {
        try {
            moneda = parseInt(prompt("Ingrese una moneda de 10, 50 o 100:"));

            if ([10, 50, 100].includes(moneda)) {
                bande = true;
            } else {
                alert("Ingrese una moneda válida.");
            }
        } catch (error) {
            alert("Ingrese un número válido.");
        }
    }

    aux += moneda;
    if (aux >= precioComida[producto]) {
        bandera = false;
    }
}
cambio = aux - precioComida[producto];
total = cambio / 50;
if (parseInt(total) === 0) {
    total = cambio / 10;
    if (parseInt(total) !== 0) {
        alert(`Su cambio es: ${parseInt(total)} de 10`);
    } else {
        alert("No hay cambio");
    }
} else {
    const cM = parseInt(total);
    cambio -= 50;
    total = cambio / 10;
    if (parseInt(total) !== 0) {
        alert(`Su cambio es: ${cM} de 50 y ${parseInt(total)} de 10`);
    } else {
        alert("No hay más cambio");
    }
}

