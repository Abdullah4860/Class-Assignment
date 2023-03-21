
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import { TestButton } from './Components/Buttons';
import Button from 'react-bootstrap/Button';
import "./Components/Buttons/style.css"
import BodyShorthandExample from "./Components/Card/index"




function App() {
  return (
    <div className="App">
    React app demo
    <Button>Test Button</Button>
 <TestButton buttonname={"login"}/>
 <TestButton buttonname={"Sign up"}/>
<BodyShorthandExample text={"Welcome to this website"}/>
    
    
    </div>
  );
}

export default App;
