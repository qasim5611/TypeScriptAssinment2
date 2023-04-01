"use strict";
class Vehicle {
    _make;
    _model;
    _year;
    _isrented; //true = gari rent per available hy
    _rate;
    constructor(mk, md, yr, ren, rt) {
        this._make = mk;
        this._model = md;
        this._year = yr;
        this._isrented = ren;
        this._rate = rt;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._isrented;
    }
    set rented(rnt) {
        if (!rnt) {
            throw new Error("rentend value must be filled!");
        }
        this._isrented = rnt;
    }
    rent = () => {
        if (!this._isrented) {
            console.log("yes Available for rented");
            this._isrented = true;
        }
        else {
            console.log("not Available for rented");
            this._isrented = false;
        }
    };
    ////////////////////////////////////////////////////////////
    returnn = () => {
        if (this._isrented) {
            console.log("have been rented");
            this._isrented = false;
        }
        else {
            console.log("have not been rented");
            this._isrented = true;
        }
    };
}
class Car extends Vehicle {
    _ownername;
    _drivername;
    constructor(_make, _model, _year, _isrented, _rate, _ownername, _drivername) {
        super(_make, _model, _year, _isrented, _rate);
        this._ownername = _ownername;
        this._drivername = _drivername;
    }
    rentalRate(rate) {
        return this._rate = rate;
    }
    ;
}
class Truck extends Vehicle {
    _ownername;
    _drivername;
    constructor(_make, _model, _year, _isrented, _rate, _ownername, _drivername) {
        super(_make, _model, _year, _isrented, _rate);
        this._ownername = _ownername;
        this._drivername = _drivername;
    }
    rentalRate(rate) {
        return this._rate = rate;
    }
    ;
}
class Motorcycle extends Vehicle {
    _horsepower;
    _isregisterd;
    constructor(_make, _model, _year, _isrented, _rate, _horsepower, _isregisterd) {
        super(_make, _model, _year, _isrented, _rate);
        this._horsepower = _horsepower;
        this._isregisterd = _isregisterd;
    }
    rentalRate(rate) {
        return this._rate = rate;
    }
    ;
}
let car = new Car("Japan", 1962, 2022, true, 200, "qasim", "malik");
console.log(car);
console.log(car.rented);
// car.rentalRate(500);
car.rent();
car.returnn();
// let motor = new Motorcycle("Japan", 1962 , 2022 , true, 200, "150cc", true);
// console.log(motor);
// console.log(motor.rented);
// motor.rentalRate(700);
// car.rent();
// car.returnn();
//# sourceMappingURL=script.js.map