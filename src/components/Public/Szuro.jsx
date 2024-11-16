import Form from 'react-bootstrap/Form';
import './Termek.css';

function Szuro() {
    return (
        <Form className='szuro'>
            <Form.Control type="text" placeholder="Search product by name" />
        </Form>
    );
  } 

export default Szuro;  