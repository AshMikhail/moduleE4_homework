//Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

function createEmptyObject(){
    let newObg = Object.create(null)
        console.log(newObg)
}

createEmptyObject()