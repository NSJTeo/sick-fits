import styled from 'styled-components';
import CartStyles from './styles/CartStyles';
import useUser from './User';
import totalPrice from '../lib/totalPrice';
import Supreme from './styles/Supreme';
import { formatMoney } from '../lib/formatMoney';

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }) => {
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <em>
          {cartItem.quantity} &times; {formatMoney(product.price)}
        </em>
      </div>
    </CartItemStyles>
  );
};

export default function Cart() {
  const user = useUser();
  console.log(user);
  if (!user) return null;
  return (
    <CartStyles open>
      <header>
        <Supreme>{`${user.name.toUpperCase()}'S CART`}</Supreme>
      </header>
      <ul>
        {user.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(totalPrice(user.cart))}</p>
      </footer>
    </CartStyles>
  );
}
