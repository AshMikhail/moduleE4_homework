//Задание 2.
// Написать функцию, которая принимает в качестве аргументов
// строку и объект, а затем проверяет есть ли у переданного объекта
// свойство с данным именем. Функция должна возвращать true или false.

const person = {// Создаем обьект протоптип
    city: "Moscow"
}

const student = Object.create(person)// создаем обьект студент наследумый от прототипа

student.ownCity = "Piter"// добавляем собственное свойство

function availability(str, arg) {
    if (arg.hasOwnProperty(str)) {
        return true
    }else {
        return false
    }
}

console.log(availability('ownCity', student))
