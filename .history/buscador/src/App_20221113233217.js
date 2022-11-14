import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css'

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

        <main className='main'>
          <h2>CEP: 89340-000</h2>

          <span>Rua: Alois Tyszka</span>
          <span>Complemento: algum complemento</span>
          <span>Vila Rosa</span>
          <span>Itaiópolis - SC</span>

        </main>

      </div>

    </div>
  );
}

export default App;
