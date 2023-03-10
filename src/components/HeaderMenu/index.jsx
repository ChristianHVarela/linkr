import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { DesktopMenu, HeaderMenuContainer, Logout, MobileMenu } from "./styles";
import { AuthContext } from "../../contexts/authContext";
import DesktopSearchBar from "../DesktopSearchBox";
import { useNavigate } from "react-router";


export default function HeaderMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const [showLogout, setShowLogout] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const { token, setToken, image, setImage } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (token !== "") {
      setShowMenu(true);
    }
    else
    {
      setShowMenu(false);
    }
  }, [token]);


  function logoutButton() {
    const closeLogout = (e) => {
      if (e.target.parentNode.classList[0] !== 'profile') setShowLogout(false);
      document.body.removeEventListener('mouseup', closeLogout);
    };

    if (showLogout)
    {
      setShowLogout(false);
    }
    else
    {
      setShowLogout(true);
      document.body.addEventListener('mouseup', closeLogout);
    }
  }

  function submitSearch(event) {
    event.preventDefault();
    console.log("ok");
  }

  function logout() {
    localStorage.clear();
    setImage('');
    setToken('')

    navigate('/')
  }

  return (
    <>
      <HeaderMenuContainer showMenu={showMenu}>
        <DesktopMenu showLogout={showLogout} onSubmit={submitSearch}>
          <h1 onClick={() => navigate("/timeline")}>linkr</h1>

          <DesktopSearchBar
          searchResults={searchResults} searchQuery={searchQuery} setSearchResults={setSearchResults} setSearchQuery={setSearchQuery}
          />

          <div className="profile" onClick={logoutButton}>
            <MdOutlineKeyboardArrowDown className="arrowDown" />
            <MdKeyboardArrowUp className="arrowUp" />
            <img data-test="avatar" src={image} alt="" />
            <Logout showLogout={showLogout}>
              <div data-test="menu" onClick={logout} className="logout">
                <h3 data-test="logout" >Logout</h3>
              </div>
            </Logout>
          </div>
        </DesktopMenu>
        <MobileMenu>
          <div>
            <h1>LINKR</h1>
            <div className="profile" onClick={logoutButton}>
              <MdOutlineKeyboardArrowDown className="arrowDown" />
              <MdKeyboardArrowUp className="arrowUp" />
              <img src={image} alt="" />
            </div>
          </div>
        </MobileMenu>
        {/*
        <MobileSearchBox>
          teste
          <div className="search-box">
            <input type="text" placeholder="Search for people" />
            <button type="submit">
              <RxMagnifyingGlass />
            </button>
          </div>
        </MobileSearchBox> */}
      </HeaderMenuContainer>


    </>
  );
}
