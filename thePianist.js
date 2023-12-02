function organizePianoPieces(input) {
    let numberOfPieces = Number(input[0]);
    let pieces = {};
  
    for (let i = 1; i <= numberOfPieces; i++) {
      let [piece, composer, key] = input[i].split('|');
      pieces[piece] = { composer, key };
    }
  
    for (let i = numberOfPieces + 1; i < input.length; i++) {
      let [command, piece, arg2, arg3] = input[i].split('|');
      let composer, key;
  
      switch (command) {
        case 'Add':
          if (!pieces.hasOwnProperty(piece)) {
            pieces[piece] = { composer: arg2, key: arg3 };
            console.log(`${piece} by ${arg2} in ${arg3} added to the collection!`);
          } else {
            console.log(`${piece} is already in the collection!`);
          }
          break;
  
        case 'Remove':
          if (pieces.hasOwnProperty(piece)) {
            delete pieces[piece];
            console.log(`Successfully removed ${piece}!`);
          } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
          }
          break;
  
        case 'ChangeKey':
          if (pieces.hasOwnProperty(piece)) {
            key = arg2;
            pieces[piece].key = key;
            console.log(`Changed the key of ${piece} to ${key}!`);
          } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
          }
          break;
  
        case 'Stop':
          for (let piece in pieces) {
            console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
          }
          break;
      }
    }
  }
  
  // Example usage:
  let input = [
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
  ];
  
  organizePianoPieces(input);