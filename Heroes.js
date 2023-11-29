function heroesOfCodeAndLogicVII(input) {
    let n = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = input.shift().split(' ');
        hp = Math.min(Number(hp), 100);
        mp = Math.min(Number(mp), 200);
        heroes[name] = { hp, mp };
    }

    for (let line of input) {
        if (line === "End") {
            break;
        }

        let [command, heroName, arg1, arg2] = line.split(' - ');

        switch (command) {
            case "CastSpell":
                castSpell(heroName, arg1, arg2);
                break;
            case "TakeDamage":
                takeDamage(heroName, arg1, arg2);
                break;
            case "Recharge":
                recharge(heroName, arg1);
                break;
            case "Heal":
                heal(heroName, arg1);
                break;
        }
    }

    printAliveHeroes();

    function castSpell(heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded);

        if (heroes[heroName].mp >= mpNeeded) {
            heroes[heroName].mp -= mpNeeded;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
    }

    function takeDamage(heroName, damage, attacker) {
        damage = Number(damage);

        if (heroes[heroName].hp > damage) {
            heroes[heroName].hp -= damage;
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
        } else {
            delete heroes[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
    }

    function recharge(heroName, amount) {
        amount = Number(amount);
        let recovered = Math.min(200 - heroes[heroName].mp, amount);
        heroes[heroName].mp += recovered;
        console.log(`${heroName} recharged for ${recovered} MP!`);
    }

    function heal(heroName, amount) {
        amount = Number(amount);
        let recovered = Math.min(100 - heroes[heroName].hp, amount);
        heroes[heroName].hp += recovered;
        console.log(`${heroName} healed for ${recovered} HP!`);
    }

    function printAliveHeroes() {
        let sortedHeroes = Object.keys(heroes).sort((a, b) => heroes[b].hp - heroes[a].hp || a.localeCompare(b));

        for (let hero of sortedHeroes) {
            console.log(`${hero}\n  HP: ${heroes[hero].hp}\n  MP: ${heroes[hero].mp}`);
        }
    }
}
// Test the function with the provided input
heroesOfCodeAndLogicVII([
//     '2',
//     'Solmyr 85 120',
//     'Kyrre 99 50',
//     'Heal - Solmyr - 10',
//     'Recharge - Solmyr - 50',
//     'TakeDamage - Kyrre - 66 - Orc',
//     'CastSpell - Kyrre - 15 - ViewEarth',
//     'End'
// ]);
heroesOfCodeAndLogicVII([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);