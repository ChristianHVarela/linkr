import { createContext, useState } from "react";
import useStickyState from "../hooks/sticky";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [token, setToken] = useStickyState("", "token");
    const [image, setImage] = useStickyState("", "image");
	const [update, setUpdate] = useState(0);
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};


	return (
		<AuthContext.Provider
			value={{
				token,
				update,
				setToken,
                config,
                image,
                setImage,
				setUpdate
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}