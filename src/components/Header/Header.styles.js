import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--secondaryBackground);
  padding: 0 2%;
  height: 60px;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const ProfileImg = styled.img`
    display: inline-block;
    height: 50%;
`;

export const HelloText = styled.p`
  margin: 0 15px;
  font-size: 13px;
`;
