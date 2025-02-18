import Carousel from 'react-bootstrap/Carousel';
import bannertop from '../../assets/images/graph01.svg'

function AppFTopBanner() {


    return (
        <section className="top-slider">
<Carousel controls={false} indicators={false} >
<Carousel.Item>
        <img
          className="d-block w-100"
          src={bannertop}
          alt="banner_img"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
</Carousel>
        </section>
    )
}

export default AppFTopBanner