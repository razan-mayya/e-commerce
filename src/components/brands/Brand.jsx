import { Col } from 'react-bootstrap'
import { animated, useSpring } from '@react-spring/web'
import Fade from 'react-reveal/Fade';

export const Brand = ({ img }) => {
    const [style, animate] = useSpring(() => ({
        transform: 'scale(1)',
        boxShadow: '0px 0px 10px #db4d94',
        rotate: 8,
        config: { duration: 2000 },
        loop: { reverse: true },
    }));

    animate({
        transform: 'scale(1)',
        boxShadow: '0px 0px 10px #db4d94)',
        rotate: 8,
        loop: true,
    });
    return (

        <Col lg={2} md={4} sm={6} xs={6} >
            <Fade>
                <animated.div className='brandCard mb-3' style={{ ...style }} >
                    <img src={img} style={{ width: "100%", height: "80px" }} className='navbar-toggler ' />
                </animated.div>
            </Fade>
        </Col>
    )
}
