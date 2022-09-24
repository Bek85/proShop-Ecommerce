import { Alert } from 'react-bootstrap';

export default function Message({ variant = 'info', children }) {
  return <Alert variant={variant}>{children}</Alert>;
}
