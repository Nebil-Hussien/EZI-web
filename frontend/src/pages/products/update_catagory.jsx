import "./new_catagory.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios  from "axios";

const Updatecatagory = () => {

      const [file, setFile] = useState();
      const { catagoryId } = useParams("");
      const [fileName, setFileName] = useState("");
      const [catagory, setcatagory] = useState("");
      const [data_user,setData]=useState([]);
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("catagory",e.target.catagory.value)
        formData.append("catagory_id",catagoryId)
       
          axios.post(
            "http://localhost:3001/update/catagory",formData
          ).then((response) => {
          alert(response.data);
          
    })
      }
      useEffect(() => {
        axios
          .post("http://localhost:3001/catagory/byid", { catagory_id: catagoryId })
          .then((response) => {
            setData(response.data[0]);
          });
      }, []);
   
    return (
        <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>New Catagory</h1>
          </div>
    
            
              {/* <form onSubmit={uploadFile} >
                <div className="formInput" >
                   <label>Catagory Name</label>
                    <input type="text" name="catagory" placeholder= "Catagory Name" required/>
                    <input type="file" name="catagory_img" accept="img/*" required/>
                  </div>
                  <button type="submit">Save</button>
              </form> */}
              <form onSubmit={uploadFile}> 
               <div className="App">
               {/* file://C:/xampp/htdocs/ecommerce/images */}
               
           <input type="text" name="catagory" placeholder= "Catagory Name" defaultValue={data_user.catagory_name} onChange={(e)=>setcatagory(e.target.value)} required/>
        <img src={`http://192.168.0.137/ecommerce/images/${data_user.image_name}`} alt="image"></img>
       
          <input type="file"  onChange={saveFile} />
          <button type="submit">Upload</button>
        </div>
        </form>
              </div>
          
          </div>
         
            );
        }
export default Updatecatagory;