import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from 'pro-shop/components/Message';
import Loader from 'pro-shop/components/Loader';
import { getUserDetails } from 'pro-shop/redux/actions/userLoginActions';

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      navigate('/login)');
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [userInfo, dispatch, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      // dispatch update profile
    }
  };

  return (
    <Row>
      <Col md={4}>
        <h3>User Profile</h3>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}

        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? 'password' : 'text'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type={showPassword ? 'password' : 'text'}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
            <Form.Check
              onClick={() => setShowPassword(!showPassword)}
              className="text-right"
              type="checkbox"
              label="Show password"
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            {loading ? <Loader width={15} height={15} /> : 'Update'}
          </Button>
        </Form>
      </Col>
      <Col md={8}>My Orders</Col>
    </Row>
  );
}
