import React, { useReducer } from 'react';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useReducer({})

  async function search() {
    //01001000/json/

    if (input === '') {
      alert("Você precisa informar um cep primeiro")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Ops! Erro ao buscar cep")
      setInput("");
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
