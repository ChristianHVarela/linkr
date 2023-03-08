import { createContext } from "react";
import useStickyState from "../hooks/sticky";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [token, setToken] = useStickyState("", "token");
    const [image, setImage] = useStickyState("", "image");
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	return (
		<AuthContext.Provider
			value={{
				token,
				setToken,
                config,
                image,
                setImage
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}