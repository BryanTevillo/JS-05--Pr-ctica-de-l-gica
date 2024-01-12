const prompt = require("prompt-sync")(); // se importa la libreria prompt para ingresar numeros por consola

// # JS-05 Practica de logica

// Realiza los siguientes ejercicios en JS y entrega por medio de un link tu repositorio que contiene los ejercicios resueltos.

// ******************************8 # User profile ***********************************88

// Write a program that prompts a user for their data: username, age, and a list of their favorite movies.
//Store the information and then showcase it in the console. Take note that the output for the films should add a small message like:
//'The film {film} is one of my favorites'.
const userProfile = () => {
  console.log("programa user profile");
  let listMovies = [];
  let salir = true;
  let userName = prompt("ingresa tu nombre de usuario: ");
  let age = prompt("ingresa tu edad: ");

  while (salir) {
    listMovies.push(prompt("ingresa el nombre de tu pelicula favorita: "));
    let agregar = true;
    while (agregar) {
      let respuesta = prompt(
        "Quieres agregar otra pelicula? S/N:"
      ).toLowerCase();
      if (respuesta === "s") agregar = false;
      else if (respuesta === "n") {
        salir = false;
        agregar = false;
      } else {
        console.log("respuesta incorrecta");
      }
    }
  }
  console.log(`Tu nombre de usuario es: ${userName}`);
  console.log(`Tu edad es : ${age}`);
  listMovies.forEach((value) => {
    console.log(`The film ${value} is one of my favorites`);
  });
};

userProfile();

// *************************** # Highest number *********************************

// Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
const highestNumber = () => {
  console.log("Programa Highest number ");
  let arrayNumbers = [];
  for (let index = 0; index < 10; index++) {
    arrayNumbers.push(
      Number(
        prompt(`Numers ingresados ${index + 1}, ingrese un nuevo numero : `)
      )
    );
  }
  console.log(Math.max(...arrayNumbers));
};

highestNumber();

// ************************** # Alarm *****************************************************

// Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

// Result example: "Time for bed after 10 seconds".
const alarm = () => {
  console.log("Programa Alarm ");
  const timeAlarm = prompt(
    "Se ejecutara tu alarma despues de un tiempo, ingresa un numero seran los segundos en que se programa tu alarma: "
  );
  const alarmMsg = prompt("Ingresa el mensaje de mostrara la alarma: ");

  setTimeout(() => {
    console.log(`${alarmMsg} after ${timeAlarm} seconds`);
  }, timeAlarm * 1000);
};

alarm();

// ***************************** # Palindrome **************************************

// Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

const reverseString = (word) => {
  return word.split("").reverse().join("");
};

const palindrome = () => {
  console.log("Programa Palindrome ");
  let word = prompt(
    "Quieres saber si una texto es palindrome? ingresa la palabra a verificar: "
  ).toLowerCase();
  resp =
    word.localeCompare(reverseString(word)) == 0
      ? `La palabra ${word} SI un palindrome`
      : `La palabra ${word} NO un palindrome`;
  console.log(resp);
};

palindrome();
// ****************************** # Factorial *****************************************

// Write a program that prompts for an intenger number n. Where 1 <= n. Solve this using recursion.

const factorial = (num) => {
  console.log("Programa Factorial ");
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(5));

// *************************** # Flat array ********************************************

// Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

// let multiDimension = [1, [2, 3, [4, 5, [6]]]];

const flatArray = () => {
  console.log("Programa Flat array ");
  console.log(multiDimension.flat(Infinity));
};

let multiDimension = [1, [2, 3, [4, 5, [6]]]];

flatArray(flatArray);
