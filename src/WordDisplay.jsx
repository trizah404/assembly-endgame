import React from 'react';

function WordDisplay({ word, guessedLetters }) {
  return (
    <h2>
      {word.split('').map((letter, i) =>
        guessedLetters.includes(letter) ? letter : '_'
      ).join(' ')}
    </h2>
  );
}

export default WordDisplay;