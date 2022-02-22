import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { HungryMeContext } from "../../Context";
import axios from "axios";
import "./Register.scss";

export default function Register() {
  const { menu, setMenu, clientUser, setClientUser } =
    useContext(HungryMeContext);
  const [business, setBusiness] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [cousineType, setCousineType] = useState("");
  const [address, setAddress] = useState("");

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
      address: address,
      companyName: companyName,
      cousineType: cousineType,
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

          console.log("buisnes is from buisnes?", business);
        }}
      />{" "}
      Client
      <input
        type="radio"
        value="business"
        name="gender"
        onChange={() => {
          setBusiness(true);
          console.log("buisnes is from client?", business);
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
            <label className="label">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              name="address"
              id="address"
            />
            <label className="label">Cousine Type</label>
            <input
              value={cousineType}
              onChange={(e) => setCousineType(e.target.value)}
              type="text"
              name="cousine"
              id="neighbor"
            />
            <label className="label">Company name</label>
            <input
              value={companyName}
              type="text"
              name="restaurant"
              id="cuisine"
              onChange={(e) => setCompanyName(e.target.value)}
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
