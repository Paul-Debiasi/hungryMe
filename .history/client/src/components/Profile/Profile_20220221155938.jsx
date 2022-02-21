import { HungryMeContext } from "../../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.scss";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";


export default function Profile() {
  const { currentUser } = useContext(HungryMeContext);
  const navigate = useNavigate();
  if (!currentUser) navigate("/");
  return (
    <div className="profileContainer">
      <h1>Successful log in {currentUser.username} :)</h1>
      <img src={currentUser.avatar} alt="Profile" />
      <h2>Your name: {currentUser.name}</h2>
      <h3>Your city: {currentUser.city}</h3>
      <h5>Your email: {currentUser.email}</h5>
      {currentUser.favorites.length === 0 ? (
        <div>
          <h1>Favorites:</h1> You don't have any favorites yet{" "}
        </div>
      ) : (
        currentUser.favorites.map((item, idx) => <div key = {idx}>
          <Card sx={{ maxWidth: 200 }} className="cardContainer">
   {item.name}
      <CardMedia
        component="img"
        height="194"
        image={item.imageURL}
        alt="Paella dish"
      />
    
    </Card>
         
          </div>)
    
     
    </div>
  );
}
