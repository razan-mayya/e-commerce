import { Pagigation } from '../../Utility/Pagigation'
import { AllBrands } from '../../components/brands/AllBrands'
export const AllBrandPage = () => {
    return (
        <div style={{ minHeight: "500px" }}>
            <AllBrands />
            <Pagigation />
        </div>
    )
}
