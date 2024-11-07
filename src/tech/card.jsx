import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({src,name}) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;