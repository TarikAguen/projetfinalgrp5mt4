import React, { useState } from 'react';
import axios from 'axios';

import '../styles/component/FormSSH.scss';

const FormSSH = () => {
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [username, setUsername] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(host, port , username, privateKey);

    // Envoyer la requête Axios avec les données du formulaire
    axios.post('http://localhost:3050/tt', {
      host: host,
      port: port,
      username: username,
      privateKey: privateKey
    })
      .then(response => {
        setMessage(response.data.message); // Met à jour le message dans l'état
        console.log(response.data);
        window.location.href='/challengeone';
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Host:
          <input type="text" value={host} onChange={(e) => setHost(e.target.value)} />
        </label>
        <br />
        <label>
          Port:
          <input type="text" value={port} onChange={(e) => setPort(e.target.value)} />
        </label>
        <br />
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Private Key:
          <textarea value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} />
        </label>
        <br />
        <button type="submit">Envoyer</button>
      </form>
      <p className='infoMessage'>{message && <p>{message}</p>} {/* Affiche le message s'il existe */}</p>

    </div>
  );
};

export default FormSSH;
