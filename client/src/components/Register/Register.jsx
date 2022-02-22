import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { HungryMeContext } from "../../Context";
import axios from "axios";
import "./Register.scss";

export default function Register() {
  const { menu, setMenu, clientUser, setClientUser } =
    useContext(HungryMeContext);
  const [business, setBusiness] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClient = (e) => {
    e.preventDefault();
    console.log("response is");
    setClientUser({
      ...clientUser,
      id: uuidv4(),
      favorites: [],
      client: true,
      [e.target.name]: e.target.value,
      businessUser: business,
      phoneNumber: phoneNumber,
      firstName: firstName,
      lastName: lastName,
    });
  };

  const submitClient = async (e) => {
    e.preventDefault();

    const data = clientUser;
    console.log("Submitting !!", data);
    const response = await axios.post("/register", data);
    console.log("response is", response);
  };

  console.log(clientUser);

  return (
    <div className="registerForm">
      <div>
        <h1>User Registration</h1>
      </div>
      <input
        type="radio"
        value="client"
        name="gender"
        defaultChecked
        onChange={() => {
          setBusiness(false);
        }}
      />{" "}
      Client
      <input
        type="radio"
        value="business"
        name="gender"
        onChange={() => {
          setBusiness(true);
        }}
      />{" "}
      Business owner
      <form>
        <label className="label">Name</label>
        <input
          onChange={handleClient}
          className="input"
          name="username"
          type="text"
          id="name"
        />
        <label className="label">Email</label>
        <input
          onChange={handleClient}
          className="input"
          type="email"
          name="email"
        />
        <label className="label">Password</label>
        <input
          onChange={handleClient}
          className="input"
          type="password"
          name="password"
        />
        {!business ? (
          <button className="btn" type="submit" onClick={submitClient}>
            Submit
          </button>
        ) : (
          <>
            <label className="label">Phone number</label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              name="address"
              id="address"
            />
            <label className="label">First Name</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="cousine"
              id="neighbor"
            />
            <label className="label">Last name</label>
            <input
              value={lastName}
              type="text"
              name="restaurant"
              id="cuisine"
              onChange={(e) => setLastName(e.target.value)}
            />
            <button className="btn" type="submit" onClick={submitClient}>
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
}
