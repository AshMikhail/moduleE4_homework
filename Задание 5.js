//Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

class Device{
    constructor() {
        this.powerGrid = function (){
            return this.PowerGridConnect;
        }
    }
}

class Laptop extends Device{
    constructor(name, brand, color, material, power, powerGrid) {
        super(powerGrid)
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.material = material;
        this.power = power;
        this.PowerGridConnect = true
        }
}

const laptop = new Laptop('laptop', 'MSI', 'Black', 'titan', '45');
console.log(laptop)

class DeskLamp extends Device{
    constructor (name, color, material, power, powerGrid) {
        super(powerGrid);
        this.name = name;
        this.color = color;
        this.material = material;
        this.power = power;
        this.PowerGridConnect = true
    }
}


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


