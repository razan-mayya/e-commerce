import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { CategoryCard } from './CategoryCard'
import categoryMakeup from '../../images/categoryMakeup.png'
import cateoryciothes from '../../images/cateoryciothes.png'
export const AllCategory = () => {
    return (
        <Container>
            <h5 style={{
                fontWeight: "bold",
                textAlign: "right",
                margin: "20px 0"
            }}>كل  التصنيفات</h5>
            <Row className='row'>
                <CategoryCard img={categoryMakeup} />
                <CategoryCard img={cateoryciothes} />
                <CategoryCard img={cateoryciothes} />
                <CategoryCard img={cateoryciothes} />
                <CategoryCard img={cateoryciothes} />
                <CategoryCard img={cateoryciothes} />
                <CategoryCard img={cateoryciothes} />
                <CategoryCard img={cateoryciothes} />
                <CategoryCard img={cateoryciothes} />
            </Row>
        </Container>

    )
}
