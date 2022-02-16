import { useState, useEffect, useContext } from "react";
import { HungryMeContext } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Header() {
	const { menu, setMenu } = useContext(HungryMeContext);

	useEffect(() => {
		const getData = async (name) => {
			const response = await axios.get("/restaurant");
			console.log(response);
			setMenu(response.data);
		};
		getData();
	}, []);
	console.log(menu);

	const handleChange = (e) => {
		const currentMenu = [...menu];
		console.log("currentMenu", currentMenu);
		// const newData = [...menu]
		const filteredMenu = currentMenu.filter((item) => {
			return item.name.toLowerCase().includes(e.target.value);
		});
		setMenu([...filteredMenu]);
		console.log("filtered menu", filteredMenu);
	};
	return (
		<div>
			<div>Logo</div>
			<input
				onChange={handleChange}
				type='search'
				name=''
				id=''
				placeholder='Search...'
			/>
			<button>Log in </button>
			<Link to='/register'>Register</Link>
		</div>
	);
}
