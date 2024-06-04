import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HeaderSec } from '../../Utility/HeaderSec'
import { CategoryCard } from './CategoryCard'
import categoryMakeup from '../../images/categoryMakeup.png'
import cateoryciothes from '../../images/cateoryciothes.png'
import clothes from '../../images/clothes.png'
import Dress from '../../images/Dress.png'
import DressClothes from '../../images/DressClothes.png'

export const CategoryContainer = () => {
    return (
        <Container>
            <HeaderSec title="التصنيفات" btnTitle="المزيد" path="/allcategory" />
            <Row className='row'>
                <CategoryCard img={categoryMakeup} />
                <CategoryCard img={DressClothes} />
                <CategoryCard img={cateoryciothes} />
                <CategoryCard img={clothes} />
            </Row>
        </Container>
    )
}
