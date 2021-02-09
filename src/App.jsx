import React from 'react';
import Counter from './components/Counter';
import Jotto from './components/Jotto';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <Jotto />
      </header>
    </div>
  );
}

export default App;
