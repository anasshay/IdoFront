import React from "react";
import { colors } from "../../config/styles";
import {
  AddIcon,
  CloseButton,
  ColsedTipBar,
  Header,
  Input,
  Logo,
  Logout,
  OpenButton,
  SearchBarWrapper,
  SearchImage,
  SearcInput,
  TipBar,
  UserData,
  UserDetails,
  UserDetailsWrapper,
  UserImage,
  UserProfile,
} from "./styles";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import addIcon from "../../assets/add.png";
import closeIcon from "../../assets/x.png";
import iIcon from "../../assets/i.png";
import logoutIcon from "../../assets/logout.png";

function Layout(props) {
  const [showSearch, sethowSearch] = React.useState(false);
  const [showTipBar, setshowTipBar] = React.useState(true);
  const [showUserProfile, setshowUserProfile] = React.useState(false);
  const [searchValue, setsearchValue] = React.useState("");

  return (
    <>
      <Header backgroundColor={colors.backgroundColors.headerBackgroundColor}>
        <Logo src={logo} />
        <SearchBarWrapper>
          <SearcInput show={showSearch}>
            {showSearch && (
              <Input
                type="text"
                placeholder="What are you looking for?"
                onChange={(e) => {
                  setsearchValue(e.target.value);
                  props.handleSearch(e.target.value);
                }}
              />
            )}
            <SearchImage
              src={searchIcon}
              alt="Search"
              onMouseOver={() => {
                sethowSearch(true);
              }}
            />
          </SearcInput>
          <AddIcon src={addIcon} onClick={props.handleAddClick} />
          <UserProfile
            src="https://via.placeholder.com/150"
            onClick={() => {
              setshowUserProfile(!showUserProfile);
            }}
          />
          {showUserProfile && (
            <UserDetails
              backgroundColor={colors.backgroundColors.headerBackgroundColor}
            >
              <UserDetailsWrapper>
                <UserImage src="https://via.placeholder.com/150" />
                <UserData>
                  <p style={{ color: "#B6A3C2", margin: 0 }}>Email@gmail.com</p>
                  <Logout
                    onClick={() => {
                      if (localStorage.getItem("token") !== null)
                        localStorage.removeItem("token");
                      window.location.replace("/login");
                    }}
                  >
                    Log Out
                    <img
                      src={logoutIcon}
                      alt="Logout"
                      style={{ width: "15px" }}
                    />
                  </Logout>
                </UserData>
              </UserDetailsWrapper>
            </UserDetails>
          )}
        </SearchBarWrapper>
      </Header>
      {showTipBar && (
        <TipBar
          gradientStart={colors.backgroundColors.TipBarGradientStart}
          gradientEnd={colors.backgroundColors.TipBarGradientEnd}
        >
          <p style={{ fontStyle: "italic", color: "#fff" }}>
            "Anything that can go wrong will go wrong!"
          </p>
          <CloseButton
            src={closeIcon}
            onClick={() => {
              setshowTipBar(false);
            }}
          />
        </TipBar>
      )}
      {!showTipBar && (
        <ColsedTipBar>
          <OpenButton
            src={iIcon}
            onClick={() => {
              setshowTipBar(true);
            }}
          />
        </ColsedTipBar>
      )}
    </>
  );
}

export default Layout;
