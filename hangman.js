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
    case 8: return 'injury';
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
    case 3: return 'competitor';
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

const themeIndex = Math.floor(Math.random() * 10);
const wordIndex = Math.floor(Math.random() * 10);
const THEME = getTheme(themeIndex);
const WORD = getWord(themeIndex, wordIndex);

function visualiseHangman(chancesLeft) {
  let diagram = '';

  if (chancesLeft === 6) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '\n' + '\n' + '\n' + '\n' + '\n';
  }

  if (chancesLeft === 5) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '    ( )' + '\n';
    diagram += '\n' + '\n' + '\n';
  }

  if (chancesLeft === 4) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '    ( )' + '\n';
    diagram += '    / \\' + '\n';
    diagram += '\n' + '\n';
  }

  if (chancesLeft === 3) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '    ( )' + '\n';
    diagram += '    /|\\' + '\n';
    diagram += '     |' + '\n';
    diagram += '\n';
  }

  if (chancesLeft === 2) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '    ( )' + '\n';
    diagram += '    /|\\' + '\n';
    diagram += '     |' + '\n';
    diagram += '      \\' + '\n';
  }

  if (chancesLeft === 1) {
    diagram += '------' + '\n';
    diagram += '     |' + '\n';
    diagram += '    ( )' + '\n';
    diagram += '    /|\\' + '\n';
    diagram += '     |' + '\n';
    diagram += '    / \\' + '\n';
  }

  return diagram;
}

function getCharToReplace(string, currentIndex, indexToReplace, char) {
  return currentIndex === indexToReplace ? char : string[currentIndex];
}

function getMatchedIndices(string, char) {
  let matchedIndices = '';

  for (let index = 0; index < string.length; index++) {
    if (string[index] === char) {
      matchedIndices += index + ',';
    }
  }

  return matchedIndices;
}

function replaceIndex(string, indexToReplace, char) {
  let replacedStr = '';

  for (let currentIndex = 0; currentIndex < string.length; currentIndex++) {
    replacedStr += getCharToReplace(string, currentIndex, indexToReplace, char);
  }

  return replacedStr;
}

function replaceIndices(string, matchedIndices) {
  let replacedStr = string;
  let matchedIndex = '';
  let index = 0;

  while (index < matchedIndices.length) {
    if (matchedIndices[index] === ',') {
      replacedStr = replaceIndex(replacedStr, +matchedIndex, WORD[+matchedIndex]);
      matchedIndex = '';
      index++;
    }

    matchedIndex += matchedIndices[index];
    index++;
  }
  return replacedStr;
}

function verifyGuess(guess) {
  return (getMatchedIndices(WORD, guess) !== '');
}

function hideWord(word) {
  let hiddenWord = '';

  for (let index = 0; index < word.length; index++) {
    hiddenWord += '_';
  }

  return hiddenWord;
}

function _play(chancesLeft, hiddenWord) {
  console.log(visualiseHangman(chancesLeft + 1));
  console.log(hiddenWord);

  if (hiddenWord === WORD) {
    return 'Congratulations 🎉 You have guessed it right, YOU SURVIVED!!';
  }

  if (chancesLeft === 0) {
    return 'The word was "' + WORD + '" Bad Luck ☹️ YOU DIED 💀 Game Ended 🏳️';
  }

  console.log('You have ' + chancesLeft + ' chances to guess.');
  const guess = prompt('Guess a character:');

  if (verifyGuess(guess)) {
    console.log('\nGood job 👍 Keep Going\n');

    return _play(chancesLeft, replaceIndices(hiddenWord, getMatchedIndices(WORD, guess)));
  }

  console.log('\nOops!!\n');

  return _play(chancesLeft - 1, hiddenWord);
}

function play() {
  console.log('The game has started, start guessing, good luck.');
  console.log('It is a ' + WORD.length + ' letter word and it\'s related to "' + THEME + '".');
  return _play(5, hideWord(WORD));
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
console.log(play());
