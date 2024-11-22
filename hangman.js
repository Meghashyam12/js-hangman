function getTheme(themeIndex) {
  switch (themeIndex) {
    case 0: return 'art';
    case 1: return 'music';
    case 2: return 'games';
    case 3: return 'electronics';
    case 4: return 'computers';
    case 5: return 'programming';
    case 6: return 'sports';
    case 7: return 'entertainment';
    case 8: return 'science';
    case 9: return 'space';
  }
}

function getArtWord(wordIndex) {
  switch (wordIndex) {
    case 0: return 'painting';
    case 1: return 'drawing';
    case 2: return 'artist';
    case 3: return 'colour';
    case 4: return 'brush';
    case 5: return 'texture';
    case 6: return 'canvas';
    case 7: return 'aesthetic';
    case 8: return 'design';
    case 9: return 'craft';
  }
}

function getMusicWord(wordIndex) {
  switch (wordIndex) {
    case 0: return 'beat';
    case 1: return 'lyrics';
    case 2: return 'song';
    case 3: return 'rhythm';
    case 4: return 'pitch';
    case 5: return 'tempo';
    case 6: return 'scale';
    case 7: return 'instrument';
    case 8: return 'sound';
    case 9: return 'vibration';
  }
}

function getGamesWord(wordIndex) {
  switch (wordIndex) {
    case 0: return 'graphics';
    case 1: return 'story';
    case 2: return 'multiplayer';
    case 3: return 'action';
    case 4: return 'ball';
    case 5: return 'teammate';
    case 6: return 'board';
    case 7: return 'console';
    case 8: return 'competitor';
    case 9: return 'opponent';
  }
}

function getElectronicsWord(wordIndex) {
  switch (wordIndex) {
    case 0: return 'digital';
    case 1: return 'processor';
    case 2: return 'appliances';
    case 3: return 'motherboard';
    case 4: return 'transistor';
    case 5: return 'circuit';
    case 6: return 'diode';
    case 7: return 'semiconductor';
    case 8: return 'charge';
    case 9: return 'device';
  }
}

function getComputersWord(wordIndex) {
  switch (wordIndex) {
    case 0: return 'cache';
    case 1: return 'software';
    case 2: return 'hardware';
    case 3: return 'application';
    case 4: return 'virus';
    case 5: return 'antivirus';
    case 6: return 'data';
    case 7: return 'laptop';
    case 8: return 'bandwidth';
    case 9: return 'internet';
  }
}

function getProgrammingWord(wordIndex) {
  switch (wordIndex) {
    case 0: return 'algorithm';
    case 1: return 'bug';
    case 2: return 'error';
    case 3: return 'binary';
    case 4: return 'language';
    case 5: return 'argument';
    case 6: return 'datatype';
    case 7: return 'compiler';
    case 8: return 'interpreter';
    case 9: return 'function';
  }
}

function getSportsWord(wordIndex) {
  switch (wordIndex) {
    case 0: return 'tournament';
    case 1: return 'rival';
    case 2: return 'competition';
    case 3: return 'injury';
    case 4: return 'winner';
    case 5: return 'defense';
    case 6: return 'champion';
    case 7: return 'loser';
    case 8: return 'coach';
    case 9: return 'referee';
  }
}

function getEntertainmentWord(wordIndex) {
  switch (wordIndex) {
    case 0: return 'music';
    case 1: return 'movie';
    case 2: return 'game';
    case 3: return 'show';
    case 4: return 'performance';
    case 5: return 'dance';
    case 6: return 'horror';
    case 7: return 'sport';
    case 8: return 'art';
    case 9: return 'comedy';
  }
}

function getScienceWord(wordIndex) {
  switch (wordIndex) {
    case 0: return 'method';
    case 1: return 'process';
    case 2: return 'physics';
    case 3: return 'chemistry';
    case 4: return 'biology';
    case 5: return 'mathematics';
    case 6: return 'space';
    case 7: return 'astronomy';
    case 8: return 'scientist';
    case 9: return 'invention';
  }
}

function getSpaceWord(wordIndex) {
  switch (wordIndex) {
    case 0: return 'star';
    case 1: return 'planet';
    case 2: return 'void';
    case 3: return 'blackhole';
    case 4: return 'cluster';
    case 5: return 'galaxy';
    case 6: return 'alien';
    case 7: return 'rocket';
    case 8: return 'spaceship';
    case 9: return 'comet';
  }
}

function getWord(themeIndex, wordIndex) {
  switch (themeIndex) {
    case 0: return getArtWord(wordIndex);
    case 1: return getMusicWord(wordIndex);
    case 2: return getGamesWord(wordIndex);
    case 3: return getElectronicsWord(wordIndex);
    case 4: return getComputersWord(wordIndex);
    case 5: return getProgrammingWord(wordIndex);
    case 6: return getSportsWord(wordIndex);
    case 7: return getEntertainmentWord(wordIndex);
    case 8: return getScienceWord(wordIndex);
    case 9: return getSpaceWord(wordIndex);
  }
}

