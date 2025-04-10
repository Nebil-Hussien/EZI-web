import "./single_product.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
const Update_Product = () => {
  const [data_user, setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3001/product/byid", { product_id: productId })
      .then((response) => {
        setData(response.data[0]);
      });
  }, []);
  
  const { productId } = useParams("");
 

  const update_product = (e) => {

    axios
      .post("http://localhost:3001/product/update", {
        product_id: productId,
        product_name: e.target.product_name.value,
        price: e.target.price.value,
        description: e.target.description.value,
        stock: e.target.stock.value,
        catagory_id: e.target.catagory.value,
        product_type_id: e.target.product_type.value,
        supplier_id: e.target.supplier.value,
      })
      .then(() => alert("sucess"));
  };

  const [catagories, setcatagories] = useState([]);
  // console.log(data_user);

  useEffect(() => {
    fetch("http://localhost:3001/catagory/all")
      .then((res) => res.json())
      .then((data) => {
        setcatagories(data);
      });
  }, []);
  const [product_types, setproduct_types] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/producttype/all")
      .then((res) => res.json())
      .then((data) => {
        setproduct_types(data);
      });
  }, []);
  const [suppliers, setsuppliers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/supplier")
      .then((res) => res.json())
      .then((data) => {
        setsuppliers(data);
      });
  }, []);
  const [state, setState] = useState([]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
             
              <div className="details">
              <form onSubmit={update_product}>
                <input
                  type="text"
                  defaultValue={data_user.name}
                  name="product_name"
                  required
                 
                />

                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <input
                    type="text"
                    name="price"
                    defaultValue={data_user.price}
                    required
                   
                  />
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <input
                    type="text"
                    name="description"
                    defaultValue={data_user.Description} 
                    required
                  
                  />
                </div>
                <div className="detailItem">
                  <span className="itemKey">Stock:</span>
                  <input
                    type="text"
                    name="stock"
                    defaultValue={data_user.Stock}
                    required
                    
                  />
                </div>
                <div className="detailItem">
                  <span className="itemKey">Catagory:</span>
                  <select name="catagory"
                    required
          
                  >
                    <option value={data_user.catagory_id}>
                      {data_user.catagory_name}
                    </option>
                    {catagories.map((catagory) => (
                      <option value={catagory.catagory_id}>
                        {catagory.catagory_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product Type:</span>
                  <select
                  name="product_type"
                    required
                    
                  >
                    <option value={data_user.product_type_id}>
                      {data_user.product_type}
                    </option>
                    {product_types.map((type) => (
                      <option value={type.product_type_id}>
                        {type.product_type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Supplier:</span>
                  <select name="supplier"
                    required
                  
                  >
                    <option value={data_user.suppiler_id}>
                      {data_user.business_name} 
                    </option>
                    {suppliers.map((supplier) => (
                      <option value={supplier.suppiler_id}>
                        {supplier.business_name}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit"
                  style={{ backgroundColor: "darkblue" }}>
                  Update
                </button>
                {/* onClick={update_product} */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update_Product;
