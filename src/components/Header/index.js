import React from "react";
import ProfileImgDefault from '../../images/profile-default.png'
import {Wrapper, ProfileImg, Content, HelloText} from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <HelloText>Hello, Alisher!</HelloText>
            <ProfileImg src={ProfileImgDefault} alt={'profile img'}></ProfileImg>
        </Content>
    </Wrapper>
);

export default Header;
