function filtrarCafe(budget, prices) {
   // Usemos el método filter sobre el array 'prices' para comprobar cada elemento si es menor o igual que el parámetro 'budget'
}

// Nos devuelve un array con todos los valores que son menores de 3, que es el presupuesto
console.log(filtrarCafe(3, [6, 1, 2, 9, 2]), [1, 2, 2]);

// Nos devuelve un array con todos los valores menores o iguales a 14, que es el presupuesto
console.log(filtrarCafe(14, [7, 3, 23, 9, 14, 20, 7]), [3,7,7,9,14]);

// "Should return an empty string when budget is zero"
console.log(filtrarCafe(0, [6, 1, 2, 9, 2]), []);
