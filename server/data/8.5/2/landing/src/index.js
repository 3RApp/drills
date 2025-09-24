import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider as StoreProvider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LandingPage, ScrollToSection} from "./pages";
import {Layout} from "./layout";
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>
);
