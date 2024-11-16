import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Termek(props) {


    return (
        <Card className='card'>
          <Card.Img variant="top" src={props.item.image} />
          <Card.Body>
            <Card.Title>{props.item.title}</Card.Title>
            <Card.Text>
              {props.item.description}
            </Card.Text>
            <Button variant="primary" onClick={kosarhozAd}>Hozzáad</Button>
          </Card.Body>
        </Card> 
      );
}

export default Termek