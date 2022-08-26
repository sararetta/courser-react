import styled from "styled-components";

export const StyledResturantItem = styled.div`
  border: 1px solid #d6d6d6;
  display: grid;
  border-radius: 5px;
`;
export const StyledImage = styled.div`
  height: 150px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    bottom: 0;
    background-color: green;
    left: 10px;
    padding: 5px 12px;
    color: white;
    border-radius: 5px 5px 0 0;
    font-size: 15px;
    font-weight: 600;
  }
`;
export const StyledResturantItemInfo = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const StyledResturantItemInfoRight = styled.div`
  h1 {
    padding-bottom: 7px;
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.8);
  }
  h3 {
    padding-bottom: 13px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.4);
  }

  p {
    padding-bottom: 23px;
    font-size: 15px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.8);
  }
`;
export const StyledResturantItemInfoLeft = styled.div`
  background-color: rgb(22, 163, 22);
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  p {
    color: white;
    font-size: 13px;
    font-weight: 500;
    line-height: 2;
    padding: 0px 15px;
  }
`;
