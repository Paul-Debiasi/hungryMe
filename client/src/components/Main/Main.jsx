import { useContext } from "react";
import { HungryMeContext } from "../../Context";
import Card from "../Card/Card";

export default function Main() {
  const { menu } = useContext(HungryMeContext);


	return (
		<div>
			<h1>Restaurants</h1>
			<div className='cardContainer'>
				{menu.map((item) => (
					<Card key={item.id} item={item} />
				))}
			</div>
		</div>
	);

  return (
    <div>
      <h1>Restaurants</h1>

      <div className="cardContainer">
        {menu.map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </div>
    </div>
  );

}
