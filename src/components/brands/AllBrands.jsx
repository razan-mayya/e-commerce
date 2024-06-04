import React from 'react'
import { Brand } from './Brand'
import img from "../../images/brand1.png";
import img1 from "../../images/car.png";
import img2 from "../../images/bmw.png";
import img3 from "../../images/vv.png";
import img4 from "../../images/lex.png";

import { Container, Row } from 'react-bootstrap';
export const AllBrands = () => {

    return (
        <Container>
            <h5 style={{
                fontWeight: "bold",
                textAlign: "right",
                margin: "20px 0"
            }}>كل  الماركات</h5>
            <Row className='row'>
                <Brand img={img} />
                <Brand img={img2} />
                <Brand img={img1} />
                <Brand img={img3} />
                <Brand img={img4} />
                <Brand img={img2} />
                <Brand img={img1} />
                <Brand img={img4} />
                <Brand img={img2} />
                <Brand img={img3} />
                <Brand img={img1} />
                <Brand img={img2} />

            </Row>
        </Container>
    )
}
