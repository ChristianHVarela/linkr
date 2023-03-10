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
    } else {
      setShowMenu(false);
    }
  }, [token]);

  function logoutButton() {
    const closeLogout = (e) => {
      if (e.target.parentNode.classList[0] !== "profile") setShowLogout(false);
      document.body.removeEventListener("mouseup", closeLogout);
    };

    if (showLogout) {
      setShowLogout(false);
    } else {
      setShowLogout(true);
      document.body.addEventListener("mouseup", closeLogout);
    }
  }

  function submitSearch(event) {
    event.preventDefault();
    console.log("ok");
  }

  function logout() {
    localStorage.clear();
    setImage("");
    setToken("");
    navigate("/");
  }

  return (
    <>
      <HeaderMenuContainer showMenu={showMenu}>
        <DesktopMenu showLogout={showLogout} onSubmit={submitSearch}>
          <h1>linkr</h1>

          <DesktopSearchBar
            searchResults={searchResults}
            searchQuery={searchQuery}
            setSearchResults={setSearchResults}
            setSearchQuery={setSearchQuery}

          />

          <div className="profile" onClick={logoutButton}>
            <MdOutlineKeyboardArrowDown className="arrowDown" />
            <MdKeyboardArrowUp className="arrowUp" />
            <img src={image} alt="" />
          </div>
        </DesktopMenu>

        <MobileMenu>
          <div>
            <h1>linkr</h1>
            <DesktopSearchBar
              searchResults={searchResults}
              searchQuery={searchQuery}
              setSearchResults={setSearchResults}
              setSearchQuery={setSearchQuery}
            />
            <div className="profile" onClick={logoutButton}>
              <MdOutlineKeyboardArrowDown className="arrowDown" />
              <MdKeyboardArrowUp className="arrowUp" />
              <img src={image} alt="" />
            </div>
          </div>
        </MobileMenu>
      </HeaderMenuContainer>

      <Logout showLogout={showLogout}>
        <div onClick={logout} className="logout">
          <h3>Logout</h3>
        </div>
      </Logout>
    </>
  );
}
