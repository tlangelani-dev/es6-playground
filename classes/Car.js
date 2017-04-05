class Car {

    constructor(options) {
        this.title = options.title;
    }

    drive() {
        return 'Vroom!';
    }

}

class Toyota extends Car {

    constructor(options) {
        super(options);
        this.color = options.color;
    }

    honk() {
        return 'beep';
    }
}

const toyota = new Toyota({ color: 'red' });
console.log( toyota.honk() );