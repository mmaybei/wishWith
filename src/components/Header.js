import { React, useContext, useRef, useState } from "react";
import {
  HeaderWrapper,
  Nav,
  MenuWrapper,
  NavLink,
  CategoryLink,
  NavMenu1,
  NavMenu2,
  HSearchForm,
  HInput,
  NavBtn,
  HButton,
  ModalContainer,
  ModalContent,
} from "./HeaderStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { DispatchContext } from "../Router";

const Header = () => {
  const { onSearch } = useContext(DispatchContext);

  const searchRef = useRef();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  const handleSubmit = () => {
    const searchTerm = searchRef.current.value;

    if (searchTerm.length < 1) {
      searchRef.current.focus();
      return;
    }
    navigate("/search");
  };

  const handleUserClick = () => {
    if (isLoggedIn) {
      navigate("/userinfo");
    } else {
      navigate("/login");
    }
  };

  return (
    <HeaderWrapper>
      <Nav>
        <NavMenu1>
          <NavLink to="/" activestyle="true">
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/assets/logo.png"}
              alt="Logo"
            />
          </NavLink>

          <NavBtn>
            {isLoggedIn ? (
              <HButton>사용자 이름</HButton>
            ) : (
              <HButton onClick={() => setModalOpen(true)}>
                로그인/회원가입
              </HButton>
            )}
          </NavBtn>
        </NavMenu1>

        <NavMenu2>
          <MenuWrapper>
            <CategoryLink to="/" activestyle="true">
              홈
            </CategoryLink>
            <CategoryLink to="/category1" activestyle="true">
              식료품
            </CategoryLink>
            <CategoryLink to="/category2" activestyle="true">
              생필품
            </CategoryLink>
            <CategoryLink to="/category3" activestyle="true">
              이화굿즈
            </CategoryLink>
            <CategoryLink to="/category4" activestyle="true">
              기타
            </CategoryLink>
          </MenuWrapper>

          <HSearchForm onSubmit={handleSubmit}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <HInput
              placeholder="상품 키워드를 입력하세요."
              value={searchTerm}
              ref={searchRef}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                onSearch(e.target.value);
              }}
              type="text"
            />
          </HSearchForm>
        </NavMenu2>
      </Nav>
      <hr />
      {modalOpen && (
        <ModalContainer
          ref={modalBackground}
          style={{ zIndex: 9999 }}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <ModalContent>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setModalOpen(false)}
            />
            <p>서비스 사용을 위해</p>
            <p style={{ fontFamily: "Pretendard-SemiBold" }}>
              로그인이 필요해요
            </p>
          </ModalContent>
        </ModalContainer>
      )}
    </HeaderWrapper>
  );
};

export default Header;
