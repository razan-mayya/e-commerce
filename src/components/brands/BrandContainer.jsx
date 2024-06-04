import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Brand } from './Brand'
import { HeaderSec } from '../../Utility/HeaderSec'
import img1 from "../../images/lex.png";
import img2 from "../../images/vv.png";
import img3 from "../../images/car.png";
export const BrandContainer = ({ img }) => {
    return (
        <Container>
            <HeaderSec title="كل الماركات" btnTitle="المزيد" path="/allBrands" />
            <Row className='mt-5 '>
                <Brand img={img} />
                <Brand img={img1} />
                <Brand img={img2} />
                <Brand img={img3} />
                <Brand img={img2} />
                <Brand img={img} />

            </Row>
        </Container>
    )
}
