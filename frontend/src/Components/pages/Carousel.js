import Carousel from 'react-bootstrap/Carousel';
import './format.css'

function DarkVariantExample(props) {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.link1}
          width= '600px'
          height= '320px'
        />
        <Carousel.Caption>
          <h5>{props.name}</h5>
          <p>{props.desc1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.link2}
          width= '600px'
          height= '320px'
        />
        <Carousel.Caption>
          <h5>{props.name}</h5>
          <p>{props.desc2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.link3}
          width= '600px'
          height= '320px'
        />
        <Carousel.Caption>
          <h5>{props.name}</h5>
          <p>
            {props.desc3}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;