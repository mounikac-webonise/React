import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import DataTable from './DataTable';

function App() {
    const data = [
    { id: 1, name: 'John Doe', number: '123456' },
    { id: 2,name: 'Jane Smith',  number: '987654' },
    { id: 3, name: 'Alice Johnson', number: '654321' },
    { id: 4, name: 'moni', number: '8989' },
    { id: 5, name: 'james', number: '6767' },
    { id: 6, name: 'alex',  number: '4545' },
    { id: 7, name: 'pane',  number: '3789' },
    { id: 8, name: 'cyrus',  number: '1256' },
    { id: 9, name: 'survdeep',  number: '9456' },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/database" element={<DataTable data={data} />} />
      </Routes>
    </Router>
  );
  
}

export default App;

