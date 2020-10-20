import React from 'react';

import GlobalStyles from './styles/GlobalStyles'
import 'leaflet/dist/leaflet.css'

import Routes from  './routes'

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
     </>
  );
}

export default App;