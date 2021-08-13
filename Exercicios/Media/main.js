let n1, n2, n3, n4, media, nr, mf;
n1 = 2;
n2 = 3;
n3 = 7.5;
n4 = 3.0;

media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;

if (media >= 7.0) {
    console.log("Media: ", media.toFixed(1));
    console.log("Aluno aprovado.\n");
} else if (media < 5) {
    console.log("Media: ", media.toFixed(1));
    console.log("Aluno reprovado.\n");
} else if (media >= 5 & media <= 6.9) {
    console.log("Media: ", media.toFixed(1));
    console.log("Aluno em exame.");
    nr = 6.4;
    console.log("Nota do exame: ", nr.toFixed(1));
    if (nr >= 5) {
        mf = (nr + media) / 2;
        console.log("Aluno aprovado.");
        console.log("Media final: ", mf.toFixed(1), "\n");
    } else {
        mf = (nr + media) / 2;
        console.log("Aluno reprovado.");
        console.log("Media final: ", mf.toFixed(1), "\n");
    }
}