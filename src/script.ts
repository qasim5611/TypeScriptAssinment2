abstract class Vehicle {

  private _make: string;
  private _model: number;
  private _year: number;
  private _isrented: boolean  //true = gari rent per available hy
  _rate: number;

  constructor(mk: string, md: number, yr: number, ren: boolean, rt: number ){

    this._make = mk;
    this._model = md;
    this._year = yr;
    this._isrented = ren;
    this._rate = rt;
  }


get make() {
 return this._make
}

get model() {
  return this._model
 }

 get year() {
  return this._year
 }

 get rented() {
  return this._isrented
 }


 set rented(rnt: boolean){
  if(!rnt){
    throw new Error("rentend value must be filled!");
  }
  this._isrented = rnt;

 }



 abstract rentalRate(rate: number): number;



 rent = () =>{ // to check if already rented or Not?
if(!this._isrented){
  console.log("yes Available for rented");
  this._isrented = true;

}
else{
  console.log("not Available for rented");
  this._isrented = false;

}

 }
 ////////////////////////////////////////////////////////////

  returnn = () => { // if has been rented or not for you?
  if(this._isrented){
    console.log("have been rented");
    this._isrented = false;
  
  }
  else{
     console.log("have not been rented");
    this._isrented = true;
  }
  
 }
 

}


class Car extends Vehicle {
  constructor(
    _make: string,
    _model: number,
    _year: number,
    _isrented: boolean,
    _rate: number,
    private _ownername: string,
    private _drivername: string

  ) {
    super(_make, _model, _year, _isrented, _rate);
  }

  rentalRate(rate: number){
     return this._rate = rate;
  };
}

class Truck extends Vehicle {
  constructor(
    _make: string,
    _model: number,
    _year: number,
    _isrented: boolean,
    _rate: number,
    private _ownername: string,
    private _drivername: string

  ) {
    super(_make, _model, _year, _isrented, _rate);
  }

   rentalRate(rate: number){
     return this._rate = rate;
  };
}


class Motorcycle extends Vehicle {
  constructor(
    _make: string,
    _model: number,
    _year: number,
    _isrented: boolean,
    _rate: number,
    private _horsepower: string,
    private _isregisterd: boolean

  ) {
    super(_make, _model, _year, _isrented, _rate);
  }

    rentalRate(rate: number){
     return this._rate = rate;
  };
}


let car = new Car("Japan", 1962 , 2022 , true, 200, "qasim", "malik");
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
