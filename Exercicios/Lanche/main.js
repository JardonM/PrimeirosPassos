let codigo = 2;
let quantidade = 3;
let total;

switch (codigo) {
    case 1:
        total = 4 * quantidade;
        break;
    case 2:
        total = 4.5 * quantidade;
        break;
    case 3:
        total = 5 * quantidade;
        break;
    case 4:
        total = 2 * quantidade;
        break;
    case 5:
        total = 1.5 * quantidade;
        break;
}
console.log("Total: R$ ", total.toFixed(2));