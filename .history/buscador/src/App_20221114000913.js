import React from 'react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {

  const [input, setInput] = useState('')

  function search() {
    //01001000/json/

    if (input === '') {
      alert("Você precisa informar um cep primeiro")
      return;
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite um CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={search}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className='main'>

        <h2>CEP: 89340-000</h2>

        <span>Rua: Alois Tyszka</span>
        <span>Complemento: algum complemento</span>
        <span>Vila Rosa</span>
        <span>Itaiópolis - SC</span>

      </main>

    </div>
  );
}

export default App;
