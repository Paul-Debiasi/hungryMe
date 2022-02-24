import "./Card.scss";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { HungryMeContext } from "../../Context";
import { useContext } from "react";

export default function CardItem({ item, cb }) {
  const { currentUser, imageURL, setImage } = useContext(HungryMeContext);
  let toggled = false;

console.log("URL here", imageURL)
if(!imageURL)
  //for each favorite item of currentUser we set toggled = true, to set the color of heartIcon red
  currentUser.favorites?.forEach((favItem) => {
    if (item.id === favItem.id) {
      toggled = true;
    }
    return;
  });

  return (
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            onClick={() => cb(item)}
            className={toggled ? "text-danger" : ""}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
}
