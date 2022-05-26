let contador: number = 0;

while (contador <= 100) {
  if (contador % 2 === 0 && contador % 3 === 0) {
    console.log(`${contador} es Multiplo de 2 o de 3`);
  }
  contador++;
}
