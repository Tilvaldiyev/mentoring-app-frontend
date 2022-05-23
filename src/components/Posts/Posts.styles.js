

import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--secondaryBackground);
  border-radius: 10px;
  padding: 20px 43px;
  margin-top: 2%;
`;

export const Content = styled.div`
    
`;

export const AuthorWrapper = styled.div`
  display: flex;
  
  p {
    margin: 0 15px;
  }
  
  .author {
    font-size: 13px;
  }
  
  .date {
    font-size: 10px;
    color: var(--gray);
  }
`;

export const Title = styled.p`
    margin: 10px 0;
`;

export const ArticleText = styled.p`
  margin: 10px 0;
  font-size: 13px;
`;

export const ReadMoreBtn = styled.a`
  color: var(--white);
  background-color: var(--blue);
  font-size: 11px;
  padding: 6px 20px;
  
  :hover {
    color: var(--blue);
  }
`;

export const ArticleBottom = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--blueGray);
  font-size: 11px;
  color: var(--gray);
  margin-top: 20px;
  padding-top: 20px;

  .likes {
    border-right: 1px solid var(--blueGray);
    margin-right: 25px;
  }
  
  .qty {
    padding: 0 10px;
    margin-right: 15px;
  }
`;
