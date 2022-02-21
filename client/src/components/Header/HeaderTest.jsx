import { useState, useEffect, useContext } from "react";
import { HungryMeContext } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import LogIn from "../LogIn/LogIn";
import PrimarySearchAppBar from "./Headertest";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Header() {
  /* MODAL----------------- */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  /* MODAL----------------- */
  const { menu, setMenu, isLoggedIn, setIsLoggedIn, currentUser } =
    useContext(HungryMeContext);

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
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <div>Logo</div>
      <input
        onChange={handleChange}
        type="search"
        name=""
        id=""
        placeholder="Search..."
      />
      <button onClick={handleOpen}>Log in </button>
      <Modal
        open={open}
        onClose={currentUser.username ? handleClose : handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="logInModal" sx={style}>
          <LogIn />
        </Box>
      </Modal>
      <Link to="/register">Register</Link>
    </div>
  );
}
