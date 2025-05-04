import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey/Survey';
import Header from './components/Header';
// On ajoute nos composants
import ClientForm from './components/ClientForm'
import FreelanceForm from './components/FreelanceForm'

import Error from './components/Error';
import Results from './pages/Results';
import Freelances from './pages/Freelances';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error/>} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />

        { /* Nous imbriquons nos composants dans survey */}
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
