
import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';

export const TestButton=({buttonname})=> {
  return (
    <>
      <Button className="TestButton" variant="outline-primary">{buttonname}</Button>{' '}
     
    </>
  );
}

  