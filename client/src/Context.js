import { createContext, useState } from "react";

export const HungryMeContext = createContext();

export default function HungryMeContextProvider({ children }) {
	const [businessUser, setBusinessUser] = useState({
		username: "",
		email: "",
		password: "",
		phoneNumber: "",
		firstName: "",
		lastName: "",
	});
	const [business, setBusiness] = useState(false);
	const [clientUser, setClientUser] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [menu, setMenu] = useState([]);
	const [cart, setCart] = useState([]);
	const [businessUserArray, setBusinessUserArray] = useState([]);
	const [clientUserArray, setClientUserArray] = useState([]);
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem("authorizedUser")) || {}
	);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const [filtered, setFiltered] = useState([]);
	return (
		<HungryMeContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				currentUser,
				setCurrentUser,
				businessUser,
				setBusinessUser,
				businessUserArray,
				setBusinessUserArray,
				clientUser,
				setClientUser,
				clientUserArray,
				setClientUserArray,
				menu,
				setMenu,
				cart,
				setCart,
				favorites,
				setFavorites,
				filtered,
				setFiltered,
			}}
		>
			{children}
		</HungryMeContext.Provider>
	);
}
