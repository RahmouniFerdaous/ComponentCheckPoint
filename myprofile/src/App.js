import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import Menu from './Component/Menu';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="App">
      <div style={{width:'100%' , margin:'auto'}}>
      <Container className="landing-Container">
      <Menu/>
      <Row>
      <Col xs={{ order: 12 }}>
      <ProfilePhoto/>
      <section className="banner-text">
      <FullName/>
      <hr/>
      <p>GitHub | Facebook | LinkedIn</p>
      <Address/>
      </section>
      </Col> 
      </Row>
      </Container>
      </div>           
    </div>
  );
}

export default App;
