import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLogo from "../../components/home/homeLogo";
import { FormContainer, HomeStyle } from "../../components/home/homeStyles";
import api from "../../config/api";
import { ThreeDots } from  'react-loader-spinner'

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function submitSignUp(event) {
        event.preventDefault();
        setLoading(true);
        try
        {
            api.post('/signup', { email, password, name, image })
                .then(() => navigate('/'))
                .catch(e => {
                    if (e.response.status === 422) alert(e.response.data.join("\n").replaceAll(`"`, ''));
                    else if(e.response.status === 409) alert(e.response.data);
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
            <FormContainer onSubmit={submitSignUp}>
                <input placeholder="email" data-test="email" type='email' value={email} onChange={ (e) => setEmail(e.target.value) } />
                <input placeholder="password" data-test="password" type='password'  value={password} onChange={ (e) => setPassword(e.target.value) } />
                <input placeholder="username" data-test="username" type='text'  value={name} onChange={ (e) => setName(e.target.value) } />
                <input placeholder="picture url" data-test="picture-url" type='text'  value={image} onChange={ (e) => setImage(e.target.value) } />
                <button type='submit' disabled={loading} data-test="sing-up-btn">
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
                            <>Sign Up</>
                    }
                </button>
                <Link data-test="login-link" to={'/'}>Switch back to log in</Link>
            </FormContainer>
        </HomeStyle>
    );
}