import React from 'react'
import { Col, Container } from 'react-bootstrap'

export const CategoryHeader = () => {
    return (
        <div className='navbar-toggler'>
            <Container>
                <Col className='d-flex  py-2 rowReverse'>
                    <div className='mx-2 '>الكل </div>
                    <div className='mx-2 '> الكترونيات</div>
                    <div className='mx-2 '> كهربائيات</div>
                    <div className='mx-2 '> ملابس</div>
                    <div className='mx-2 '> تخفيضات</div>
                    <div className='mx-2 '> الكترونيات</div>
                    <div className='mx-2 '> الكترونيات</div>
                    <div className='mx-2 '> المزيد</div>
                </Col>
            </Container>
        </div>
    )
}
