//Atividade sobre

const meuArray = [30, 30, 40, 5, 223, 2049, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr)

    return [...mySet]; // spreat: formando um novo array
}

console.log(valoresUnicos(meuArray));