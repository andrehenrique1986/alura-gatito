import React from 'react';
import Rotas from './src/Rotas.js';
import TelaPadrao from './src/componentes/TelaPadrao';
import reactotron from 'reactotron-react-native';


import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

reactotron.configure().useReactNative().connect();
console.tron = reactotron;

const App = () => {

   console.tron.log({
    curso: "C#"
  });
  
  return <TelaPadrao><Rotas /></TelaPadrao>;
}

export default App;

