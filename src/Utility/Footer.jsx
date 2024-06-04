import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";

export const Footer = () => {
    return (
        <div className='navbar-toggler'>
            <Container>
                <Row className='d-flex justify-content-between pt-4 mt-4' >

                    <Col className='d-flex footer ' style={{ gap: "10px" }}>
                        <TiSocialTwitter color='grey' />
                        <IoLogoInstagram color='grey' />
                        <FaFacebookF color='grey' />
                        <p >0994538234</p>
                        <FaPhone color='grey' />

                    </Col>
                    <Col className='footer'>
                        <div className='d-flex' style={{
                            flexDirection: " row-reverse", gap: "10px"

                        }}>
                            <p >الشروط والاحكام</p>
                            <p>سياسة الخصوصية</p>
                            <p>اتصل بنا</p>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
    )
}
