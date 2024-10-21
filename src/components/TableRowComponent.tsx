import styled from 'styled-components';

import Button from '../ui/Button.tsx';
const ProductName = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #1a1a1a;
  margin-left: 15px;
  min-width: fit-content;
`;
const Row = styled.tr`
  display: grid;
  grid-template-columns: 1fr 0.3fr 1fr;
  align-content: center;
  align-content: space-around;
  justify-content: end;
  align-items: center;
  justify-items: stretch;
  &:not(:last-child) {
    border-bottom: 1px solid gray;
  }
`;
const Stock = styled.span`
  background-color: #6dee6d;
  color: green;
  margin-right: 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 4px 8px;
`;
const OutStock = styled.span`
  background-color: #f68d8de7;
  color: red;
  margin-right: 32px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 4px 8px;
`;
interface TableRowComponentProps {
  image: string;
  product: string;
  price: string;
  isStock: boolean;
}

export default function TableRowComponent({
  image,
  product,
  price,
  isStock,
}: TableRowComponentProps) {
  return (
    <Row>
      <td style={{ display: 'flex', alignItems: 'center' }}>
        <img src={image} alt="product-image" />
        <ProductName>{product}</ProductName>
      </td>
      <td>
        <ProductName>{parseFloat(price)}$</ProductName>
      </td>

      <td
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          justifySelf: 'center',
        }}
      >
        {isStock ? <Stock>Instock</Stock> : <OutStock>outstock</OutStock>}
        <Button isStock={isStock}>Add to cart</Button>
        <button
          style={{
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          &times;
        </button>
      </td>
    </Row>
  );
}
