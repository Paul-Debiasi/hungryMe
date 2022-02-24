import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { HungryMeContext } from "../../Context";
import axios from "axios";
import "./business.scss";
import { useNavigate } from "react-router-dom";

export default function BusinessUser() {
    const navigate = useNavigate()

  const { menu, setMenu, imageURL, setImage } =
    useContext(HungryMeContext);
  const [name, setName] = useState("");
  const [neigborhood, setNeigborhood] = useState("");
  const [address, setAddress] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [id, setId] = useState(uuidv4());

 


  const submitMenu = async (e) => {
    e.preventDefault();

    setMenu({
        ...menu,
        id: uuidv4(),
        name: name,
        neigborhood: neigborhood,
        address: address,
        cuisine_type: cuisine,
        imageURL : imageURL
      });
      
    const data = {id,name, neigborhood,address,cuisine, imageURL };
    
    const response = await axios.post("/addMenu", data);
    console.log("response from menu", response);
    navigate("/")

  };
  return (
    <div className="RestaurantForm">
      <div>
        <h1>Add New Restaurant</h1>
      </div>
      
      <form>
        <input
        value={name}
          onChange={(e)=>setName(e.target.value)}
          className="input"
          name="name"
          type="text"
          id="name"
          placeholder="Restaurant Name"
        />
        <label className="label">Neigborhood</label>
        <input
        value={neigborhood}
          onChange={(e)=>setNeigborhood(e.target.value)}
          className="input"
          name="Neighborhood"
          type="text"
          id="neighborhood"
        />
        <label className="label">Address</label>
        <input
        value={address}
          onChange={(e)=>setAddress(e.target.value)}
          className="input"
          type="address"
          name="address"
        />
        <label className="label">Cuisine Type</label>
        <input
        value={cuisine}
          onChange={(e)=>setCuisine(e.target.value)}
          className="input"
          type="cuisine"
          name="cuisine"
         
        />
        <input
         onChange={(e)=>{setImage(URL.createObjectURL(e.target.files[0]))}}
        className="input"
          type="file"
          name="image"
         
        />
       <button className="btn" type="submit" onClick={submitMenu}>
              Submit
            </button>
      </form>
               {/* <img src={URL.createObjectURL(image)} alt="newimage"/>  */}

    </div>
  );
}
