import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useContext, useEffect, useState } from "react";

import { DesktopMenu, HeaderMenuContainer, Logout, MobileMenu } from "./styles";
import { AuthContext } from "../../contexts/authContext";
import DesktopSearchBar from "../DesktopSearchBox";
import api from "../../config/api";

export default function HeaderMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const [showLogout, setShowLogout] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const { token, image } = useContext(AuthContext);

  useEffect(() => {
    if (token !== "") {
      setShowMenu(true);
    }
  }, [token]);

  async function searchingUser(e) {
    setSearchQuery(e.target.value);
    const searchText = { searchQuery: e.target.value };
    console.log(searchText);
    if (searchText.searchQuery.length >= 3) {
      try {
        const searchResult = await api.post("/user", searchText);
        setSearchResults(searchResult.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  function submitSearch(event) {
    event.preventDefault();
    console.log("ok");
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

          <div className="profile" onClick={() => setShowLogout(!showLogout)}>
            <MdOutlineKeyboardArrowDown className="arrowDown" />
            <MdKeyboardArrowUp className="arrowUp" />
            <img src={image} alt="" />
          </div>
        </DesktopMenu>

        <MobileMenu>
          <div>
            <h1>LINKR</h1>
            <div className="profile" onClick={() => setShowLogout(!showLogout)}>
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

      <Logout showLogout={showLogout}>
        <div>
          <h3>Logout</h3>
        </div>
      </Logout>
    </>
  );
}
