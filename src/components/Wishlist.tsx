import styled from 'styled-components';
import TableRowComponent from './TableRowComponent.tsx';
import productImage from '/productImage.png';
import ImageSrc from '/Image.png';
import secondImage from '/secondImage.png';
import InstagramIcon from '/instagram.png';
import PinterestIcon from '/pinterest.png';
import twitter from '/Vector.png';
import facebook from '/facebook.png';
const Text = styled.p`
  text-align: center;
  font-weight: 600;
  color: #1a1a1a;
  font-family: 'Poppins', sans-serif;
`;
const Table = styled.table`
  /* background-color: red; */
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Td = styled.td`
  font-weight: 500;
  font-size: 14px;
  color: #808080;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
`;
const TableHead = styled.thead`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid gray;
  border-radius: 8px;
`;
const TableRow = styled.tr`
  display: grid;
  grid-auto-columns: calc(100% / 3);
  grid-template-columns: 4fr 2fr 3fr;
  width: 964px;
  padding: 10px 20px;
`;
const StyledImage = styled.img`
  background-color: green;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 50%;
  color: white;
`;
export default function Wishlist() {
  return (
    <div>
      <Text>My Wishlist</Text>

      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <Td>Product</Td>
              <Td>price</Td>
              <Td>Stock Status</Td>
            </TableRow>
          </TableHead>
          <tbody>
            <TableRowComponent
              image={productImage}
              product={'Green Capsicum'}
              price={'14.99'}
              isStock={true}
            />
            <TableRowComponent
              image={ImageSrc}
              product={'Chinese Cabbage'}
              price={'45.001'}
              isStock={true}
            />
            <TableRowComponent
              image={secondImage}
              product={'Fresh Sujapuri Mango'}
              price={'009.001'}
              isStock={false}
            />
          </tbody>
          <tfoot>
            <tr>
              <td
                style={{
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                }}
              >
                <span>Share: </span>
                <StyledImage src={facebook} alt="facebookIcon" />
                <img src={twitter} alt="twitterIcon" />
                <img src={InstagramIcon} alt="instagramIcon" />
                <img src={PinterestIcon} alt="pinterestIcon" />
              </td>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </div>
  );
}
