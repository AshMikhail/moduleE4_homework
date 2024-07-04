//Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект
// и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

const person = {// Создаем обьект протоптип
    city: "Moscow"
}

const student = Object.create(person)// создаем обьект студент наследумый от прототипа

student.ownCity = "Piter"// добавляем собственное свойство

function printOwnKey(arg) {
    for (let key in arg) {
        if (arg.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

printOwnKey(student)

