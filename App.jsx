import React from 'react';
import NavBar from './components/NavBar.jsx/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer greeting="¡Bienvenido a mi tienda!" />
    </div>
);
}

export default App;
