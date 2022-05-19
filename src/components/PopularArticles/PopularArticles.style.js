import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--secondaryBackground);
  padding: 20px;
  font-size: 13px;
  width: 30%;
  border-radius: 10px;
  
  .header {
    font-weight: bold;
    color: var(--white);
    border-bottom: 1px solid var(--blueGray);
    margin: 0 -20px;
    padding: 0 0 15px 20px;
  }
`;

export const Content = styled.div`
`;

export const Articles = styled.div`
  .article {
    border-bottom: 1px solid var(--blueGray);
  }
  
  .articleTitle {
    margin: 15px 0 0 0;
  }
  
  .articleTitle a {
    color: var(--white);
    text-decoration: none;
  }

  .articleTitle a:hover {
    color: var(--blue);
  }

  .bottom {
    display: flex;
  }
  
  .bottom p{
    margin: 10px 20px 15px 0;
    color: var(--gray);
    display: flex;
  }
  
  .bottom p span {
    margin: 0 5px;
  }
`;

