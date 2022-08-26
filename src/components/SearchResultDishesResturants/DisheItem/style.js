import styled from "styled-components";

export const StyledDisheItem = styled.div`
  border: 1px solid #d6d6d6;
  display: grid;
  grid-template-columns: max-content 2fr max-content;
  border-radius: 5px;
  margin-bottom: 10px;
`;
export const StyledImage = styled.div`
  width: 220px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const StyledDisheItemInfo = styled.div`
  padding: 10px 20px;

  h3 {
    padding-bottom: 20px;
  }
  p {
    color: rgb(22, 163, 22);
    font-weight: 700;
    font-size: 17px;
  }
`;

export const StyledDisheItemAdd = styled.div`
  padding: 0 30px 10px 0;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    background-color: rgb(22, 163, 22);
    color: white;

    font-weight: 600;
    line-height: 2;
    padding: 0px 10px;
    border-radius: 20px;
  }
`;
