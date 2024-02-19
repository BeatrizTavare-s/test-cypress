import { useState } from 'react';
import './App.css';

function App() {
  const [mensagem, setMensagem] = useState('a');

  function handleNewMensagem(mensagem: string) {
    setMensagem(mensagem);
  }

  function handleClearMensagem() {
    setMensagem('');
  }

  return (
    <>
      <h1>{mensagem}</h1>
      <input
        type="text"
        name="username"
        className="username"
        id="username"
        onChange={(e) => handleNewMensagem(e.target.value)}
      />
      <button onClick={handleClearMensagem}>Limpa</button>
    </>
  );
}

export default App;
