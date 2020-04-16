//  In JS any function can return a new object e.g Constructor function or class function.
// A factory function is a function that can return a new object but it's either a constructor or class

// factory
const proto = {
    drive () {
      console.log('Vroom!');
    }
  };
  
  const factoryCar = () => Object.create(proto);
  
  const car3 = factoryCar();
  console.log(car3.drive());
/* 
Benefits of factory functions
1. no  "new" keyword
2. standard "this" behaviour
3. no instanceof

*/




  // constructor
function ConstructorCar () {}

ConstructorCar.prototype.drive = function () {
  console.log('Vroom!');
};

const car2 = new ConstructorCar();
console.log(car2.drive());
// constructor forces use of the "new" keyword
// the "new" keyword instantiate an instance of OBJECT and binds "this" to it.

// class
class ClassCar {
    drive () {
      console.log('Vroom!');
    }
  }
  
  const car1 = new ClassCar();
  console.log(car1.drive());
