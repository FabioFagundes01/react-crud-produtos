import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function ProductList() {
  const [products, setProducts] = useState([]);

  // useEffect é executado quando o componente é montado
  useEffect(() => {
    // Função para buscar os dados da API
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, []); // O array vazio [] garante que isso rode apenas uma vez

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <Link to="/cadastrar">
        <button>Cadastrar Novo Produto</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>R$ {product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;