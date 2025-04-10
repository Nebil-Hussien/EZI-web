import "./single_product.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import {useParams} from 'react-router-dom';

import { useState,useEffect } from "react";
import axios from "axios";
const Single_Product = () => {
  const { productId } = useParams("");
  const [data_user,setData]=useState([]);
  useEffect(()=> {
      axios.post("http://localhost:3001/product/byid",{product_id: productId}).then((response) =>{
setData(response.data[0]);
console.log(data_user);
      } )
    
  
    }, [])

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
                <h1 className="itemTitle">{data_user.name}</h1>
                
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{data_user.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">
                  {data_user.Description}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Stock:</span>
                  <span className="itemValue">{data_user.Stock}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Catagory:</span>
                  <span className="itemValue">{data_user.catagory_name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product Type:</span>
                  <span className="itemValue">{data_user.product_type}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Registered Date:</span>
                  <span className="itemValue">{data_user.created_at}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Supplier:</span>
                  <span className="itemValue">{data_user.business_name}</span>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        
      </div>
    </div>
  );
};

export default Single_Product;