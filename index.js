//Transforme as funções declarativas abaixo em Arrow Functions
const upperName = (name)=> name.toUpperCase()
const multiplicar = (p1, p2)=> p1 * p2
const toCelsius = (fahrenheit)=> (5 / 9) * (fahrenheit - 32)
console.log(upperName('pedro'))
console.log(multiplicar(3, 2))
console.log(toCelsius(24))

//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove(event) {
    const {clientX, clientY} = event
    console.log(clientX, clientY);
}
let event = {
    clientX:'Pedro',
    clientY:'Peralva'
}
handleMouseMove(event)

//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: 'Jane', last: 'Doe' };
const {first} = obj

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
const company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };
const {name, products:{shirts:coresShirts}, products:{socks:coresSocks}} = company

//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};
const clone = {...clothes}

//Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a 
//este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants,
//shirts ​e​ socks

const add = {
    shoes: { colors: ['yellow', 'purple'] }
}
const clone2 = {...clothes,...add}

//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];
var raizQuadrada = numbers.map((el)=> Math.sqrt(el))

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];
var multiplicaPorDez = numbers.map((el)=> el*10)

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];
var maiorDeDezoito = ages.filter((el)=> el > 18)

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];

var onlyDogs = data.filter((el)=> el.type === 'dog')

//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
var somaIdades = onlyDogs.reduce((cont, el)=> cont + el.age,0)

//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
var getShirtsColorsAmount = (company)=> {
    const {products:{shirts:colors}} = company
    return console.log(colors);
  };

//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas
//os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const roupas = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
}; 
const semCalcas = {shirts:{...roupas.shirts},socks:{...roupas.socks}}

//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr.splice(1,arr.length), ...arr2.splice(1,arr2.length)]

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
    { firstname: 'Malcom', lastname: 'Reynolds' },
    { firstname: 'Kaylee', lastname: 'Frye' },
    { firstname: 'Jayne', lastname: 'Cobb' },
];
var nomesCompletos = persons.map((el)=> `${el.firstname} ${el.lastname}`)