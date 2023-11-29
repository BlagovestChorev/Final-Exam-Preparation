function foodCalculator(input) {
    let foodPattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;
    let totalCalories = 0;
    let foodItems = [];

    let match = foodPattern.exec(input);

    while (match) {
        let itemName = match[2];
        let expirationDate = match[3];
        let calories = Number(match[4]);

        totalCalories += calories;

        foodItems.push(`Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${calories}`);
        
        match = foodPattern.exec(input);
    }

    let daysToLast = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${daysToLast} days!`);
    console.log(foodItems.join('\n'));
}

// Test the function with the provided input
foodCalculator('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|');