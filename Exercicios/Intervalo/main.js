let entrada = 80;
if ((entrada >= 0) & (entrada <= 100)) {

    if ((entrada <= 0) & (entrada <= 25)) {
        console.log(`Intervalo [0,25]`);
    }

    if ((entrada >= 25.0000000001) & (entrada <= 50.000000000)) {
        console.log(`Intervalo (25,50]`);
    }

    if ((entrada >= 75.00000000001) & (entrada <= 100.000000000)) {
        console.log(`Intervalo (75,100]`);
    }
} else {
    console.log("Fora de intervalo");
}