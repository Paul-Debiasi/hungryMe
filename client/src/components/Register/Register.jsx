import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { HungryMeContext } from "../../Context";
import axios from "axios";

export default function Register() {
	const { menu, setMenu, clientUser, setClientUser } =
		useContext(HungryMeContext);
	const [business, setBusiness] = useState(false);
	const [client, setClient] = useState(false);
	const [user, setUser] = useState({});
	console.log(user);
	console.log("Client ", client);
	console.log("business", business);

	const handleClient = (e) => {
		e.preventDefault();
		console.log("response is");
		setClientUser({
			...clientUser,
			id: uuidv4(),
			client: true,
			favorites: [],
			[e.target.name]: e.target.value,
		});
	};

	const submitClient = async (e) => {
		e.preventDefault();

		const data = clientUser;
		console.log("Submiting !!", data);
		const response = await axios.post("/register", data);
		console.log(response);
	};

	console.log(clientUser);

	return (
		<div>
			<div>
				<h1>User Registration</h1>
			</div>
			<input
				type='radio'
				value='business'
				name='gender'
				onChange={() => {
					if (!business) {
						setBusiness(true);
						setClient(false);
					}
				}}
			/>{" "}
			Business owner
			<input
				type='radio'
				value='client'
				name='gender'
				onChange={() => {
					if (!client) {
						setClient(true);
						setBusiness(false);
					}
				}}
			/>{" "}
			Client
			<form>
				<label className='label'>Name</label>
				<input
					onChange={handleClient}
					className='input'
					name='username'
					type='text'
					id='name'
				/>
				<label className='label'>Email</label>
				<input
					onChange={handleClient}
					className='input'
					type='email'
					name='email'
				/>
				<label className='label'>Password</label>
				<input
					onChange={handleClient}
					className='input'
					type='password'
					name='password'
				/>
				{client ? (
					<button className='btn' type='submit' onClick={submitClient}>
						Submit
					</button>
				) : (
					<>
						<label className='label'>Address</label>
						<input type='text' name='address' id='address' />
						<label className='label'>Neighbor</label>
						<input type='text' name='neighbor' id='neighbor' />
						<label className='label'>Cuisine</label>
						<input type='text' name='cuisine' id='cuisine' />
					</>
				)}
			</form>
		</div>
	);
}
