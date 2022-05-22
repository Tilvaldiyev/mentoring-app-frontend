import React from "react";
import {Wrapper, ProfileImg, Content, HelloText} from "./Header.styles";

// profile img
import ProfileImgDefault from '../../images/profile-default.png'

const Header = ({username}) => (
    <Wrapper>
        <Content>
            <HelloText>Hello, {username}!</HelloText>
            <ProfileImg src={ProfileImgDefault} alt={'profile img'}></ProfileImg>
        </Content>
    </Wrapper>
);

export default Header;
