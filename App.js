import React from 'react';
import Rotas from './src/Rotas.js';
import TelaPadrao from './src/componentes/TelaPadrao';


import 'intl';
import 'intl/locale-data/jsonp/pt-BR';


const App = () => {
  return <TelaPadrao><Rotas /></TelaPadrao>;
}

export default App;

