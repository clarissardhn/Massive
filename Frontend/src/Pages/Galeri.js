import NavigationBar from "../Components/NavigationBar"
import Footer from "../Components/Footer"
import { Container, Row, Col } from "react-bootstrap"
import Galeri1 from "../Gambar/Galeri1.png"

const Galeri = () => {
    return (
<>
<NavigationBar/>
<Container fluid>
      <Row>
        <Col>
          <img src={Galeri1} className="w-100" alt="Gallery Image" />
        </Col>
      </Row>
    </Container>


    
</>
    )

} 

export default Galeri