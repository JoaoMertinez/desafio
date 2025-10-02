import React from 'react';
import Navbar from './components/navbar.jsx';
import ContatoPage from './pages/contatosPage.jsx';
import './app.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <ContatoPage />
      </main>
    </div>
  );
};

export default App;