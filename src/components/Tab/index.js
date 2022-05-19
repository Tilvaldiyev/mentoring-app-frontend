import React from "react";

import {Wrapper, Content, LogoImg, Nav, NavItem, NavLogo, NavLink, LogOut} from "./Tab.style";

import Logo from './../../images/Sample Logo.png'
import HomePNG from './../../images/ant-design_home-filled.png'
import ExplorePNG from './../../images/ic_baseline-explore.png'
import MessagePNG from './../../images/wpf_message.png'
import BookmarksPNG from './../../images/bi_bookmark-fill.png'
import MeetingsPNG from './../../images/healthicons_group-discussion-meetingx3.png'
import ProfilePNG from './../../images/eva_person-fill.png'
import LogoutPNG from './../../images/ooui_log-out-ltr.png'

const Tab = () => (
    <Wrapper>
        <Content>
            <LogoImg src={Logo}/>
            <Nav>
                <NavItem><NavLogo src={HomePNG} /><NavLink>Home</NavLink></NavItem>
                <NavItem><NavLogo src={ExplorePNG} /><NavLink>Explore</NavLink></NavItem>
                <NavItem><NavLogo src={MessagePNG} /><NavLink>Messages</NavLink></NavItem>
                <NavItem><NavLogo src={BookmarksPNG} /><NavLink>Bookmarks</NavLink></NavItem>
                <NavItem><NavLogo src={MeetingsPNG} /><NavLink>Meetings</NavLink></NavItem>
                <NavItem><NavLogo src={ProfilePNG} /><NavLink>Profile</NavLink></NavItem>
            </Nav>
            <LogOut>
                <NavLogo src={LogoutPNG} /><NavLink>Logout</NavLink>
            </LogOut>
        </Content>
    </Wrapper>
);

export default Tab;
