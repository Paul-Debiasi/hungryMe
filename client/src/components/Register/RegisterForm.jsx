import { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { HungryMeContext } from "../../Context";
import axios from "axios";

import { Form, Col, Button, Row } from "react-bootstrap";

export default function RegisterForm() {
  const { menu, setMenu, clientUser, setClientUser } =
    useContext(HungryMeContext);
  const [business, setBusiness] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");

  //const [client, setClient] = useState(false);

  //console.log("Client ", client);
  //console.log("business", business);

  const handleClient = (e) => {
    e.preventDefault();
    console.log("response is");
    setClientUser({
      ...clientUser,
      id: uuidv4(),
      client: true,
      favorites: [],
      [e.target.name]: e.target.value,
      businessUser: business,
    });
  };

  const submitClient = async (e) => {
    e.preventDefault();

    const data = clientUser;
    console.log("Submitting !!", data);
    const response = await axios.post("/register", data);
    console.log(response);
  };

  console.log(clientUser);

  return (
    <Form>
      <div>
        <h1>User Registration</h1>
      </div>
      <input
        type="radio"
        value="business"
        name="gender"
        onChange={() => {
          setBusiness(false);

          console.log("buisnes is from buisnes?", business);
        }}
      />{" "}
      Client
      <input
        type="radio"
        value="client"
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
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control value={address} placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control value={city} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control value={city} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                required
                label="Agree with terms and conditions"
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={submitClient}>
              Submit
            </Button>
          </Form>
        )}
      </form>
    </Form>
  );
}
