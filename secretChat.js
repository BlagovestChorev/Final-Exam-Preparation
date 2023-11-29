function secretChat(input) {
    let concealedMessage = input.shift();

    for (let line of input) {
        if (line === "Reveal") {
            console.log(`You have a new text message: ${concealedMessage}`);
            break;
        }

        let [command, arg1, arg2] = line.split(":|:");

        switch (command) {
            case "InsertSpace":
                let index = Number(arg1);
                concealedMessage = concealedMessage.substring(0, index) + " " + concealedMessage.substring(index);
                console.log(concealedMessage);
                break;
            case "Reverse":
                if (concealedMessage.includes(arg1)) {
                    concealedMessage = concealedMessage.replace(arg1, "");
                    let reversedSubstring = arg1.split('').reverse().join('');
                    concealedMessage += reversedSubstring;
                    console.log(concealedMessage);
                } else {
                    console.log("error");
                }
                break;
            case "ChangeAll":
                while (concealedMessage.includes(arg1)) {
                    concealedMessage = concealedMessage.replace(arg1, arg2);
                }
                console.log(concealedMessage);
                break;
        }
    }
}

// Тестване на функцията с предоставения вход
let input = [
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
];

secretChat(input);