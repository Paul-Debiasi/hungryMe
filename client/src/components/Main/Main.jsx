import { useContext } from "react";
import { HungryMeContext } from "../../Context";
import Card from "../Card/Card";
import Header from "../Header/Header";
import axios from "axios";

export default function Main() {
  const { menu, favorites, setFavorites, currentUser,filtered } =
    useContext(HungryMeContext);

  const addToFav = async (item) => {
    currentUser.favorites?.push(item);

    item.currentUser = currentUser.id;

    const response = await axios.post("/favorites", item);
    console.log("response from main is", response);
  };
  return (
    <div>
      <h1>Restaurants</h1>
      <Header />
      <div className="cardContainer">
        {filtered.map((item, idx) => (
          <Card item={item} key={idx} cb = {()=> addToFav(item)} />
        ))}
      </div>
    </div>
  );
}
