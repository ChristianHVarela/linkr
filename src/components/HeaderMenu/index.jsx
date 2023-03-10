import { RxMagnifyingGlass } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import {
  DesktopMenu,
  DesktopSearchBox,
  HeaderMenuContainer,
  Logout,
  MobileMenu,
  SearchResult,
} from "./styles";
import { AuthContext } from "../../contexts/authContext";
import api from "../../config/api";
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

  function logout() {
    localStorage.clear();
    setImage('');
    setToken('');

    navigate('/');
  }

  return (
    <>
      <HeaderMenuContainer showMenu={showMenu}>
        <DesktopMenu showLogout={showLogout} onSubmit={submitSearch}>
          <h1>linkr</h1>
          <DesktopSearchBox searchQuery={searchQuery}>
            <DebounceInput
              debounceTimeout={300}
              forceNotifyByEnter={true}
              type="text"
              placeholder="Search for people"
              value={searchQuery}
              onChange={(e) => searchingUser(e)}
            />
            <button type="submit">
              <RxMagnifyingGlass />
            </button>
            <SearchResult searchQuery={searchQuery}>
              {searchResults.map((m) => (
                <div key={m.id}>
                  <img src={m.image} alt="" />
                  <p>{m.name}</p>
                </div>
              ))}
            </SearchResult>
          </DesktopSearchBox>
          <div className="profile" onClick={logoutButton}>
            <MdOutlineKeyboardArrowDown className="arrowDown" />
            <MdKeyboardArrowUp className="arrowUp" />
            <img src={image} alt="" />
            <Logout showLogout={showLogout}>
              <div onClick={logout} className="logout">
                <h3>Logout</h3>
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
