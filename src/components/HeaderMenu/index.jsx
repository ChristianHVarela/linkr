import { RxMagnifyingGlass } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";
import { DesktopMenu, HeaderMenuContainer, Logout, MobileMenu } from "./styles";

export default function HeaderMenu() {
  const MOCK_IMAGE = "https://wallpaperaccess.com/full/641507.jpg";

  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <HeaderMenuContainer>
        <DesktopMenu showLogout={showLogout}>
          <h1>linkr</h1>
          <div className="search-box">
            <input type="text" placeholder="Search for people" />
            <button type="submit">
              <RxMagnifyingGlass />
            </button>
          </div>
          <div className="profile" onClick={() => setShowLogout(!showLogout)}>
            <MdOutlineKeyboardArrowDown className="arrowDown" />
            <MdKeyboardArrowUp className="arrowUp" />
            <img src={MOCK_IMAGE} alt="" />
          </div>
        </DesktopMenu>

        <MobileMenu>
          <div>
            <h1>LINKR</h1>
            <div className="profile" onClick={() => setShowLogout(!showLogout)}>
              <MdOutlineKeyboardArrowDown className="arrowDown" />
              <MdKeyboardArrowUp className="arrowUp" />
              <img src={MOCK_IMAGE} alt="" />
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

