//Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)

/*
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);
*/

//Satrdagi so’zlarning bosh harflarini oling. (split, map, join)
/*
const fullName = 'George Raymond Richard Martin';

const initials = fullName.split(' ').map(word => word[0]).join('');

console.log(initials);
*/

// Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
/*
const people = [
    { name: 'John', age: 13 },
    { name: 'Mark', age: 56 },
    { name: 'Rachel', age: 45 },
    { name: 'Nate', age: 67 },
    { name: 'Jeniffer', age: 65 }
];

people.sort((a, b) => a.age - b.age);

const youngest = people[0].age;
const oldest = people[people.length - 1].age;

const ageDifference = oldest - youngest;

console.log(ageDifference);
*/

// N ta elementdan iborat massiv berilgan.Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log('Juft sonlar:', evenNumbers);
console.log('Toq sonlar:', oddNumbers);
*/

//Rating bo'yicha eng kuchli product topilsin. (sort)
/*
let products = [
    { name: "Telefon", rating: 4.5 },
    { name: "Kompyuter", rating: 4.2 },
    { name: "Televizor", rating: 4.8 },
    { name: "Planshet", rating: 4.0 }
];

products.sort((a, b) => b.rating - a.rating);

let bestProduct = products[0];

console.log(`top: ${bestProduct.name} (Rating: ${bestProduct.rating})`);
*/

// Narxi eng past bo'lgan product topilsin. (sort)

// Mahsulotlar ro'yxati
/*
let products = [
    { name: "Telefon", price: 300 },
    { name: "Kompyuter", price: 1500 },
    { name: "Televizor", price: 1800 },
    { name: "Planshet", price: 500 }
];


products.sort((a, b) => a.price - b.price);


let lowPrcProduct = products[0];

console.log(`Eng past narxli mahsulot: ${lowPrcProduct.name} (Narxi: ${lowPrcProduct.price})`);
*/

// Faqatgina products nomlaridangina iborat bo'lgan massiv qaytaring. (map)

/*
let products = [
    { name: "Telefon", price: 1200 },
    { name: "Kompyuter", price: 1500 },
    { name: "Televizor", price: 800 },
    { name: "Planshet", price: 1000 }
];

let productNames = products.map(product => product.name);

console.log(productNames);
*/

// Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing. (find)

/*
let products = [
    { id: 1, name: "Telefon" },
    { id: 2, name: "Kompyuter" },
    { id: 3, name: "Televizor" },
    { id: 4, name: "Planshet" },
    { id: 5, name: "Smartwatch" }
];
let productWithId5 = products.find(product => product.id === 5);

if (productWithId5) {
    console.log(`Element nomi: ${productWithId5.name}`);
} else {
    console.log("Bunday element topilmadi");
}
*/

// Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)

/*
let products = [
    {
      id: 6,
      name: "Smarthpone",
      price: 12000,
      rating: 4.5,
      discount: 20,
    },
    {
      id: 2,
      name: "Acer",
      price: 10000,
      rating: 4.3,
      discount: 10,
    },
    {
      id: 1,
      name: "Mac book",
      price: 17000,
      rating: 4.7,
      discount: 40,
    },
    {
      id: 4,
      name: "HP",
      price: 21000,
      rating: 4.1,
      discount: 30,
    },
    {
      id: 5,
      name: "Dell",
      price: 35000,
      rating: 4.9,
      discount: 30,
    },
  ];
  
  
  let updatedProducts = products.filter(product => product.id !== 4);
  
  console.log(updatedProducts);
  */

// let ism = "name";
// let a = "age";

// const obj = {
//   [ism]: "John",
//   [a]: 20,
// };

// console.log(obj);
// [name, age];

// for ... in \ for ... of;

// for (let a of obj) {
//   console.log(obj);
// }

// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// let result = `Assalomu alaykum,
// Qadirli mehtmon, Sizni Muhammadzoir va Marinxonni to'ylariga lutfan taklif etamiz.

// Hurmat bilan Muhammadzoir`;

// console.log(result);

// for (let item in me) {
//   result += `${item}: ${me[item]} \n`;
// }

// console.log(result);

// Abdulaziz Programmer nechta to'g'ri va noto'g'ri javob topganligini toping.

// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// const myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};

// const rightAnswers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };

// const myAnswers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };
// let counterTrue = 0;
// let counterFalse = 0;

// for (let item in rightAnswers) {
//   myAnswers[item] == rightAnswers[item] ? counterTrue++ : counterFalse++;
// }
// console.log({
//   true: counterTrue,
//   false: counterFalse,
// });

// let a = 1;
// let b = a;
// b = 8;
// a = 2;

// console.log("a:", a);
// console.log("b:", b);

// let obj = {
//   name: "John",
//   age: 20,
// };

// ... bu - spread operatori deyiladi (spread)
// let newObj = { ...obj };
// newObj.age = 30;

// let numbers = [1, 2, 3, 4, 5];

// let newNumbers = [...numbers];

// newNumbers.push(10);

//   Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// map
// let changeStudents = students
//   .map((student) => {
//     if (student.percent > 85) {
//       return { ...student, grade: 5 };
//     } else if (student.percent < 85 && student.percent > 70) {
//       return { ...student, grade: 4 };
//     } else {
//       return { ...student, grade: 3 };
//     }
//   })
//   .filter((student) => student.grade == 5)
//   .map((student) => student.name);

// for, forEach, filter, map

// function getNamesByGrade(students, grade) {
//   const filterResult = students.filter((item) => {
//     if (item.percent > 85) {
//       return item;
//     }
//   });
// }

// getNamesByGrade(students, 5);

// let numbers = [3, 10, 5, 88, 41, 90, 12, 7, 18, 54];

// 50 dan kichiklarni -> []

// for
// let newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 50) {
//     newNumbers.push(numbers[i]);
//   }
// }
// console.log(newNumbers);

//forEach
// numbers.forEach((num) => {
//   if (num < 50) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);

// filter
// const newNumbers = numbers.filter(num => num < 50);
// console.log(newNumbers);
