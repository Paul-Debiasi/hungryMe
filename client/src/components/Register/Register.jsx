import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { HungryMeContext } from "../../Context";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function Register() {
	const {
		menu,
		setMenu,
		clientUser,
		setClientUser,
		businessUser,
		setBusinessUser,
	} = useContext(HungryMeContext);
	const [business, setBusiness] = useState(false);
	const [client, setClient] = useState(false);
	const [user, setUser] = useState({});
	const [val, setVal] = useState();
	let history = useHistory();

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

	const clear = (e) => {
		e.target.value = "";
		console.log("From clear", e.target);
	};
	const handleBusiness = (e) => {
		setBusinessUser({
			...businessUser,
			id: uuidv4(),
			business: true,
			[e.target.name]: e.target.value,
		});
		console.log(businessUser);
	};

	const submitClient = async (e) => {
		e.preventDefault();
		if (val === "") return;
		const data = { ...clientUser };
		console.log("Submiting !!", data);
		const response = await axios.post("/clients", data);
		console.log(response);
		setVal(() => "");
	};
	const submitBusiness = async (e) => {
		e.preventDefault();
		const data = businessUser;
		const response = await axios.post("/business", data);
		console.log(response);
	};
	console.log(val);

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
			{client ? (
				<form>
					<label className='label'>Name</label>
					<input
						onChange={handleClient}
						className='input'
						name='username'
						type='text'
						id='name'
						value={val}
					/>
					<label className='label'>Email</label>
					<input
						onChange={handleClient}
						className='input'
						type='email'
						name='email'
						value={val}
					/>
					<label className='label'>Password</label>
					<input
						onChange={handleClient}
						className='input'
						type='password'
						name='password'
						value={val}
					/>

					<button className='btn' type='submit' onClick={submitClient}>
						Submit
					</button>
				</form>
			) : null}
			{business ? (
				<form
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<>
						<div>
							<label className='label'>Name</label>
							<input
								onChange={handleBusiness}
								className='input'
								name='username'
								type='text'
								id='name'
							/>
						</div>
						<div>
							<label className='label'>Email</label>
							<input
								onChange={handleBusiness}
								className='input'
								type='email'
								name='email'
							/>
						</div>
						<div>
							<label className='label'>Password</label>
							<input
								onChange={handleBusiness}
								className='input'
								type='password'
								name='password'
							/>
						</div>

						<div>
							<label className='label'>Address</label>
							<input
								type='text'
								name='address'
								id='address'
								onChange={handleBusiness}
							/>
						</div>

						<div>
							<label className='label'>Neighbor</label>
							<input
								type='text'
								name='neighbor'
								id='neighbor'
								onChange={handleBusiness}
							/>
						</div>

						<div>
							<label className='label'>Cuisine</label>
							<input
								type='text'
								name='cuisine'
								id='cuisine'
								onChange={handleBusiness}
							/>
						</div>
					</>
					<button className='btn' type='submit' onClick={submitBusiness}>
						Submit
					</button>
				</form>
			) : null}
			<button type='button' onClick={() => history.push("/")}>
				Go home
			</button>
		</div>
	);
}
