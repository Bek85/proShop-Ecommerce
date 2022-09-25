import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  useParams,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { addToCart } from 'pro-shop/redux/actions/cartActions';
import Message from 'pro-shop/components/Message';

export default function CartScreen() {
  let { id } = useParams();
  let [searchParams] = useSearchParams();
  const qty = Number(searchParams.get('qty'));
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  return <div>cart</div>;
}
