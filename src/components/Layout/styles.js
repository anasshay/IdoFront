import styled from "styled-components";

export const Header = styled.header`
  margin: 0;
  height: 55px;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  padding: 5px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* position: fixed; */
`;

export const Logo = styled.img`
  height: 100%;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SearcInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: ${(props) => props.show && "1px solid #fff"};
  border-radius: 20px;
  padding: 5px 30px;
  width: 400px;
  transition: all 0.3s ease-in-out;
`;
export const Input = styled.input`
  background-color: transparent;
  color: #fff;
  border: none;
  outline: none;
  width: 350px;
`;
export const SearchImage = styled.img`
  cursor: pointer;
  height: 26px;
  border-radius: 50%;
`;
export const AddIcon = styled.img`
  cursor: pointer;
  height: 26px;
  border-radius: 50%;
`;
export const UserProfile = styled.img`
  cursor: pointer;
  height: 35px;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
  }
`;

export const UserDetails = styled.div`
  position: absolute;
  top: 50px;
  right: 10px;
  display: flex;
  height: 100px;
  width: 250px;
  background-color: ${(props) => props.backgroundColor};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const TipBar = styled.div`
  /* position: fixed; */
  top: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  padding: 0 30px;
  background-image: linear-gradient(
    ${(props) => props.gradientStart},
    ${(props) => props.gradientEnd}
  );
`;

export const ColsedTipBar = styled.div`
  top: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  padding: 0 30px;
  background-color: #5b5e60;
`;
export const CloseButton = styled.img`
  cursor: pointer;
  height: 25px;
  width: 25px;
  border: none;
`;
export const OpenButton = styled.img`
  position: absolute;
  right: 30px;
  top: 65px;
  cursor: pointer;
  height: 25px;
  width: 25px;
  border: none;
`;

export const UserDetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  z-index: 4;
`;
export const UserImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 20%;
`;
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
export const Logout = styled.div`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
