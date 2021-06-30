import React from 'react';
import Routes from "./src/routes";
import { Platform } from 'react-native';

if(Platform.OS === 'android') { // only android needs polyfill
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/pt-BR'); // load the required locale details
}

function App() {
  return (
    <Routes />
  );
}

export default App;