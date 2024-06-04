import { Col } from 'react-bootstrap'
import Flip from 'react-reveal/Flip';

export const CategoryCard = ({ img }) => {
    return (
        <Col lg={3} md={4} sm={6} xs={6} className='mt-3 mb-3'>
            <Flip>
                <div className='cardCategory '>
                    <img src={img} alt="" />
                </div>
            </Flip>
        </Col>

    )
}
