import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  hr {
    width: 100%;
    margin: 8px 0 0;
    border: #f5f5f5 1px solid;
  }
`;

export const Nav = styled.nav`
  font-family: "Pretendard-Medium";
  color: #2c2c2c;
  display: flex;
  flex-direction: column;
  width: 1280px;
  margin: 75px auto 0;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const NavMenu1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const NavMenu2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 24px;
  padding-right: 24px;
`;

export const MenuWrapper = styled.nav`
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #2c2c2c;
  display: flex;
  justify-content: space-between;

  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  width: 192px;
  margin-right: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #9a9a9a;
  }

  img {
    height: 36px;
  }
`;

export const CategoryLink = styled(Link)`
  color: #2c2c2c;
  display: flex;
  justify-content: space-between;

  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  margin-right: 48px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #00664f;
  }
`;

export const HSearchForm = styled.form`
  background-color: #f5f5f5;
  border-radius: 4px;
  display: flex;
  width: 228px;
  height: 33px;
  align-items: center;
  padding: 0 10px;

  svg {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
`;

export const HInput = styled.input`
  border: none;
  background-color: #f5f5f5;
  width: 100%;

  font-family: "Pretendard-Regular";
  font-size: 14px;
  color: #2c2c2c;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`;

export const HButton = styled.button`
  height: 36px;
  border-radius: 4px;
  background-color: #f5f5f5;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 600;
  color: #5bab93;
  padding: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #9a9a9a;
  }
`;

export const ModalContainer = styled.div`
  p {
    font-family: "Pretendard-Regular";
    color: #2c2c2c;
    margin-top: 4px;
    margin-bottom: 4px;
  }
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
export const ModalContent = styled.div`
  background-color: #ffffff;
  width: 250px;
  height: 150px;
  padding: 15px;
`;
