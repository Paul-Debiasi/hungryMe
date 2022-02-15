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
					<Card item={item} />
				))}
			</div>
		</div>
	);
}
