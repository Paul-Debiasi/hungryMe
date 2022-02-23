import { HungryMeContext } from "../../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.scss";
import CardMedia from "@mui/material/CardMedia";
import unknown from "../../img/unknown.png";

export default function Profile() {
  const { currentUser } = useContext(HungryMeContext);
  const navigate = useNavigate();
  if (!currentUser) navigate("/");
  return (
    <div className="profileContainer">
      <h1>Successful log in {currentUser.username} :)</h1>
      <img
        src={currentUser.avatar ? currentUser.avatar : unknown}
        alt="Profile"
      />
      <h2>Your name: {currentUser.name}</h2>
      <h3>Your city: {currentUser.city}</h3>
      <h5>Your email: {currentUser.email}</h5>
      <h5>Your id: {currentUser.id}</h5>
      {currentUser.favorites.length === 0 ? (
        <div>
          <h1>Favorites:</h1> You don't have any favorites yet{" "}
        </div>
      ) : (
        currentUser.favorites.map((item, idx) => (
          <div key={idx}>
            {item.name}
            <CardMedia
              component="img"
              height="50"
              width="50"
              image={item.imageURL}
              alt="Paella dish"
            />
          </div>
        ))
      )}
    </div>
  );
}
