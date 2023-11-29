function decodeMessage(input) {
    let message = input.shift();

    input.forEach(command => {
        let [operation, arg1, arg2] = command.split('|');

        switch (operation) {
            case 'Move':
                let moveCount = Number(arg1);
                message = message.substring(moveCount) + message.substring(0, moveCount);
                break;
            case 'Insert':
                let index = Number(arg1);
                message = message.substring(0, index) + arg2 + message.substring(index);
                break;
            case 'ChangeAll':
                while (message.includes(arg1)) {
                    message = message.replace(arg1, arg2);
                }
                break;
        }
    });

    console.log(`The decrypted message is: ${message}`);
}

// Тест на функцията с предоставения вход
// decodeMessage([
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode'
// ]);
decodeMessage(['owyouh', 'Move|2', 'Move|3','Insert|3|are', 'Insert|9|?', 'Decode']);