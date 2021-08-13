let cedulas = [100, 50, 20, 10, 5, 2];
let moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];
let cedulasorig = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00];
let moedasorig = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

let valor = 576.73;

cedulas[0] = parseInt(valor / 100);
cedulas[1] = parseInt((valor - cedulas[0] * 100) / 50);
cedulas[2] = parseInt((valor - cedulas[0] * 100 - cedulas[1] * 50) / 20);
cedulas[3] = parseInt((valor - cedulas[0] * 100 - cedulas[1] * 50 - cedulas[2] * 20) / 10);
cedulas[4] = parseInt((valor - cedulas[0] * 100 - cedulas[1] * 50 - cedulas[2] * 20 - cedulas[3] * 10) / 5);
cedulas[5] = parseInt((valor - cedulas[0] * 100 - cedulas[1] * 50 - cedulas[2] * 20 - cedulas[3] * 10 - cedulas[4] * 5) / 2);

moedas[0] = parseInt(valor - cedulas[0] * 100 - cedulas[1] * 50 - cedulas[2] * 20 - cedulas[3] * 10 - cedulas[4] * 5 - cedulas[5] * 2) / 1;
moedas[1] = parseInt(valor - cedulas[1] * 100 - cedulas[1] * 50 - cedulas[2] * 20 - cedulas[3] * 10 - cedulas[4] * 5 - cedulas[5] * 2 - moedas[0] * 1) * 0.50;
moedas[2] = parseInt(valor - cedulas[1] * 100 - cedulas[1] * 50 - cedulas[2] * 20 - cedulas[3] * 10 - cedulas[4] * 5 - cedulas[5] * 2 - moedas[0] * 1 - moedas[1] * 0.5) * 0.25;
moedas[3] = parseInt(valor - cedulas[1] * 100 - cedulas[1] * 50 - cedulas[2] * 20 - cedulas[3] * 10 - cedulas[4] * 5 - cedulas[5] * 2 - moedas[0] * 1 - moedas[1] * 0.5 - moedas[2] * 0.25) * 0.10;
moedas[4] = parseInt(valor - cedulas[1] * 100 - cedulas[1] * 50 - cedulas[2] * 20 - cedulas[3] * 10 - cedulas[4] * 5 - cedulas[5] * 2 - moedas[0] * 1 - moedas[1] * 0.5 - moedas[2] * 0.25 - moedas[3] * 0.10) * 0.05;
moedas[5] = parseInt(valor - cedulas[1] * 100 - cedulas[1] * 50 - cedulas[2] * 20 - cedulas[3] * 10 - cedulas[4] * 5 - cedulas[5] * 2 - moedas[0] * 1 - moedas[1] * 0.5 - moedas[2] * 0.25 - moedas[3] * 0.10 - moedas[4] * 0.05) * 0.01;

console.log("NOTAS:");
for (let count = 0; count <= 5; count++) {
    console.log(`${cedulas[count]} nota(s) de R$ ${cedulasorig[count]}.00`);
}
console.log("MOEDAS:");
console.log(moedas[0] + " moeda(s) de R$ 1.00");
for (let i = 1; i <= 5; i++) {
    console.log(`${moedas[i]} moeda(s) de R$ ${moedasorig[i].toFixed(2)}`);
}