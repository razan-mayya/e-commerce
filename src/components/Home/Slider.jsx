import Carousel from 'react-bootstrap/Carousel';
import sliderImage from '../../images/sliderimg1.png';
import sliderImage2 from '../../images/sliderimg2.png';
import sliderImage3 from '../../images/sliderimg3.png';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item >
                {/* <ExampleCarouselImage text="First slide" /> */}
                <img
                    style={{ height: "350px", imageRendering: "crisp-edges" }}

                    className="d-block w-100"
                    src={sliderImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='Caption'>First slide label</h3>
                    <p className='Caption'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    style={{
                        height: "350px", imageRendering: "crisp-edges"
                    }}

                    className="d-block w-100"
                    src={sliderImage2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='Caption'>Second slide label</h3>
                    <p className='Caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "350px", imageRendering: "crisp-edges" }}
                    className="d-block w-100"
                    src={sliderImage3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='Caption'>Third slide label</h3>
                    <p className='Caption'>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}
export default Slider