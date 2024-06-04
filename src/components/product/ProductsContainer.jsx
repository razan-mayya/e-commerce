import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { HeaderSec } from '../../Utility/HeaderSec'
import { ProductCard } from "./ProductCard"
import img from "../../images/shoes.png";
import img1 from "../../images/clothesIrons.png";
import img2 from "../../images/dressBlack.png";
import img3 from "../../images/Dress.png";
export const ProductsContainer = ({ title, btnTitle, path }) => {
    return (
        <Container>
            <HeaderSec title={title} btnTitle={btnTitle} path="/ShopProductPage" />

            <Row>
                <ProductCard img={img} />
                <ProductCard img={img1} />
                <ProductCard img={img2} />
                <ProductCard img={img3} />
            </Row>
        </Container>
    )
}
