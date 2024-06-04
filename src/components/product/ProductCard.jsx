import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export const ProductCard = ({ img }) => {
    return (
        <Col lg={3} md={4} sm={6} className='mt-4'>
            <Card className='shadowCard'>
                <Card.Img variant="top" src={img} style={{ height: "250px" }} />
                <Card.Body className='pb-0'>
                    <FaRegHeart />
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            <p>  جنيه </p>
                            <span className='boldFont mx-1'>800</span>
                        </div>

                        <div className='d-flex'>
                            <p style={{ color: "yellow" }}>4.5</p>
                            <FaStar color='yellow' />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
