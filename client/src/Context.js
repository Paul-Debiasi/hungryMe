import { createContext, useState } from "react";

export const HungryMeContext = createContext();

export default function HungryMeContextProvider({ children }) {
	const [businessUser, setBusinessUser] = useState({});
	const [clientUser, setClientUser] = useState({});
	const [menu, setMenu] = useState([]);
	const [cart, setCart] = useState([]);

	return (
		<HungryMeContext.Provider
			value={{
				businessUser,
				setBusinessUser,
				clientUser,
				setClientUser,
				menu,
				setMenu,
				cart,
				setCart,
			}}
		>
			{children}
		</HungryMeContext.Provider>
	);
}
