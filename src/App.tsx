import React, { FC } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Separator from './components/Separator';

import './App.scss';

const App: FC = () => (
  <div className="app">
    <div className="app-content">
      <Header />
      <br/>
      <Separator />
      <Footer />
    </div>
  </div>
);

export default App;
