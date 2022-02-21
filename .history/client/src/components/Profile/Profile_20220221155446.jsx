import { HungryMeContext } from "../../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.scss";

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
          <Card sx={{ maxWidth: 345 }} className="cardContainer">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item.name[0]}
          </Avatar>
        }
        title={item.name}
        subheader={item.cuisine_type}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Address: {item.address}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
          {item.name} 
          </div>)
      )}
      <div></div>
    </div>
  );
}
