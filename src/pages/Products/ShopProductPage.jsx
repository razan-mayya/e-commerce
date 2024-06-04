import React from 'react'
import { CategoryHeader } from '../../components/Category/CategoryHeader'
import { SearchCountResult } from '../../Utility/SearchCountResult'
import { Container } from 'react-bootstrap'

export const ShopProductPage = () => {
    return (
        <div style={{ minHeight: "500px" }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title="600 منتج متاح" />
            </Container>
        </div>
    )
}
