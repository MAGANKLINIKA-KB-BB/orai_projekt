import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ApiContext } from '../../context/ApiContext';

function Termek(props) {

    const {kosarhozAd} = useContext(ApiContext);
    return (
        <Card className='card'>
          <Card.Img className='productPics' variant="top" src={props.item.image} />
          <Card.Body>
            <Card.Title>{props.item.title}</Card.Title>
            <Card.Text className='text'>
              {props.item.description}
            </Card.Text>
            <Card.Text className='price'>Price: {props.item.price}$</Card.Text>
            <Button className='button' variant="primary" onClick={() =>{kosarhozAd(props)}}>Add to cart</Button>
          </Card.Body>
        </Card> 
      );
}

export default Termek