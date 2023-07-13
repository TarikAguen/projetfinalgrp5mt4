import React, { useState } from 'react';
import axios from 'axios';
import '../styles/reset.scss';
import '../styles/Home.scss';
import Header from '../component/Header';



const Home = () => {
  const [message, setMessage] = useState('');
  const [inputEmail, setInputEmail] = useState('');



  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handleSubmit = () => {
    console.log(inputEmail)
    axios.post('http://localhost:3050/', { email: inputEmail })
      .then(response => {
        setMessage(response.data.message); // Met à jour le message dans l'état
        console.log(response.data);


      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="home">
      <Header />
      <div className="content">
        <input
          type="email"
          placeholder="Entrez votre adresse email"
          value={inputEmail}
          onChange={handleEmailChange}
        />
        <button onClick={handleSubmit}>Envoyer</button>
        <p className='infoMessage'>{message && <p>{message}</p>} {/* Affiche le message s'il existe */}</p>
      


      </div>
    </div>
  );
}

export default Home;
