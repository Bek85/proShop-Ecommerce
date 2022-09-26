import { Spinner } from 'react-bootstrap';

export default function Loader({ width = 100, height = 100 }) {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: width,
        height: height,
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}
