import React from 'react';
import { FiSearch } from 'react-icons/fi';

function App() {
  return (
    <div className="Container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite um CEP"
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>

      </div>

    </div>
  );
}

export default App;
