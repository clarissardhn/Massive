import NavigationBar from "../Components/NavigationBar"
import ControlledCarousel from "../Components/Content"
import { Container, Row, Col, Card, Button} from "react-bootstrap"
import Footer from "../Components/Footer"
import Knowledge from "../Gambar/Knowledge.png"
import OK from "../Gambar/OK.png"
import Patience from "../Gambar/Patience.png"
import Satisfacion from "../Gambar/Satisfaction.png"
import Content2 from "../Gambar/Content2.png"
import Content3 from "../Gambar/Content3.png"
import Content1 from "../Gambar/Content1.png"
import "../Style/Homepage.css"

const Homepage = () => {
    return (
<>
<NavigationBar />
<ControlledCarousel />

<div className="Content1">
<Container>
      <Row className="justify-content-center mt-5 Row1">
        <Col className="text-center mt-4">
          <h2>Our Campaign</h2>
          <p>Smart solutions for a more productive and environmentally friendly life</p>
        </Col>
      </Row>
    </Container>
<Container>
<Row className="justify-content-center mt-3">
<Col md={5} className="mb-4">
      <Card style={{ width: '100%', height: '100%' }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text className="text-card">
          Let's change habits, create a green and productive space at home with Good Plants! 
          <br/> <br/>Discover easy-to-follow guides for beginner gardeners. Reap the double benefits: fresh air, healthy food, and a peaceful mind.
          Join Indonesia's largest gardening community, find inspiration, share experiences, and connect with fellow plant enthusiasts
          </Card.Text>
          <div className="text-center mt-auto">
            <Button variant="Black" style={{ width: '150px', backgroundColor: '#C9E84E' }} className="mt-5">More About Us</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
        <Col md={5} className="mb-4">
          <Card style={{ width: '100%', height: '100%', borderRadius: '15px', overflow: 'hidden' }}>
            <Card.Img src={Content1} alt="Content1" style={{ height: '100%', objectFit: 'cover', borderRadius: '15px' }} />
          </Card>
        </Col>
      </Row>
</Container>
</div>
<div className="Content2">
<Container>
<Row className="justify-content-center mt-5 Row2">
    <Col className="text-center mt-4">
      <h2>What We Do</h2>
      <p>You can start with a guide and some vegetable plant suggestions</p>
    </Col>
  </Row>
</Container>
<Container>
<Row className="justify-content-center mt-4">
        <Col md={4} className="mb-4 d-flex justify-content-center">
          <Card className="h-100" style={{ width: '30rem', height: '30rem' }}>
            <Card.Img variant="top" src={Content2} />
            <Card.Body>
              <Card.Title className="text-center">Plants</Card.Title>
              <div className="text1 text-center"> 
                <Card.Text>
                Home gardening guide to produce healthy vegetables without pesticides.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 d-flex justify-content-center">
          <Card className="h-100" style={{ width: '30rem', height: '30rem' }}>
            <Card.Img variant="top" src={Content3} />
            <Card.Body>
              <Card.Title className="text-center">Guides</Card.Title>
              <div className="text2 text-center">   
                <Card.Text>
                Various recommendations and types of plants that are good to plant in home gardens.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
</Container>
</div>
<div className="Content3">
<Container>
<Row>
    <Col className="text-center mt-4">
    <h2>Let's</h2>
    <h2>Start Now</h2>
    <p>Make your life productive and healthy <br/>with Good Plants.</p>
    <Button className="Button" style={{ width: '200px', 
        backgroundColor: '#C9E84E', 
        borderColor: '#C9E84E',
        color: '#000' }}>Start Activity</Button>{' '}
    </Col>
</Row>
<Row className="mt-5 justify-content-center">
        <Col xs={12} md={3} className="d-flex flex-column align-items-center">
          <img src={OK} alt="Content1" className="img-fluid" />
          <p>Easy To Use</p>
        </Col>
        <Col xs={12} md={3} className="d-flex flex-column align-items-center">
          <img src={Satisfacion} alt="Content2" className="img-fluid" />
          <p>User Friendy 
            Design
          </p>
        </Col>
        <Col xs={12} md={3} className="d-flex flex-column align-items-center">
          <img src={Knowledge} alt="Content3" className="img-fluid" />
          <p>Informative</p>
        </Col>
        <Col xs={12} md={3} className="d-flex flex-column align-items-center">
          <img src={Patience} alt="Content4" className="img-fluid" />
          <p>Up to Date Content</p>
        </Col>
      </Row>
</Container>
</div>
<Footer/>
</>
    )
}

export default Homepage
