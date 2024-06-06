import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import Terongungu from "../Gambar/Terongungu.png"
import Bawangmerah from "../Gambar/Bawangmerah.png"
import Tomat from "../Gambar/Tomat.png"
import Selada from "../Gambar/Selada.png"
import Wortel1 from "../Gambar/Wortel1.png"
import Tomat1 from "../Gambar/Tomat1.png"
import Cabai from "../Gambar/Cabai.png"
import "../Style/Myplants.css"


const Myplants = () => {
  return (
<>
<NavigationBar/>
<div className="Content1">
<Container>
   <Row> 
      <Col className="text-center mt-4">
      <h1>
      The Most Popular Plants
      </h1>
      <p>
       There are some of the popular plants selected by our community
      </p>
      </Col>
   </Row>
<Row>
<Row className="text-center mt-4">
      <Col md={3}>
        <Card style={{ width: '17rem' }}>
          <Card.Img variant="top" src={Terongungu} />
          <Card.Body>
            <Card.Title>Terong Ungu</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{ width: '17rem' }}>
          <Card.Img variant="top" src={Bawangmerah} />
          <Card.Body>
            <Card.Title>Bawang Merah</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{ width: '17rem' }}>
          <Card.Img variant="top" src={Tomat} />
          <Card.Body>
            <Card.Title>Tomat</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{ width: '17rem' }}>
          <Card.Img variant="top" src={Selada} />
          <Card.Body>
            <Card.Title>Selada</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
</Row>
</Container>
</div>
<div className="Content2">
   <Container>
<Row className="text-center mt-4">
    <Col>
    <h1>
     My Productivity
    </h1>
   <p>
   Manage your plants in one place
   </p>
    </Col>
</Row>
<Row>
    <Col>
    <div className="text-center mb-2 d-flex justify-content-center">
      <Button variant="primary" size="lg" className="me-2 custom-button"style={{ width: '200px', 
        backgroundColor: '#C9E84E', 
        borderColor: '#C9E84E',
        color: '#000' }}>
        Add Your Plants
      </Button>
      <Button variant="Primary" size="lg" className="custom-button" style={{ width: '200px', 
        backgroundColor: '#C9E84E', 
        borderColor: '#C9E84E',
        color: '#000' }}>
        Go To Gallery
      </Button>
    </div>
    </Col>
</Row>
   </Container>
</div>
<div>
    <Container>
        <Row>
            <Col>
            <h5>On Going</h5>
            </Col>
        </Row>
    </Container>
</div>
<div>
<Container className="mt-4">
      <Row className="mb-3">
        <Col>
          <Card className="custom-card">
            <Row className="no-gutters">
              <Col md={3}> {/* Ubah ukuran kolom untuk gambar */}
                <Card.Img variant="top" src={Cabai} className="custom-card-img" style={{width:'17rem'}}/>
              </Col>
              <Col md={9}>
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="mb-4">
                    <strong>Nama Tanaman:</strong> Cabai<br />
                    <strong>Umur Tanaman:</strong> 1 Bulan<br />
                    <strong>Tanggal Mulai Tanam:</strong> 18-05-2024
                  </Card.Text>
                  <Button variant="success" className="mt-auto align-self-end custom-button">Lihat</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Card className="custom-card">
            <Row className="no-gutters">
              <Col md={3}> {/* Ubah ukuran kolom untuk gambar */}
                <Card.Img variant="top" src={Tomat1} className="custom-card-img" style={{width:'17rem'}} />
              </Col>
              <Col md={9}>
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="mb-4">
                    <strong>Nama Tanaman:</strong> Tomat<br />
                    <strong>Umur Tanaman:</strong> 1 Bulan<br />
                    <strong>Tanggal Mulai Tanam:</strong> 09-05-2024
                  </Card.Text>
                  <Button variant="success" className="mt-auto align-self-end custom-button">Lihat</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
        <h4>Completed</h4>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Card className="custom-card">
            <Row className="no-gutters">
              <Col md={3}> {/* Ubah ukuran kolom untuk gambar */}
                <Card.Img variant="top" src={Wortel1} className="custom-card-img" style={{width:'17rem'}}/>
              </Col>
              <Col md={9}>
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="mb-4">
                    <strong>Nama Tanaman:</strong> Wortel<br />
                    <strong>Umur Tanaman:</strong> 4 Bulan<br />
                    <strong>Tanggal Mulai Tanam:</strong> 24-09-2024
                  </Card.Text>
                  <Button variant="success" className="mt-auto align-self-end custom-button">Lihat</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
</div>
<Footer/>
</>
  )
} 

export default Myplants