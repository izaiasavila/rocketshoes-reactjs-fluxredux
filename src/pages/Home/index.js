import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-dynamic-masculino/06/D22-0697-006/D22-0697-006_zoom1.jpg?ts=1585887656&ims=326x"></img>
        <strong>Tenis muito legal</strong>
        <span>R$200</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
0
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
