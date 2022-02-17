import { HungryMeContext } from "../../Context";
import { useContext } from "react";

export default function Profile() {
  const { currentUser, isLoggedIn } = useContext(HungryMeContext);
  if (isLoggedIn && currentUser?.username)
    return (
      <div className="profileContainer">
        <h1>Successful log in {currentUser.username} :)</h1>
        <img src={currentUser.avatar} alt="Profile" />
        <p>Your name: {currentUser.name}</p>
        <p>Your city: {currentUser.city}</p>
        <p>Your email: {currentUser.email}</p>
      </div>
    );
  else return <div>Hello stranger</div>;
}
