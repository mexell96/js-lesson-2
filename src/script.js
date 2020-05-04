'use strict';
// Создали массив со студентами
let students = [
    {firstName: 'Nikita', 
    lastName: 'Nikitov', 
    age: 17, 
    grades: [2, 3, 4, 1, 2], 
    course: 4, 
    gender: 'male',  
},
    {firstName: 'Petya', 
    lastName: 'Petin', 
    age: 18, 
    grades: [4, 1, 1, 2, 3], 
    course: 1, 
    gender: 'male',
},
    {firstName: 'Sasha', 
    lastName: 'Sashin', 
    age: 20, 
    grades: [3, 5, 1, 1, 4], 
    course: 3, 
    gender: 'male',
},
    {firstName: 'Igor', 
    lastName: 'Igorev', 
    age: 28, 
    grades: [1, 1, 2, 3, 2], 
    course: 3, 
    gender: 'male',
},
    {firstName: 'Slava', 
    lastName: 'Slavin', 
    age: 19, 
    grades: [1, 5, 5, 5, 2], 
    course: 1, 
    gender: 'male',
},
    {firstName: 'Nastya', 
    lastName: 'Nastevna', 
    age: 23, 
    grades: [2, 3, 4, 2, 1], 
    course: 4, 
    gender: 'female',
},
    {firstName: 'Tanya', 
    lastName: 'Tanina', 
    age: 22, 
    grades: [1, 4, 4, 5, 5], 
    course: 3, 
    gender: 'female',
},
    {firstName: 'Lena', 
    lastName: 'Lenina', 
    age: 25, 
    grades: [5, 5, 2, 4, 4], 
    course: 3, 
    gender: 'female',
},
    {firstName: 'Julia', 
    lastName: 'Juliev', 
    age: 35, 
    grades: [4, 2, 1, 3, 1], 
    course: 3, 
    gender: 'female',
},
    {firstName: 'Oksana', 
    lastName: 'Oksanina', 
    age: 28, 
    grades: [5, 4, 4, 1, 2], 
    course: 2, 
    gender: 'female',
},
];
//console.log (students);
// Нашли среднее оценок присвоили новый параметр
for (let i = 0; i < students.length; i++) {
    let tmp = students[i].grades;
    let sum = 0;
    for (let j = 0; j < tmp.length; j++) {
        sum += tmp[j];
    };
    let avg = sum / tmp.length;
    students[i].avgGrades = avg;
}
//console.log (students);

// Отбор: от 18 до 27, мужчина
let studentSoldier = students.filter(item => item.avgGrades <3 && item.age >= 18 && item.age < 27 && item.gender === 'male');
//console.log(studentSoldier);
