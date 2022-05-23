import React from "react";

import {Wrapper, Content, LogoImg, Nav, NavItem, NavLogo, LogOut} from "./Tab.style";
import {NavLink} from "react-router-dom";

import Logo from './../../images/Sample Logo.png'

const Tab = ({homePNG, explorePNG, messagesPNG, bookmarksPNG, meetingsPNG, profilePNG, logoutPNG}) => (
    <Wrapper>
        <Content>
            <LogoImg src={Logo}/>
            <Nav>
                <NavItem><NavLogo src={homePNG}/><NavLink to='/'>Home</NavLink></NavItem>
                <NavItem><NavLogo src={explorePNG} /><NavLink to='/explore'>Explore</NavLink></NavItem>
                {/*<NavItem><NavLogo src={messagesPNG} /><NavLink>Messages</NavLink></NavItem>*/}
                {/*<NavItem><NavLogo src={bookmarksPNG} /><NavLink>Bookmarks</NavLink></NavItem>*/}
                {/*<NavItem><NavLogo src={meetingsPNG} /><NavLink>Meetings</NavLink></NavItem>*/}
                {/*<NavItem><NavLogo src={profilePNG} /><NavLink>Profile</NavLink></NavItem>*/}
            </Nav>
            <LogOut>
                <NavItem><NavLogo src={logoutPNG} /><NavLink to='/auth'>Log Out</NavLink></NavItem>
            </LogOut>
        </Content>
    </Wrapper>
);

export default Tab;
