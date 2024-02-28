import Carousel from 'react-bootstrap/Carousel';
import "./MyCarousel.scss"
import Button from 'react-bootstrap/Button';

const CarouselFade = () => {
  return (
    <Carousel fade controls={false} interval={2500}>
      <Carousel.Item>
        <div className='slider-image-wrapper'>
          <img className='slider-image' src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1709036533~exp=1709037133~hmac=7f376b955f641600b2718023af58511a39861c2cca29a1184c05912bbab4d8c5' />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="outline-light">Let's Explore</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='slider-image-wrapper'>
          <img className='slider-image' src='https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg?w=1060&t=st=1709036582~exp=1709037182~hmac=a816a2b6743167ddf2ef935cf5edbe95c011f8e1b8e65f9b0975121fbcc22780' />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="outline-light">Let's Explore</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='slider-image-wrapper'>
          <img className='slider-image' src='https://img.freepik.com/free-photo/natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-7867.jpg?w=900&t=st=1709036609~exp=1709037209~hmac=ad223187c5b6ef6bc4dd595daf2e69b26d9f79c9bd1b02ad0c82c9966072f1ce' />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <Button variant="outline-light">Let's Explore</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;