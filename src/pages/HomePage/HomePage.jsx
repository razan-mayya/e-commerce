
import { CategoryContainer } from "../../components/Category/CategoryContainer"
import { DiscountSection } from "../../components/Home/DiscountSection"
import Slider from "../../components/Home/Slider"
import { BrandContainer } from "../../components/brands/BrandContainer"
import { ProductsContainer } from "../../components/product/ProductsContainer"
import brandImg from "../../images/brand1.png"
export const HomePage = () => {
    return (
        <div>
            <Slider />
            <CategoryContainer />
            <ProductsContainer title="الاكثر مبيعا" btnTitle="المزيد" />
            <DiscountSection />
            <ProductsContainer title="احدث الازياء " btnTitle="المزيد" />
            <BrandContainer img={brandImg} />
        </div>
    )
}
