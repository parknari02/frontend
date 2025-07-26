import styled from 'styled-components';
import searchIcon from '../../assets/icons/search.svg';

const SearchBar = () => {
  return (
    <SearchInputWrapper>
      <SearchField type="text" placeholder="✷ Search" />
      <SearchIcon src={searchIcon} alt="search" />
    </SearchInputWrapper>
  );
};

export default SearchBar;

const SearchInputWrapper = styled.label`
  background-color: ${({ theme }) => theme.mainLight};
  border-radius: 40px;
  padding: 13px 20px;
  display: flex;
  align-items: center;
  height: 40px;
  gap: 8px;
`;

const SearchField = styled.input`
  background: transparent;
  border: none;
  outline: none;
  flex: 1;
  color: white;
  font-size: 12px;
  font-weight: 700;

  &::placeholder {
    color: white;
  }
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;