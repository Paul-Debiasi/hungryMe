import { useContext } from "react";
import { HungryMeContext } from "../../Context";
import Card from "../Card/Card";
import Header from "../Header/Header";
import axios from "axios";

export default function Main() {
  const { menu, currentUser, setCurrentUser } = useContext(HungryMeContext);

  const addToFav = async (item) => {
    //adding a new restaurant to favorite array
    currentUser.favorites?.push(item);

    //splitting request so we can pass a restaurant object
    // and currentUser Id to backend
    let request = {
      item: item,
      currentUserId: currentUser.id,
    };

    const response = await axios.post("/toggle_favorites", request);
    console.log("response from main is", response);

    //updating currentUser from backend
    setCurrentUser(response.data.client);
  };
  return (
    <div>
      <h1>Restaurants</h1>
      <Header />
      <div className="cardContainer">
        {menu.map((item, idx) => (
          <Card item={item} key={idx} cb={addToFav} />
        ))}
      </div>
    </div>
  );
}
