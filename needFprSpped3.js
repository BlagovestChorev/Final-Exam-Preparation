function carManager(input) {
  let n = Number(input[0]);
  let cars = {};

  for (let i = 1; i <= n; i++) {
    let [car, mileage, fuel] = input[i].split('|');
    mileage = Number(mileage);
    fuel = Number(fuel);
    cars[car] = { mileage, fuel };
  }

  for (let i = n + 1; i < input.length; i++) {
    if (input[i] === 'Stop') {
      break;
    }

    let [command, car, arg2, arg3] = input[i].split(' : ');

    switch (command) {
      case 'Drive':
        let distance = Number(arg2);
        let requiredFuel = Number(arg3);

        if (cars[car].fuel < requiredFuel) {
          console.log(`Not enough fuel to make that ride`);
        } else {
          cars[car].mileage += distance;
          cars[car].fuel -= requiredFuel;
          console.log(`${car} driven for ${distance} kilometers. ${requiredFuel} liters of fuel consumed.`);

          if (cars[car].mileage >= 100000) {
            console.log(`Time to sell the ${car}!`);
            delete cars[car];
          }
        }
        break;

      case 'Refuel':
        let refuelAmount = Math.min(Number(arg2), 75 - cars[car].fuel);
        cars[car].fuel += refuelAmount;
        console.log(`${car} refueled with ${refuelAmount} liters`);
        break;

      case 'Revert':
        let kilometersToRevert = Number(arg2);
        let revertedAmount = Math.min(cars[car].mileage - 10000, kilometersToRevert);

        if (revertedAmount > 0) {
          cars[car].mileage -= revertedAmount;
          console.log(`${car} mileage decreased by ${revertedAmount} kilometers`);
        }
        break;
    }
  }

  for (let car in cars) {
    console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
  }
}

// Пример за използване:
let input = [
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop'
];

carManager(input);