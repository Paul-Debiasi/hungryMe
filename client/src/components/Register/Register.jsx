import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { HungryMeContext } from "../../Context";
import axios from "axios";
import "./Register.scss";

export default function Register() {
	const {
		businessUser,
		setBusinessUser,
		clientUser,
		setClientUser,
		setCurrentUser,
		currentUser,
	} = useContext(HungryMeContext);
	const [business, setBusiness] = useState(false);
	// const [firstName, setFirstName] = useState("");
	// const [lastName, setLastName] = useState("");
	// const [phoneNumber, setPhoneNumber] = useState("");
	// const [val, setVal] = useState([""]);
	let history = useNavigate();
	const saveUserToLocal = (user) => {
		const stringUser = JSON.stringify(user);
		localStorage.setItem("authorizedUser", stringUser);
	};

	const handleClient = (e) => {
		e.preventDefault();
		console.log("response is");
		setClientUser({
			...clientUser,
			id: uuidv4(),
			favorites: [],
			client: true,
			businessUser: business,
			[e.target.name]: e.target.value,
		});
	};

	const handleBusiness = (e) => {
		e.preventDefault();
		console.log("response is");
		setBusinessUser({
			...businessUser,
			id: uuidv4(),
			favorites: [],
			client: true,
			businessUser: business,
			[e.target.name]: e.target.value,
		});
	};

	const submitClient = async (e) => {
		e.preventDefault();

		const data = clientUser;
		console.log("Submitting !!", data);
		const response = await axios.post("/register", data);
		console.log("response is", response);
		setCurrentUser(response?.data.user);
		saveUserToLocal(response?.data.user);
		history("/profile");
	};

	const submitBusiness = async (e) => {
		e.preventDefault();

		const data = businessUser;
		console.log("Submitting !!", data);
		const response = await axios.post("/register", data);
		console.log("response is", response);
		setCurrentUser(response?.data.user);
		saveUserToLocal(response?.data.user);
		history("/profile");
	};

	return (
		<div className='registerForm'>
			<div>
				<h1>User Registration</h1>
			</div>
			<input
				type='radio'
				value='client'
				name='gender'
				defaultChecked
				onChange={() => {
					setBusiness(false);
				}}
			/>{" "}
			Client
			<input
				type='radio'
				value='business'
				name='gender'
				onChange={() => {
					setBusiness(true);
				}}
			/>{" "}
			Business owner
			{!business ? (
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

					<button className='btn' type='submit' onClick={submitClient}>
						Submit
					</button>
				</form>
			) : (
				<>
					<form>
						<label className='label'>First Name</label>
						<input
							// value={firstName}
							onChange={handleBusiness}
							type='text'
							name='username'
							id='neighbor'
						/>
						<label className='label'>First Name</label>
						<input
							// value={firstName}
							onChange={handleBusiness}
							type='text'
							name='firstName'
							id='neighbor'
						/>
						<label className='label'>Last name</label>
						<input
							// value={lastName}
							type='text'
							name='lastName'
							id='cuisine'
							onChange={handleBusiness}
						/>
						<label className='label'>Email</label>
						<input
							onChange={handleBusiness}
							className='input'
							type='email'
							name='email'
						/>
						<label className='label'>Password</label>
						<input
							onChange={handleBusiness}
							className='input'
							type='password'
							name='password'
						/>
						<label className='label'>Phone number</label>
						<input
							// value={phoneNumber}
							onChange={handleBusiness}
							type='text'
							name='phoneNumber'
							id='address'
						/>
						<button className='btn' type='submit' onClick={submitBusiness}>
							Submit
						</button>
					</form>
				</>
			)}
		</div>
	);
}
