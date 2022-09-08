/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Ascuas','Nitrocarga','Superquemadura','Salto'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}


const personaje: Personaje = {
    nombre: 'Scorbunny',
    hp: 100,
    habilidades: ['Ascuas','Nitrocarga','Placaje','Quemar']
}

personaje.puebloNatal = 'Galar';


console.table( personaje );
