

// const name = 'Анфиса'

// let age = 83 

// console.log('Привет мир! Меня зовут ' + name + " мое имя. Мне " + age + ' let');

// age = age + 1

// const строка = "Кавычечное выражение"
// const число = 10033
// const булево = false

// for(let index=0; index<массив.length; index += 1){

// sum += (массив[index])

// }

// console.log(sum);

// const myParams = {
//     name: 'Денис',
//     age: 20
// }

// if(myParams.age >= 18){
//     console.log('Ты уже совершеннолетний!');
// } else{
//     console.log('Ди кМаме');
// }
// const массив = [14, 33, 65, 8, 111, 87, 4, 0]



// нужно вывести в консоль сумму длин всех строк
// const массивСтрок = ['j', 'q3r2222t', 'a4n', 'm1p9яячсчo', 'z8фывирпk2w', 'z8123фывирпk2wывыввыыв', 'h4j6yввввввввв']
// let sum = 0;
// for (let index=0; index<массивСтрок.length; index++) {
//     sum += массивСтрок[index].length;
// }
// console.log(sum);

const people = [
    { name: "Алексей", age: 16, pants: "джинсы", intoxicationLevel: 1 },
    { name: "Мария", age: 22, pants: "шорты", intoxicationLevel: 3 },
    { name: "Дмитрий", age: 14, pants: "юбка", intoxicationLevel: 0 },
    { name: "Елена", age: 19, pants: "джинсы", intoxicationLevel: 2 },
    { name: "Иван", age: 17, pants: "шорты", intoxicationLevel: 4 },
    { name: "Ольга", age: 21, pants: "юбка", intoxicationLevel: 1 },
    { name: "Сергей", age: 18, pants: "джинсы", intoxicationLevel: 0 },
    { name: "Анна", age: 20, pants: "шорты", intoxicationLevel: 3 },
    { name: "Татьяна", age: 18, pants: "юбка", intoxicationLevel: 2 },
    { name: "Павел", age: 16, pants: "джинсы", intoxicationLevel: 4 },
    { name: "Кристина", age: 25, pants: "джинсы", intoxicationLevel: 2 },
    { name: "Максим", age: 15, pants: "шорты", intoxicationLevel: 1 },
    { name: "Юлия", age: 23, pants: "юбка", intoxicationLevel: 3 },
    { name: "Андрей", age: 17, pants: "джинсы", intoxicationLevel: 0 },
    { name: "Виктория", age: 19, pants: "шорты", intoxicationLevel: 4 }
];
let да = 0;  
let нет = 0;  

for (let index = 0; index < people.length; index++) {
    if (people[index].age >= 18 && people[index].pants == "джинсы" && people[index].intoxicationLevel <= 2) {
        да++;  
    } else {
        нет++;  
    }
}

console.log("Прошло: " + да);
console.log("Не прошло: " + нет);

let прошел = 0;
let непрошел = 0;

for (let index = 0; index < people.length; index++) {
    const person = people[index];
    let reasons = [];
    
    
    const age = person.age >= 18;
    const pants = person.pants == "джинсы";
    const intoxication = person.intoxicationLevel <= 2;
    
    
    if (!age) {
        reasons.push(`возраст ${person.age} (<18)`);
    }
    if (!pants) {
        reasons.push(`одежда "${person.pants}" (нужны джинсы)`);
    }
    if (!intoxication) {
        reasons.push(`уровень опьянения ${person.intoxicationLevel} (>2)`);
    }
    
    if (age && pants && intoxication) {
       прошел++;
        console.log(`${person.name} - прошео`);
    } else {
        непрошел++;
        console.log(`${person.name} - не прошел (${reasons.join(", ")})`);
    }
}

