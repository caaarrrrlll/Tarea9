//tarea9
function heroesThatStartsWith(arr: string[], letra: string): string[] {

    const filtrados: string[] = arr.filter((hero) => hero.startsWith(letra));
    return filtrados;
  }
  
  // Ejemplo de uso:
  let heroes: string[] = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
  let herosWithLetterS: string[] = heroesThatStartsWith(heroes, 'S');
  console.log(herosWithLetterS); 
  