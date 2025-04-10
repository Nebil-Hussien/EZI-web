import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import axios  from "axios";
import Autocomplete from "react-google-autocomplete";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const New = () => {

  const [business_name, setbusinessname] = useState("");
  const [business_location, setbusinesesslocation] = useState("");
  const [city, setcity] = useState("");
  const [subcity, setsubcity] = useState("");
  const [bussiness_owner_name, setbusinesessownername] = useState("");
  const [phone, setbusinesessphone] = useState("");
  const [bussiness_type, setbusinesesstype] = useState("");
  const [registration_no, setcompanyregistrationno] = useState("");
  const [user_phone, setphonenumber] = useState("");
  const [userpassword, setuserpassword] = useState("");
  const [longtuide, setlongtuide] = useState("");
  const [latitude, setlatitude] = useState("");
  const [bussiness_types, setbussiness_types] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/business_type/all')
      .then(res => res.json())
      .then(data => {
        setbussiness_types(data);
      });
  }, []);
const senddata =()=> {
  axios.post("http://localhost:3001/suppliers/new",{business_name: business_name,business_location: business_location,city: city,subcity: subcity,bussiness_owner_name: bussiness_owner_name,phone: phone,bussiness_type: bussiness_type,registration_no: registration_no,user_phone: user_phone,user_password: userpassword,longtuide: longtuide,latitude: latitude}).then(()=> alert("sucess"));
}
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New suppliers</h1>
        </div>
        <div className="bottom">
          <div className="left">
           
          </div>
          <div className="right">
            <form>
              <div className="formInput">
               
                 <label>Business Name</label>
                  <input type="text" placeholder= "abc construction plc" onChange={(e)=>
                  {
                    setbusinessname(e.target.value);
                  }
                  } required/>
                  <label>Business location</label>
                  {/* <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete> */}



                  <input type="text" placeholder= "Address" onChange={(e)=>
                  {
                    setbusinesesslocation(e.target.value);
                  }} required/>
                  <label>Longtuide</label>
                  <input type="number" placeholder= "longtuide" onChange={(e)=>
                  {
                    setlongtuide(e.target.value);
                  }} required/>
                  <label>Latitude</label>
                  <input type="number" placeholder= "latitude" onChange={(e)=>
                  {
                    setlatitude(e.target.value);
                  }} required/>
                  <label>City</label>
                  <select onChange={(e)=>
                  {
                    setcity(e.target.value);
                  }}required >
                    <option value="">Select</option>
                    <option value="Addis Ababa">Addis Ababa</option>
                    <option value="Gondar">Gondar</option>
                    <option value="Mekelle">Mekelle</option>
                    <option value="Adama">Adama</option>
                    <option value="Awassa">Awassa</option>
                    <option value="Bahir Dar">Bahir Dar</option>
                    <option value="Dire Dawa">Dire Dawa</option>
                    <option value="Dessie">Dessie</option>
                    <option value="Jimma">Jimma</option>
                    <option value="Jijiga">Jijiga</option>
                    <option value="Shashamane">Shashamane</option>
                    <option value="Bishoftu">Bishoftu</option>
                    <option value="Sodo">Sodo</option>
                    <option value="Arba Minch">Arba Minch</option>
                    <option value="Hosaena">Hosaena</option>
                    <option value="Harar">Harar</option>
                    <option value="Dilla">Dilla</option>
                    <option value="Nekemte">Nekemte</option>
                    <option value="Debre Birhan">Debre Birhan</option>
                    <option value="Asella">Asella</option>
                    <option value="Debre Markos">Debre Markos</option>
                    <option value="Kombolcha">Kombolcha</option>
                    <option value="Debre Tabor">Debre Tabor</option>
                    <option value="Adigrat">Adigrat</option>
                    <option value="Areka">Areka</option>
                    <option value="Weldiya">Weldiya</option>
                    <option value="Sebeta">Sebeta</option>
                    <option value="Burayu">Burayu</option>
                    <option value="Shire">Shire</option>
                    <option value="Ambo">Ambo</option>
                    <option value="Arsi Negele">Arsi Negele</option>
                    <option value="Aksum">Aksum</option>
                    <option value="Gambela">Gambela</option>
                    <option value="Bale Robe">Bale Robe</option>
                    <option value="Butajira">Butajira</option>
                    <option value="Batu">Batu</option>
                    <option value="Boditi">Boditi</option>
                    <option value="Adwa">Adwa</option>
                    <option value="Yirgalem">Yirgalem</option>
                    <option value="Waliso">Waliso</option>
                    <option value="Welkite">Welkite</option>
                    <option value="Gode">Gode</option>
                    <option value="Meki">Meki</option>
                    <option value="Negele Borana">Negele Borana</option>
                    <option value="Alaba Kulito">Alaba Kulito</option>
                    <option value="Alamata">Alamata</option>
                    <option value="Chiro">Chiro</option>
                    <option value="Tepi">Tepi</option>
                    <option value="Durame">Durame</option>
                    <option value="Goba">Goba</option>
                    <option value="Assosa">Assosa</option>
                    <option value="Gimbi">Gimbi</option>
                    <option value="Wukro">Wukro</option>
                    <option value="Haramaya">Haramaya</option>
                    <option value="Mizan Teferi">Mizan Teferi</option>
                    <option value="Sawla">Sawla</option>
                    <option value="Mojo">Mojo</option>
                    <option value="Dembi Dolo">Dembi Dolo</option>
                    <option value="Aleta Wendo">Aleta Wendo	</option>
                    <option value="Metu">Metu</option>
                    <option value="Mota">Mota</option>
                    <option value="Fiche">Fiche</option>
                    <option value="Finote Selam">Finote Selam</option>
                    <option value="Bule Hora Town">Bule Hora Town</option>
                    <option value="Bonga">Bonga</option>
                    <option value="Kobo">Kobo</option>
                    <option value="Jinka">Jinka</option>
                    <option value="Dangila">Dangila</option>
                    <option value="Degehabur">Degehabur</option>
                    <option value="Dimtu">Dimtu</option>
                    <option value="Agaro">Agaro</option>
                    </select>
                  <label>Sub City</label>
                  <select onChange={(e)=>
                  {
                    setsubcity(e.target.value);
                  }} required>
                    <option value="">Select</option>
                    <option value="Addis Ketema">Addis Ketema</option>
                    <option value="Akaky Kaliti">Akaky Kaliti</option>
                    <option value="Arada">Arada</option>
                    <option value="Bole">Bole</option>
                    <option value="Gullele">Gullele</option>
                    <option value="Kirkos">Kirkos</option>
                    <option value="Kolfe Keranio">Kolfe Keranio</option>
                    <option value="Lideta">Lideta</option>
                    <option value="Nifas Silk-Lafto">Nifas Silk-Lafto</option>
                    <option value="Yeka">Yeka</option>
                    </select>
                  <label>Business owner name</label>
                  <input type="text" placeholder= "Business Owner Name"
                  onChange={(e)=>
                    {
                      setbusinesessownername(e.target.value);
                    }}/>
                  <label>Business Phone Number</label>
                  <input type="number" placeholder= "0111454545" onChange={(e)=>
                  {
                    setbusinesessphone(e.target.value);
                  }} required/>
              
              </div>
              
                <div className="formInput" >
                 
                  <label>Business type</label>
                  <select required onChange={(e)=> setbusinesesstype(e.target.value)}>
                       <option value="">Select</option>
                           {bussiness_types.map(type => (
                       <option value={type.bussiness_type_id}>{type.bussiness_type_name}</option>
                           ))}
                 </select>
                  <label>Company Registration Number </label>
                  <input type="text" onChange={(e)=>
                  {
                    setcompanyregistrationno(e.target.value);
                  }} required/>
                  <label> Phone Number </label>
                  <input type="number" onChange={(e)=>
                  {
                    setphonenumber(e.target.value);
                  }} required/>
                  <label> User password </label>
                  <input type="text" onChange={(e)=>
                  {
                    setuserpassword(e.target.value);
                  }} required/>
                </div>
                {/* <Autocomplete
  apiKey={"AIzaSyA6FjTNtaiuf3PGaAVvVFHYgc6M_tdM24k"}
  onPlaceSelected={(place) => {
    console.log(place);
  }}
  options={{
    types: ["(regions)"],
    componentRestrictions: { country: "et" },
  }}
  props={{
    libraries: ["places"]
  }}

/>; */}
              <button onClick={senddata}>Send</button>
            </form>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default New;