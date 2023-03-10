import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/authContext.js";
import { LogoContainer } from "./homeStyles.js";

export default function HomeLogo() {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (token !== "") {
            navigate('/timeline');
        }
    }, [token]);


    return (
        <LogoContainer>
            <h1>linkr</h1>
            <h2>save, share and discover the best links on the web</h2>
        </LogoContainer>
    );
}