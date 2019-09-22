import React from 'react';
import FileReader from './components/FileReader';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CSV-alidity</h1>
      </header>
      <FileReader />
    </div>
  );
}

export default App;
