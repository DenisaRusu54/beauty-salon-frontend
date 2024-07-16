import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import HairPage from './components/HairPage'; 
import MakeupPage from './components/MakeupPage'; 
import NailsPage from './components/NailsPage'; 
import AboutusPage from './components/AboutusPage';
import ContactPage from './components/ContactPage';
import WhatsnewPage from './components/WhatsnewPage';
import MainLayout from './components/MainLayout';
import { ThemeProvider, createTheme} from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF69B4',  
    },
    secondary: {
      main: '#000000',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HairPage" element={<HairPage />} />
          <Route path="/MakeupPage" element={<MakeupPage />} />
          <Route path="/NailsPage" element={<NailsPage />} />
          <Route path="/AboutusPage" element={<AboutusPage/>}/>
          <Route path="/ContactPage" element={<ContactPage/>}/>
          <Route path="/WhatsnewPage" element={<WhatsnewPage/>}/>
        </Routes>
        </MainLayout>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App