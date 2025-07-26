import styled from 'styled-components';
import searchIcon from '../../assets/icons/search.svg';

const SearchBar = () => {
  return (
    <SearchInput>
      <SearchText>✷ Search</SearchText>
      <SearchIcon src={searchIcon} alt="search" />
    </SearchInput>
  );
};

export default SearchBar;

const SearchInput = styled.div`
  background-color: ${({ theme }) => theme.mainLight};
  border-radius: 40px;
  padding: 13px 20px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 12px;
  font-weight: 700;
  height: 40px;
`;

const SearchText = styled.span`
  flex: 1;
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`;