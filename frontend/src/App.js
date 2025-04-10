import Home from "./pages/home/home";
import Login from "./pages/login/login";
import List from "./pages/list/list";
import Single from "./pages/single/single";
import Products from "./pages/products/products";
import Single_product from "./pages/products/single_product";
import Update_Product from "./pages/products/update_product";
import New from "./pages/new/new";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Suppliers from "./pages/suppliers/suppliers";
import Viewsupplier from "./pages/suppliers/view_supplier";
import Orders from "./pages/orders/orders";
import Bussiness from "./pages/business/business";
import Create_bussiness_type from "./pages/Business_type/Create_bussiness_type";
import Catagories from "./pages/products/catagories";
import New_catagory from "./pages/products/new_catagory";
import Product_types from "./pages/products/product_type";
import New_type from "./pages/products/new_type";
import New_product from "./pages/products/new_product";
import Order_assign from "./pages/orders/assign_order";
import Delivery from "./pages/delivery/delivery_view";
import New_delivery from "./pages/delivery/new_delivery";
import Setting from "./pages/setting/setting";
import Report from "./pages/report/report";
import Updatecatagory from "./pages/products/update_catagory";
import UpdateType from "./pages/products/update_type";
import UpdateBussinessType from "./pages/business/update_bussiness_type";
import Auth from "./pages/Auth";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Login />} />
            <Route name="home" path="home" element={<Auth> <Home /> </Auth>} />
            </Route>
            <Route path="users">
              <Route index element={<Auth><List /></Auth>} />
              <Route name="user" path=":userid" element={<Auth><Single /></Auth>} />
              <Route name="user" path=":userid/delete" element={<Auth><Single /></Auth>} />
            </Route>
            <Route path="suppliers">
            <Route index element={<Auth><Suppliers /> </Auth>} />
            <Route name="supplier" path=":userid" element={<Auth> <Viewsupplier  /> </Auth>}    />
            <Route name="supplier" path="new" element={<Auth> <New /></Auth>} />
            <Route name="supplier" path="business" element={<Auth> <Bussiness type="business_type"/> </Auth>} />
            <Route name="supplier" path="business/:typeId" element={<Auth> <UpdateBussinessType/> </Auth>} />
            <Route name="supplier" path="business/create" element={<Auth><Create_bussiness_type/></Auth>} />
            
           </Route>
            <Route path="products">
              <Route index element={<Products />} />
              <Route name="product" path="new" element={<Auth><New_product /> </Auth>}/>
              <Route name="product" path="catagory" element={<Auth><Catagories /> </Auth>}/>
              <Route name="product" path="product_types" element={<Auth> <Product_types /> </Auth>}/>
              <Route name="product" path="product_types/new" element={<Auth> <New_type /> </Auth>}/>
              <Route name="product" path="cataogry/new" element={<Auth><New_catagory /> </Auth>}/>
              <Route name="product" path="catagory/:catagoryId" element={<Auth><Updatecatagory /> </Auth>} />
              <Route name="product" path="product_types/:typeId" element={<Auth> <UpdateType /> </Auth>} />
              <Route name="product" path=":productId/update" element={<Auth> <Update_Product /> </Auth>} />
              
                
            </Route>

            <Route path="orders">
              <Route index element={<Auth> <Orders /></Auth>} />
              <Route path=":orderId" element={<Auth><Single /></Auth>} />
              <Route path=":orderId/assign" element={<Auth><Order_assign /></Auth>} />
              <Route
                path="new"
                element={<Auth><New title="Add New Product" /></Auth>}
              />
            </Route>
            <Route path="delivery">
              <Route index element={<Delivery />} />
              <Route path="new" element={<New_delivery />} />
            </Route>
            <Route path="setting">
              <Route index element={<Auth><Setting /></Auth>} />
            </Route>
            <Route path="report">
              <Route index element={<Auth><Report /></Auth>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;