function visualiseHangman(chancesLeft) {
  let diagram = '';

  if (chancesLeft === 6) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '\n' + '\n' + '\n' + '\n' + '\n';
    return diagram;
  }

  if (chancesLeft === 5) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '    ( )' + '\n';
    diagram += '\n' + '\n' + '\n';
    return diagram;
  }

  if (chancesLeft === 4) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '    ( )' + '\n';
    diagram += '    / \\' + '\n';
    diagram += '\n' + '\n';
    return diagram;
  }

  if (chancesLeft === 3) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '    ( )' + '\n';
    diagram += '    /|\\' + '\n';
    diagram += '     |' + '\n';
    diagram += '\n';
    return diagram;
  }

  if (chancesLeft === 2) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '    ( )' + '\n';
    diagram += '    /|\\' + '\n';
    diagram += '     |' + '\n';
    diagram += '      \\' + '\n';
    return diagram;
  }

  if (chancesLeft === 1) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '    ( )' + '\n';
    diagram += '    /|\\' + '\n';
    diagram += '     |' + '\n';
    diagram += '    / \\' + '\n';
    return diagram;
  }

  return diagram;
}

function getCharToReplace(index, guess, string, word) {
  return word[index] === guess ? word[index] : string[index];
}

function replaceIndices(string, guess, word) {
  let replacedString = '';

  for (let index = 0; index < string.length; index++) {
    replacedString += getCharToReplace(index, guess, string, word);
  }

  return replacedString;
}

function hideWord(word) {
  let hiddenWord = '';

  for (let index = 0; index < word.length; index++) {
    hiddenWord += '_';
  }

  return hiddenWord;
}

function isExistingChar(guess, hiddenWord) {
  for (let index = 0; index < hiddenWord.length; index++) {
    if (hiddenWord[index] === guess) {
      return true;
    }
  }

  return false;
}

function _play(chancesLeft, word, theme, hiddenWord) {
  console.log('It is a ' + word.length + ' letter word and it\'s related to "' + theme + '".');
  console.log(visualiseHangman(chancesLeft + 1));
  console.log(hiddenWord);

  if (hiddenWord === word) {
    return 'Congratulations 🎉 You have guessed it right, YOU SURVIVED!!';
  }

  if (chancesLeft === 0) {
    return 'The word was "' + word + '" Bad Luck 😞 YOU DIED 💀 Game Ended 🏳️';
  }

  console.log('You have ' + chancesLeft + ' chances to guess.');
  const guess = prompt('Guess a character:');
  const newHiddenWord = replaceIndices(hiddenWord, guess, word);
  const sameGuess = isExistingChar(guess, hiddenWord);
  const rightGuessMessage = sameGuess ? '\n ‼️ You have already entered that character\n' : '\n ✅ Good job 👍 Keep Going\n';

  if (hiddenWord !== newHiddenWord || sameGuess) {
    console.clear();
    console.log(rightGuessMessage);

    return _play(chancesLeft, word, theme, newHiddenWord);
  }

  console.clear();
  console.log('\n ❌ Oops!!\n');

  return _play(chancesLeft - 1, word, theme, hiddenWord);
}

function getRandomIndex() {
  return Math.floor(Math.random() * 10);
}

function play() {
  const wordIndex = getRandomIndex();
  const themeIndex = getRandomIndex();
  const theme = getTheme(themeIndex);
  const word = getWord(themeIndex, wordIndex);
  const chances = 5;

  prompt("Press ENTER to start.");
  console.clear();
  console.log('The game has started, start guessing, good luck.');
  console.log(_play(chances, word, theme, hideWord(word)));

  if (confirm("Do you want to play again?")) {
    console.clear();
    if (confirm('Do you want to see the rules??')) {
      printRules();
    }

    play();
  }

  console.clear();
  console.log("Thanks for playing 🤗");
}

function printRules() {
  console.log('_________RULES_________');
  console.log('👉You have to guess the word character by character in any order, the word length will be given.');
  console.log('👉The word will be given in lowercase only.');
  console.log('👉For every wrong guess, you will lose one chance, that means you\'ll lose one body part.');
  console.log('👉For every right guess, all the positions of the character that you\'ve guessed will be revealed.');
  console.log('👉That means you don\'t have to guess the same character again and you\'ll not lose a chance.');
  console.log('👉You\'ll survive if you guess all the characters(word).');
  console.log('👉You\'ll die if you don\'t guess it within the given chances.\n');
}

printRules();
play();
