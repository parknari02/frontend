import styled from 'styled-components';

const categories = ['경제', '사회', '스포츠', '정치'];

const CategoryButtons = () => {
  return (
    <CategoryContainer>
      {categories.map((category, index) => (
        <CategoryWrapper key={index}>
          <CategoryButton />
          <CategoryLabel>{category}</CategoryLabel>
        </CategoryWrapper>
      ))}
    </CategoryContainer>
  );
};

export default CategoryButtons;


const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CategoryButton = styled.div`
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0px 1px 10px 0px #0000001A;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CategoryLabel = styled.div`
  text-align: center;
  margin-top: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.gray};
  font-weight: 500;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
