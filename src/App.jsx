import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage/HomePage"
import { NavLogin } from "./Utility/NavLogin"
import { Footer } from "./Utility/Footer"
import { Login } from "./pages/Auth/Login"
import Form from 'react-bootstrap/Form';
import { AllCategoryPage } from "./pages/Category/AllCategoryPage"
import { AllBrandPage } from "./pages/Brand/AllBrandPage"
import { ShopProductPage } from "./pages/Products/ShopProductPage"

function App() {
  let inputt = <Form.Control size="lg" type="text" placeholder="اسم المستخدم" />

  return (

    <div className="almarai-regular" style={{
      backgroundColor: "rgb(245 ,245, 245)"
    }}>
      <NavLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login url="/register" title="تسجبل الدخول" para="أليس لديك حساب؟" btntitle="تسجبل الدخول" />} />
          <Route path="/register" element={<Login url="/login" title="تسحيل حساب جديد" para=" لديك حساب بالفعل؟" inputt={inputt} btntitle="تسجيل الحساب" />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allBrands" element={<AllBrandPage />} />
          <Route path="/ShopProductPage" element={<ShopProductPage />} />

        </Routes>
      </BrowserRouter>
      <Footer />

    </div >
  )
}

export default App
