function fibo() {
    let limite = document.getElementById("limite").value;
    let n1 = 0,
        n2 = 1,
        n3;

    console.log(n1);
    console.log(n2);

    for (let count = 0; count <= limite; count++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
        console.log(n3);
    }
}