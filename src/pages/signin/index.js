import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLogo from "../../components/home/homeLogo";
import { FormContainer, HomeStyle } from "../../components/home/homeStyles";
import api from "../../config/api";
import { ThreeDots } from  'react-loader-spinner'
import { AuthContext } from "../../contexts/authContext";

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { setToken, setImage } = useContext(AuthContext);

    function submitSignIn(event) {
        event.preventDefault();
        setLoading(true);
        try
        {
            api.post('/', { email, password })
                .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("image", res.data.image);
                    setToken(res.data.token);
                    setImage(res.data.image);
                    navigate('/timeline');
                })
                .catch(e => {
                    if (e.response.status === 422) alert(e.response.data.join("\n").replaceAll(`"`, ''));
                    else if(e.response.status === 401) alert(e.response.data);
                    else console.log(e.response);
                    setLoading(false);
                });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <HomeStyle>
            <HomeLogo />
            <FormContainer onSubmit={submitSignIn}>
                <input placeholder="email" type='email' data-test="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                <input placeholder="password" type='password' data-test="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                <button type='submit' disabled={loading} data-test="login-btn">
                    {
                        loading ? <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                        /> :
                            <>Log In</>
                    }
                </button>
                <Link data-test="sign-up-link" to={'/signup'}>First time? Create an account!</Link>
            </FormContainer>
        </HomeStyle>
    );
}