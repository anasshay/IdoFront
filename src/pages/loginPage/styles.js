import styled from "styled-components";

export const MainPageWrapper = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  height: 100vh;
  width: 50%;
  background-color: ${(props) => props.backgroundColor};
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const RightContainer = styled.div`
  height: 100vh;
  width: 50%;
  background-image: linear-gradient(
    ${(props) => props.backgroundColorStart},
    ${(props) => props.backgroundColorEnd}
  );
`;

export const LoginFormWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
`;

export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 20px;
  padding: 10px;
  color: ${(props) => props.textColor};
  margin-top: 30px;
`;
