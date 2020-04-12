import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-dynamic-masculino/06/D22-0697-006/D22-0697-006_zoom1.jpg?ts=1585887656&ims=326x" alt="tenis" />
            </td>
            <td>
              <strong>Tenis legal</strong>
              <span>R$ 10,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline
                    size={20}
                    color="#7159c1"
                  />
                </button>
                <input type="number" readOnly value="00" />
                <button type="button">
                  <MdAddCircleOutline
                    size={20}
                    color="#7159c1"
                  />
                </button>
              </div>
            </td>
            <td>
              <strong>R$1000,00</strong>
            </td>
            <td>
              <button
                type="button"
              >
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>$100,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
