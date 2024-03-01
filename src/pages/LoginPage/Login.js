import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { Container } from "../../Layout";
import { LTitle } from "./LoginStyle";

const Login = () => {
  const idInput = useRef();
  const passwordInput = useRef();
  const navigate = useNavigate();

  const [state, setState] = useState({
    id: "",
    password: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.id.length < 1) {
      idInput.current.focus();
      return;
    }

    if (state.password.length < 1) {
      passwordInput.current.focus();
      return;
    }
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  const handleFindId = () => {
    navigate("/findId");
  };

  const handleFindPw = () => {
    navigate("/findPw");
  };
  return (
    <>
      <Header />
      <Container>
        <LTitle>로그인</LTitle>
      </Container>
    </>
  );
};

export default Login;
