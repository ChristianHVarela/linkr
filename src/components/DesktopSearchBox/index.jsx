import { RxMagnifyingGlass } from "react-icons/rx";
import { DebounceInput } from "react-debounce-input";
import { DesktopSearchBox, SearchResult } from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../../config/api";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";

export default function DesktopSearchBar(props) {
    const { searchResults, searchQuery, setSearchResults, setSearchQuery } = props

    const { config } = useContext(AuthContext)

  const navigate = useNavigate();

  async function searchingUser(e) {
    setSearchQuery(e.target.value);
    const searchText = { searchQuery: e.target.value };
    console.log(searchText);
    if (searchText.searchQuery.length >= 3) {
      try {
        const searchResult = await api.post("/user", searchText, config);
        setSearchResults(searchResult.data);
        console.log(searchResult.data)
      } catch (error) {
        console.log(error);
      }
    }
  }

  function openUser(id) {
    setSearchResults([]);
    setSearchQuery("");
    navigate(`/user/${id}`);
  }

  return (
    <DesktopSearchBox searchResults={searchResults} searchQuery={searchQuery}>
      <DebounceInput
        data-test="search"
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
      <SearchResult searchResults={searchResults} searchQuery={searchQuery}>
        {searchResults.map((m) => (
          <div data-test="user-search" key={m.id} onClick={() => openUser(m.id)}>
            <img src={m.image} alt="" />
            <p>{m.name}</p>
          </div>
        ))}
      </SearchResult>
    </DesktopSearchBox>
  );
}
