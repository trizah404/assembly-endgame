import React, { useState } from 'react';
import WordDisplay from './WordDisplay.jsx';
import Keyboard from './Keyboard.jsx';
import LanguageList from './LanguageList.jsx';
import './styles.css';

const wordBank = ['REACT', 'PYTHON', 'JAVASCRIPT', 'HTML', 'CSS', 'RUST', 'ASSEMBLY', 'TYPESCRIPT', 'GO', 'CPLUSPLUS'];

function App() {
  const [secretWord] = useState(() => {
    const randomIndex = Math.floor(Math.random() * wordBank.length);
    return wordBank[randomIndex];
  });

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const handleGuess = (letter) => {
    setGuessedLetters(prev => [...prev, letter]);
    if (!secretWord.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
  };

  const isGameOver = wrongGuesses >= 8;
  const isWinner = secretWord.split('').every(letter => guessedLetters.includes(letter));

  return (
    <main>
      <h1>Assembly Endgame</h1>
      <p className="game-description">
        Guess the word within 8 attempts to keep the programming world safe from Assembly!
      </p>

      <div className="language-container">
        <LanguageList wrongGuesses={wrongGuesses} />
      </div>

      <WordDisplay word={secretWord} guessedLetters={guessedLetters} />

      {!isGameOver && !isWinner && (
        <div className="keyboard">
          <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} />
        </div>
      )}

      {isGameOver && (
        <h2 className="game-over">Game Over! Assembly is all that's left.</h2>
      )}

      {isWinner && (
        <h2 className="winner">You saved the languages! 🎉</h2>
      )}
    </main>
  );
}

export default App;