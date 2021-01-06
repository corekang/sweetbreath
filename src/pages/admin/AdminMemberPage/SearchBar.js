import { SearchContent, SelectArea, TextArea, SearchButton } from "./style";

export default function SearchBar({
  searchType,
  searchText,
  handleSearchType,
  handleSearchText,
  rawData,
  setMembers,
}) {
  const handleSearch = () => {
    const result = rawData.filter(
      (member) =>
        String(member[String(searchType)]).indexOf(String(searchText)) === 0
    );
    setMembers(result);
  };
  return (
    <SearchContent>
      <SelectArea
        value={searchType}
        onChange={(e) => {
          handleSearchType(e.target.value);
        }}
      >
        <option value="id">id</option>
        <option value="username">username</option>
        <option value="fullname">名稱</option>
      </SelectArea>
      <TextArea
        type="text"
        valur={searchText}
        onChange={(e) => handleSearchText(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>搜尋</SearchButton>
    </SearchContent>
  );
}
