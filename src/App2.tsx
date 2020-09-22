import React, { FC } from 'react';
import CharacterList, { Character } from './CharacterList';
import './App.css';

const App: FC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: 'Test 1',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: 'Test 2',
      grade: 2,
      height: 172,
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>CharacterList</h1>
      </header>
      <CharacterList school="school1" characters={characters} />
    </div>
  );
};

export default App;
