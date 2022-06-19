import React, { useState } from 'react';
import { FC } from 'react';


interface LoginProps {
  title: string,
  handleClick: (email: string, password: string) => void
}

const FormLogin: FC<LoginProps> = ({ title, handleClick }) => {

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  return (
    <div>
      <div>FormLogin</div>
      <input type='email'
        value={email}
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)} />

      <input type='password'
        value={password}
        placeholder='password'
        onChange={(e) => setPass(e.target.value)} />

      <button onClick={() => handleClick(email, password)}>
        {title}
      </button>
    </div>
  )
}

export default FormLogin