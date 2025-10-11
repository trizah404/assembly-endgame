import React from 'react';

function LanguageList({ wrongGuesses }) {
  const languages = ['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'Rust', 'Go', 'TypeScript', 'C++', 'Assembly'];
  const remaining = languages.slice(0, languages.length - wrongGuesses);

  return (
    <div>
      <h3>Languages Remaining:</h3>
      {remaining.map(lang => (
        <span key={lang} className="language">{lang}</span>
      ))}
    </div>
  );
}

export default LanguageList;