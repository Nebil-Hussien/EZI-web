import "./products.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios  from "axios";

const Products = () => {
  const [data_user,setData]=useState([]);
 
useEffect(()=> {
    fetch("http://localhost:3001/product/all").then((data) => data.json())
    .then((data) => setData(data))
  

  }, [])

  const handleDelete = (id) => {
    axios.post("http://localhost:3001/product/delete",{product_id: id}).then((response) => {
  
      if (response.data=="fail") {
        alert("This Product Is Already Orderd By the User");
      } else if(response.data=="ok") {
        alert("Successfull!!!");
      }
  }); 
  }
  const userColumns = [
    
    { field: "id", headerName: "NO", width: 70 },
    { field: "product_id", headerName: "ID", width: 160 },
    {
      field: "name",
      headerName: "Product Name",
      width: 230,
      
    },
    {
      field: "price",
      headerName: "Price",
      width: 230,
    },
  
    {
      field: "Description",
      headerName: "Description",
      width: 100,
    },
    {
      field: "Stock",
      headerName: "Stock",
      width: 160,
      },
      {
        field: "catagory_name",
        headerName: "Catagory",
        width: 160,
        },
        {
          field: "business_name",
          headerName: "Supplier",
          width: 160,
          },
        {
          field: "product_type",
          headerName: "Product Type",
          width: 160,
          },
          {
            field: "created_at",
            headerName: "registered date",
            width: 160,
            },
  ];

 
 
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`${params.row.product_id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.product_id)} >Delete</div>
            <Link to={`${params.row.product_id}/update`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Update</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
    <div className="datatable">
      
      <div className="datatableTitle">
        
        <Link to="catagory" className="link">
          catagories
        </Link>
          
        <Link to="product_types" className="link">
          product types
        </Link>
        <Link to="new" className="link">
          new product
        </Link>
      </div>
    
    
  
      
      <DataGrid
    
        className="datagrid"
        rows={data_user}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.id}
        checkboxSelection
      />
  </div>
  </div>
    </div>
  );
 
};

export default Products ;