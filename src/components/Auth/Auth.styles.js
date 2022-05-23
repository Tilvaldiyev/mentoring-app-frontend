import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  max-width: 30%;
  margin: 5% auto;
  background-color: var(--secondaryBackground);
  border-radius: 10px;
  font-size: 15px;

  .nav-link.active {
    background-color: var(--secondaryBackground);
    border: none;
    color: var(--blue);
    border-bottom: 1px solid var(--blue);
  }

  .nav-link:hover {
    border: none;
    border-bottom: 1px solid var(--blue);
    color: var(--blue);
  }

  .nav-link {
    border: none;
    color: var(--white);
    transition: none;
    width: 50%;
    padding: 13px;
  }

  .nav-tabs {
    border: none;
  }
  
  .header {
    border-bottom: 1px solid var(--blueGray);
    margin-bottom: 20px;
  }
  
  input, textarea {
    background-color: var(--secondaryBackground);
    border: 1px solid var(--blueGray);
    margin-bottom: 10px;
    margin-right: 10px;
    font-size: 13px;
    padding: 10px 20px;
    color: var(--white);

    ::placeholder {
      color: var(--gray);
    }
  }
  
  input:focus, textarea:focus {
    background-color: var(--secondaryBackground);
    color: var(--white);
    border-color: var(--blue);
  }
  
  .signUpBtn{
    background-color: var(--blue);
    color: var(--white);
    padding: 10px 20px;
    font-size: 13px;
    margin: 10px auto;
    display: block;
    width: 200px;  
    
    :hover {
      background-color: var(--secondaryBackground);
      border: 1px solid var(--blue);
      color: var(--blue);
    }
  }
  
  .filter-wrapper{
    padding: 10px 30px;
  }
  
  a {
    display: block;
    text-align: center;
    margin: 20px 0;
    color: var(--gray);
    font-size: 13px;
    text-decoration: underline;
  }
`;

export const Select = styled.select`
  padding: 12px 20px;
  background-color: var(--secondaryBackground);
  border: 1px solid var(--blueGray);
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 5px;
  color: var(--gray);
  font-size: 13px;
  flex: 1 1;
  
  :focus {
    color: var(--white);
    border-color: var(--blue);
    box-shadow: 0 0 0 .25rem rgba(13,110,253,.25);
  }
`;