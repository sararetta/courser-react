import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  box-shadow: 1px 4px 4px #e1e1e1;
  background-color: white;
  z-index: 2000;

  a {
    height: 62px;
    background-color: green;
    border: none;
    background-color: transparent;
    margin-right: 20px;
  }
  a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const StyledSearch = styled.div`
  width: 500px;
  border-radius: 30px;
  padding: 8px 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgb(22, 163, 22);
  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
  }
`;
export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const StyledHeaderSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-weight: 700;
    color: rgb(22, 163, 22);
    font-size: 14px;
  }
`;

export const StyledCart = styled.div`
  position: relative;
  span {
    width: 15px;
    height: 15px;
    background-color: red;
    position: absolute;
    right: -2px;
    top: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 10px;
    font-weight: 700;
    border-radius: 50%;
  }
`;
