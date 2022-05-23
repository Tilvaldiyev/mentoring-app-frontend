import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--secondaryBackground);
  width: 15%;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 30px;
  box-shadow: 5px 0 12px -7px #000;
  font-size: 13px;
  
  a {
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const Nav = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: var(--white);
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin: 30px 0;
`;

export const NavLogo = styled.img`
  width: 30px;
  height: 30px;
`;

// export const NavLink = styled.a`
//   padding: 0 20px;
//   margin: 0;
// `;

export const LogoImg = styled.img`
  width: 45%;
`;

export const LogOut = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  margin: 0 -30px;
  padding: 30px 30px 0 30px;
  border-style: solid;
  border-color: var(--blueGray);
  color: var(--white);
`;
