import React from "react";
import { colors } from "../../config/styles";
import {
  Button,
  Input,
  LeftContainer,
  LoginForm,
  LoginFormWrapper,
  MainPageWrapper,
  RightContainer,
} from "./styles";
import bkImage from "../../assets/bk.png";

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <MainPageWrapper>
      <LeftContainer
        backgroundColor={colors.backgroundColors.loginPageColor}
        backgroundImage={bkImage}
      ></LeftContainer>
      <RightContainer
        backgroundColorStart={colors.backgroundColors.loginGradiantStart}
        backgroundColorEnd={colors.backgroundColors.loginGradiantEnd}
      >
        <LoginFormWrapper>
          <h1 style={{ color: "#fff", width: "60%", fontWeight: "lighter" }}>
            Time to Work!
          </h1>
          <LoginForm>
            <label style={{ color: "#fff" }} for="email">
              Email
            </label>
            <Input
              type="Email"
              name="email"
              backgroundColor={
                colors.backgroundColors.inputFieldBackgroundColor
              }
              onChange={(e) => handleChange(e)}
            />
            <label style={{ color: "#fff" }} for="password">
              Password
            </label>
            <Input
              name="password"
              type="password"
              backgroundColor={
                colors.backgroundColors.inputFieldBackgroundColor
              }
              onChange={(e) => handleChange(e)}
            />
            <Button
              backgroundColor={colors.backgroundColors.buttonBackgroundColor}
              textColor={colors.backgroundColors.buttonTextColor}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </LoginForm>
        </LoginFormWrapper>
      </RightContainer>
    </MainPageWrapper>
  );
}

export default LoginPage;
