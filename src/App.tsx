import React, { FC } from 'react';

import Header from './components/Header';
import Button from './components/Button';

import './App.scss';

const App: FC = () => (
  <div className="app">
    <div className="app-content">
      <Header />
      <Button label="Siguiente" variant="primary" icon="chevron-right" />
      <br />
      <Button label="Siguiente" variant="secondary" icon="chevron-right" />
      <br />
      <Button label="Siguiente" variant="tertiary" />
    </div>
  </div>
);

export default App;
