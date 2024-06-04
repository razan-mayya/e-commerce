import discountImg from '../../images/laptop.png'
import { Col, Container, Row } from 'react-bootstrap'

export const DiscountSection = () => {
    return (
        <Container className=' mt-5' style={{ backgroundColor: " rgb(44, 44, 44)" }}>
            <Row style={{ height: "200px" }}>
                <Col lg={6} md={6} sm={6}>
                    <img src={discountImg} className='discountImg' />
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <p className='whiteColor' style={{ marginTop: "85px" }}>خصم يصل جتى 30% على احهزة اللابتوب</p>
                </Col>
            </Row>

        </Container>
    )
}
