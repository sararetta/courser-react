import styled from "styled-components";

export const StyledSearchResultDishesResturants = styled.div`
  border-top: 1px solid #d6d6d6;
  padding: 14px 0;
`;
export const StyledOptions = styled.div`
  display: flex;
  gap: 20px;
`;
export const StyledOption = styled.div`
  cursor: pointer;

  p {
    font-size: 17px;
    padding-bottom: 10px;
    color: ${({ isSelected }) => (isSelected ? "black" : "rgba(0, 0, 0, 0.5)")};
    font-weight: 700;
    border-bottom: ${({ isSelected }) =>
      isSelected ? "5px solid red " : "none"};
  }
`;
export const StyledDishes = styled.div`
  padding: 20px 0;
`;
export const StyledResturants = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 15px;
`;
