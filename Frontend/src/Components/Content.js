import Carousel from 'react-bootstrap/Carousel';
import C1 from '../Gambar/C1.jpg'
import C2 from '../Gambar/C2.jpg'
import C3 from '../Gambar/C3.png'


function CarouselFadeExample() {
  return (
    <div>
    <Carousel fade>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src= {C1}
          alt="First slide"

          />
      </Carousel.Item>
      
      <Carousel.Item>
      <img
          className="d-block w-100"
          src= {C2}
          alt="First slide"
          />
        <Carousel.Caption>
          <h3></h3>
          <p>

          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src= {C3}
          alt="First slide"
          />
        <Carousel.Caption>
          <h3></h3>
          <p>
          
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default CarouselFadeExample;
