import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="bg-gray-100 p-4">
          <h1 className="text-2xl font-bold text-blue-500">¡Hola, mundo!</h1>
          <p className="text-gray-700">¡Bienvenido a mi aplicación React con TypeScript y Tailwind CSS!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
