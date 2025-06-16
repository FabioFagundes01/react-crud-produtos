import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Gerenciador de Produtos</h1>
          <nav>
            <Link to="/">Listagem</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cadastrar" element={<ProductForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
