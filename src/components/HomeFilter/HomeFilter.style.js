import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--secondaryBackground);
  padding: 20px;
  font-size: 13px;
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const Content = styled.div`
  
  p {
    padding: 0 0 0 20px;
    margin: 0 10px 15px 0;
    text-transform: uppercase;
  }
`;

export const Header = styled.div`
  display: flex;
  border-bottom: 1px solid var(--blueGray);
  margin: 0 -20px;
`;
