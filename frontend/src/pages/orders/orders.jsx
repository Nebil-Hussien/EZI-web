import "./orders.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import axios  from "axios";
const Orders = () => {
  const [data_user,setData]=useState([]);
  const [user_id,setuserid]=useState("");
  const [payment_status,setpayment_status]=useState("");
useEffect(()=> {
    fetch("http://localhost:3001/orders/all").then((data) => data.json())
    .then((data) => setData(data))
   
  

  }, [])

  
  const setstatus =(status_payment)=>
  {
    if(status_payment=='0')
    {
      return "unpaid";
      
    }
    else if(status_payment=='1'){
      return "paid";
    }
  }
  
  const change_status = (id,status) => {
    console.log(id);
    console.log(status);
    let payment=0;
    if(status==0)
    {
     payment=1;
    }
    else if(status==1)
    {
      payment=0;
    }
    
    axios.post("http://localhost:3001/order/changestatus",{payment_status: payment,order_id: id}).then(()=> alert("sucess"));
  };
  const handleactive = (id) => {
    setuserid(id);
    axios.post("http://localhost:3001/suppliers/changestatus",{userid: user_id,status_supplier: "Active"}).then(()=> alert("sucess"));
  };

  const userColumns = [
  
    // { field: "id", headerName: "NO", width: 70 },
    { field: "order_id", headerName: "ID", width: 160 },
    {
      field: "status",
      headerName: "order status",
      width: 230,
      
    },
    {
      field: "total_price",
      headerName: "Total price",
      width: 230,
    },
  
    {
      field: "createdt_at",
      headerName: "ordered date",
      width: 200,
    },
    {
      field: "name",
      headerName: "Product name",
      width: 160,
      },
      {
        field: "Description",
        headerName: "Product Description",
        width: 160,
        },
        {
          field: "price",
          headerName: "Product Price",
          width: 160,
          },
          
          {
             
            field: "payment_status",
            headerName: "payment status",
            width: 160,
            

            },
      
  ];

 
 
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
        
          <div className="cellAction">
            {/* <Link   style={{ textDecoration: "none" }} className="link" onClick={() => handleview(params.row.id)}> */}
              {/* <div className="deleteButton" onClick={() => handleview(params.row.user_id)}>View</div> */}
              {/* </Link> */}
              
            <div
              className="deleteButton"
              onClick={() => change_status(params.row.order_id,params.row.payment_status)}
            >
          {setstatus(params.row.payment_status)}
              
            </div>
            <Link to={`${params.row.order_id}/assign`} className="link">
            <div className="deleteButton">
              
              Assign
            </div>
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
        
       orders
       
      </div>
      
      <DataGrid
    
        className="datagrid"
        rows={data_user}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.order_id}
        checkboxSelection
      />
  </div>
  </div>
    </div>
  );
 
};

export default Orders ;