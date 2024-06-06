import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"
import {Container, Row, Col, Card  } from "react-bootstrap"
import Ourc from "../Gambar/Ourc.png"
import ztaa from "../Gambar/ztaa.png"
import Bintang from "../Gambar/Bintang.png"
import Izza from "../Gambar/Izza.png"
import Sasa from "../Gambar/Sasa.png"
import Rian from "../Gambar/Rian.png"
import Valentino from "../Gambar/Valentino.png"
import "../Style/Ourcampaign.css"

const Ourcampaign = () => {
return (
<>
<NavigationBar/>
<div className="mt-4">
    <Container>
    <Row>
        <Col className="text-center">
        <h1>
            Story Of Us
        </h1>
        <p>
        Smart solutions for a more productive and environmentally friendly life.
        </p>
        </Col>
    </Row>
        <Row className="mt-3">
            <Col>
            <img src={Ourc} fluid />;
            </Col>
        </Row>
    </Container>
</div>
<div className="Content1">
<Container >
<Row className="justify-content-center mt-4">
        <Col md={5} className="mb-4">
          <Card style={{ width: '100%', height: '100%' }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <h2>Our Vission</h2>
                <p>
                To be the leading platform that supports productivity and sustainability by helping 
                individuals effectively utilize their time through gardening,
                providing the tools and information needed to achieve success in planting and nurturing plants.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5} className="mb-4">
          <Card style={{ width: '100%', height: '100%' }}>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <h2>Our Mission</h2>
                <p>
                Offer a platform that allows users to monitor the progress of their plants in real-time, enabling them to care for their plants more efficiently and effectively Provide comprehensive guides for various types of plants and pests, helping users overcome gardening challenges and improve their yields. Assist users in making better use of their time through organized and planned gardening activities, so they can enjoy the fruits of their labor to the fullest.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
</Container>
</div>
<div className="py-4">
<Container>
    <Row>
        <Col>
        <p className="text-center">
        At GoodPlants, we believe that planting is not just a hobby, but also a way to boost productivity. We are inspired by scientific research that shows that being around plants can improve focus, concentration, and creativity.<br/> Our website is founded on the mission of helping people integrate plants into their daily lives. We provide a variety of resources, such as planting guides, plant care tips, and planting and care schedules. <br/>GoodPlants is a friendly and supportive community for plant lovers and those who want to start planting. We are always happy to share tips and tricks, answer questions, and provide support.
        </p>
        </Col>
    </Row>
</Container>
</div>
<div className="Content3">
    <Container>
        <Row>
            <Col className="text-center">
            <h2>
                Say Hello To Our Teams
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            </Col>
        </Row>
        <div>
  <Row className="justify-content-center">
    <Col xs={6} md={4} className="text-center">
      <img src={Valentino} className="rounded-circle" />
      <h4>Denny Chaidar 
          <br/>Valentino</h4>
      <p>
        Projeck Manager
      </p>
    </Col>
    <Col xs={6} md={4} className="text-center">
      <img src={Rian} className="rounded-circle" />
      <h4>Rian Agus <br/>Trianto</h4>
      <p>
        UI/UX Designer
      </p>
    </Col>
    <Col xs={6} md={4} className="text-center">
      <img src={Izza} className="rounded-circle" />
      <h4>Annisa<br/>Izaatul Latifa</h4>
      <p>
        UI/UX Designer
      </p>
    </Col>
  </Row>
  <Row className="justify-content-center mt-4"> {/* Added mt-4 for top margin */}
    <Col xs={6} md={4} className="text-center">
      <img src={ztaa} className="rounded-circle" />
      <h4>Afta <br/>Herminanta Jati
          </h4>
      <p>
        Coder Developer
      </p>
    </Col>
    <Col xs={6} md={4} className="text-center">
      <img src={Sasa} className="rounded-circle" />
      <h4>
        Clarissa Nazhwa <br/>Rahmadhina
      </h4>
      <p>
        Coder Developer
      </p>
    </Col>
    <Col xs={6} md={4} className="text-center">
      <img src={Bintang} className="rounded-circle" />
      <h4>Bintang Fajar <br/>Pratama</h4>
      <p>
        Coder Developer
      </p>
    </Col>
  </Row>
</div>
    </Container>
</div>

<Footer/>
</>

)

}

export default Ourcampaign