import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <header>
        <h1 onClick={() => navigate('contacts')}> Contact App</h1>
    </header>
    
  )
}
