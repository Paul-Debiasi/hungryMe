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
  const button = document.querySelector('.button');
const submit = document.querySelector('.submit');

function toggleClass() {
	this.classList.toggle('active');
}

function addClass() {
	this.classList.add('finished');
}

button.addEventListener('click', toggleClass);
button.addEventListener('transitionend', toggleClass);
button.addEventListener('transitionend', addClass);
  
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
        <input
        value={neigborhood}
          onChange={(e)=>setNeigborhood(e.target.value)}
          className="input"
          name="Neighborhood"
          type="text"
          id="neighborhood"
          placeholder="Neigborhood"
        />
        <input
        value={address}
          onChange={(e)=>setAddress(e.target.value)}
          className="input"
          type="address"
          name="address"
          placeholder="Address"

        />
        <input
        value={cuisine}
          onChange={(e)=>setCuisine(e.target.value)}
          className="input"
          type="cuisine"
          name="cuisine"
        placeholder="Cuisine Type"
         
        />
        <input
         onChange={(e)=>{setImage(URL.createObjectURL(e.target.files[0]))}}
        className="input"
          type="file"
          name="image"
         
        />
       <button className="button">
	<span className="submit" onChange={submitMenu}>Submit</span>
	<span className="loading"><i className="fa fa-refresh"></i></span>
	<span className="check"><i className="fa fa-check"></i></span>
</button>
      </form>
    </div>
  );
}
