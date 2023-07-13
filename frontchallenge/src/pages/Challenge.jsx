import React, { useState, useEffect } from 'react';
import url from 'url';
import { decryptJWT } from '../utils/decryptJWT';
import Header from '../component/Header';
import FormSSH from '../component/FormSSH';
import '../styles/reset.scss';
import '../styles/Challenge.scss';




const Challenge = () => {
  const [email, setEmail] = useState('');
  const fullUrl = window.location.href;
  const parsedUrl = url.parse(fullUrl, true);
  const token = parsedUrl.query.token;

  useEffect(() => {
    const decryptedEmail = decryptJWT(token);
    setEmail(decryptedEmail);
  }, [token]);

  console.log(email);
  console.log(token);

  return (
    <div>
      <Header/>
      <p>Adresse email : {email}</p>
      <FormSSH/>
    </div>
  );
};



export default Challenge;
