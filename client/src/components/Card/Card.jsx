import "./Card.scss";

export default function Card({ item }) {
	return (
		<div className='cardContainer'>
			<h1>{item.name}</h1>
			<img src={item.imageURL} alt='food' />
			<p>Cuisine : {item.cuisine_type}</p>
		</div>
	);
}
