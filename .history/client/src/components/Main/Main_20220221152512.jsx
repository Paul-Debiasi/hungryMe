import { useContext } from "react";
import { HungryMeContext } from "../../Context";
import Card from "../Card/Card";
import Header from "../Header/Header";

export default function Main() {
  const { menu, favorites, setFavorites} = useContext(HungryMeContext);
  const addToFav = (item) =>{
    currentUser.favorites.push(item)
    
    }
  return (
    <div>
      <h1>Restaurants</h1>
      <Header />
      <div className="cardContainer">
        {menu.map((item, idx) => (
          <Card item={item} key={idx} cb= {addToFav()} />
        ))}
      </div>
    </div>
  );
}