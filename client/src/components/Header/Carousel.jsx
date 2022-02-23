import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export default function CarouselHeader(props) {
  let carImages = [
    "https://restaurantpassiflore.com/wp-content/uploads/2021/10/Apps-For-Food-Delivery0.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4NEcHdwuMxtYAZqHH2VHr0NccAQQ0jvfSA&usqp=CAU",
    "https://www.trendlink.com/staticasset/TrendImage/Dim3to1/food-delivery.jpg",
    "https://www.morganstanley.com/content/dam/msdotcom/ideas/food-delivery-apps-investing/tw-food-delivery.jpg",
  ];

  var items = [
    {
      name: "HungryMe",
      description: "So you never stay hungry!",
    },
    {
      name: "This week get 10% off!",
      description: "Don't miss out!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Explore!</Button>
    </Paper>
  );
}
