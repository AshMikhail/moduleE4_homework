// Задание 4.
// Реализовать следующее консольное приложение подобно примеру,
// который разбирался в видео. Реализуйте его на прототипах.
//
// Определить иерархию электроприборов. Включить некоторые в розетку.
// Посчитать потребляемую мощность.
//
// Таких приборов должно быть, как минимум, два (например, настольная
// лампа и компьютер). Выбрав прибор, подумайте, какими свойствами
// он обладает.

function Device(){
    this.powerGrid = function (){
        return this.PowerGridConnect;
    };
}

function Laotop(name, brand, color, material, power){
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.material = material;
    this.power = power;
    this.PowerGridConnect = true
}
Laotop.prototype = new Device();
const laptop = new Laotop('laptop', 'MSI', 'Black', 'titan', '45');
console.log(laptop)

function DeskLamp(name, color, material, power){
    this.name = name;
    this.color = color;
    this.material = material;
    this.power = power;
    this.PowerGridConnect = true
}
DeskLamp.prototype = new Device();
const deskLamp = new DeskLamp('DeskLamp', 'Blue', 'plastic', '6');
console.log(deskLamp)

function sumDevicesPower(...devices) {
    let sumPower = 0;

    devices.forEach(device => {
        if (device.powerGrid()) {
            sumPower += +device.power;
        }
    });

    return sumPower;
}
const sumPower = sumDevicesPower(laptop, deskLamp);
console.log(`Power of all devices is ${sumPower} w`);