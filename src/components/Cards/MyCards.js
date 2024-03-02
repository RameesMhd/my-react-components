import Card from 'react-bootstrap/Card';
import './MyCards.scss'

const MyCards = ({src,title,description}) => {
  return (
    <Card>
      {/* <Card.Img variant="top" className='card-image' src={src} /> */}
      <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Text className='card-text'>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCards;