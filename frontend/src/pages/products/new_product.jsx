import "./new_product.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState,useEffect } from "react";
import axios from "axios";

const New_product = () => {
  const [file, setFile] = useState("");
  const [product_name, setproductname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [stock, setstock] = useState("");
  const [product_type, setproduct_type] = useState("");
  const [catagory, setcatagory] = useState("");
  const [supplier, setsupplier] = useState("");

 
  const [product_types, setproduct_types] = useState([]);
  const [catagories, setcatagories] = useState([]);
  const [suppliers, setsuppliers] = useState([]);
 
  const view_type =(catagory_value)=> 
  {
    setcatagory(catagory_value);
        axios.post('http://localhost:3001/producttype/by_catagory',{selected_catagory: catagory_value})
          .then(res => setproduct_types(res.data))

  }
  useEffect(() => {
    fetch('http://localhost:3001/catagory/all')
      .then(res => res.json())
      .then(data => {
        setcatagories(data);
      });
  }, []);
  useEffect(() => {
    fetch('http://localhost:3001/suppliers/all')
      .then(res => res.json())
      .then(data => {
        setsuppliers(data);
      });
  }, []);
  
const senddata =()=> {
  
  axios.post("http://localhost:3001/product/new",{product_name: product_name,price: price,description: description,stock: stock,catagory_id: catagory,product_type_id: product_type,supplier_id: supplier}).then(()=> alert("sucess"));
};
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                 <label>Product Name</label>
                  <input type="text"  onChange={(e)=>
                  {
                    setproductname(e.target.value);
                  }
                  } required/>
                  <label>Price</label>
                  <input type="number"  onChange={(e)=>
                  {
                    setprice(e.target.value);
                  }} required/>
                  <label>Description</label>
                  <input type="text" onChange={(e)=>
                  {
                    setdescription(e.target.value);
                  }}required />
                   <label>Catagory</label>
                  <select  required onChange={(e)=>view_type(e.target.value)}>
                  <option value="">Select</option>
                  
                           {catagories.map(catagory => (
                       <option value={catagory.catagory_id}>{catagory.catagory_name}</option>
                           ))}
                 </select> 
                 
              </div>
              
                <div className="formInput" >
                
               
                    <label>Product Type</label>
                   <select  required onChange={(e)=>setproduct_type(e.target.value)}>
                  <option value="">Select</option>
                       
                           {product_types.map(product_type => (
                       <option value={product_type.product_type_id}>{product_type.product_type}</option>
                           ))} 
                 </select>   
                  <label>Stock</label>
                  <input type="number" onChange={(e)=>
                  {
                    setstock(e.target.value);
                  }} required/>
                <label>Supplier</label>
                   <select  required onChange={(e)=>setsupplier(e.target.value)}>
                      <option value="">Select</option>
                      
                           {suppliers.map(supplier => (
                       <option value={supplier.suppiler_id}>{supplier.business_name}</option>
                           ))}
                 </select>   
                </div>
             
              <button onClick={senddata}>Send</button>
            
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default New_product;