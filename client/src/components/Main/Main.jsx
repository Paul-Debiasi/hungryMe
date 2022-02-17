import { useContext } from "react";
import { HungryMeContext } from "../../Context";
import Card from "../Card/Card";
import Profile from "../Profile/Profile";

export default function Main() {
  const { menu } = useContext(HungryMeContext);

  return (
    <div>
      <Profile />
      <h1>Restaurants</h1>

      <div className="cardContainer">
        {menu.map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}
