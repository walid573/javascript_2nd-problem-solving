const person = {
    name: "walid",
    age: 30
};

let { name, age } = person;

console.log(name); // Output: walid
console.log(age); // Output: 30



// import { calculateCircleArea } from './circleModule.js';

// const radius = 5;
// const area = calculateCircleArea(radius);
// console.log(area); // Output: Calculated area of the circle

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 5);
console.log(rectangle.calculateArea()); // Output: 50




class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person('Mohammad', 'Walid');

console.log(person1.fullName); // Output: Mohammad Walid

person1.fullName = 'Mohimen Reza';
console.log(person1.fullName); // Output: Mohimen Reza


const Circle = class {
    constructor(radius) {
        this.radius = radius;
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
};

const circle = new Circle(5);
console.log(circle.calculateCircumference()); // Output: Calculated circumference of the circle


const key = 'myKey';
const obj = {
    [key]: 'myValue'
};

console.log(obj.myKey); // Output: myValue



class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks`);
    }
}

const dog = new Dog('Buddy', 'Labrador');
dog.speak(); // Output: Buddy barks


class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('Cannot instantiate an abstract class');
        }
    }
}



class MathUtil {
    static square(num) {
        return num * num;
    }
}

console.log(MathUtil.square(5)); // Output: 25


const mySymbol = Symbol('description');
const obj1 = {
    [mySymbol]: 'This is a symbol key'
};

console.log(obj1[mySymbol]); // Output: This is a symbol key













