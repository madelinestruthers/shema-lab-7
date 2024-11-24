// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './Countries';
import Details from './Details';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page and /countries route */}
        <Route path="/" element={<Countries />} />
        <Route path="/countries" element={<Countries />}>
          {/* Nested route for individual country details */}
          <Route path=":cca2" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
