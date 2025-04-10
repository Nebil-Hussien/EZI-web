import "./catagories.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios  from "axios";
import { width } from "@mui/system";

const Catagories = () => {
  const [data_user,setData]=useState([]);
 
useEffect(()=> {
    fetch("http://localhost:3001/catagory/all").then((data) => data.json())
    .then((data) => setData(data))
  

  }, [])

  const handleDelete = (id) => {
    axios.post("http://localhost:3001/catagory/delete",{catagory_id: id}).then((response) => {
      if (response.data=="fail") {
        alert("There is products registered under this catagory");
      } else if(response.data=="ok") {
        alert("Successfull!!!");
      }
  }); 
  }
  const userColumns = [
    
    { field: "id", headerName: "NO", width: 70 },
    { field: "catagory_id", headerName: "ID", width: 160 },
    {
      field: "catagory_name",
      headerName: "Catagory Name",
      width: 230,
      
    },
    {
      field: "image_path",
      headerName: "Image",
      width: 230,
      renderCell: (params) => <img src={params.value.replace("192.168.137.1","192.168.0.105")} style={{width: 40}}/>
  
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
              {/* <div className="viewButton" onClick={handleDelete(params.row.product_id)}>Delete</div> */}
            <div className="deleteButton" onClick={() => handleDelete(params.row.catagory_id)} >Delete</div>
            <Link to={`${params.row.catagory_id}`} style={{ textDecoration: "none" }}>
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
        
        <Link to="new" className="link">
          add new
        </Link>
      
      </div>
      
      <DataGrid
    
        className="datagrid"
        rows={data_user}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row.catagory_id}
        checkboxSelection
        
      />
  </div>
  </div>
    </div>
  );
 
};

export default Catagories ;