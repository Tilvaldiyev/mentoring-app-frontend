import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--secondaryBackground);
  padding: 13px 13px 0 13px;
  font-size: 13px;
  height: auto;
  border-radius: 10px;
`;

export const Content = styled.div`

  button {
    padding: 0 0 0 20px;
    margin: 0 10px 15px 0;
    text-transform: uppercase;
  }

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
    padding: 0 0 13px 0;
    color: var(--white);
    margin-left: 30px;
    transition: none;
  }

  .nav-tabs {
    border: none;
  }
  
  .filter-wrapper {
    margin: 0 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  border-bottom: 1px solid var(--blueGray);
`;

export const SearchWrapper = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
  
  img {
    position: absolute;
    left: 10px;
  }
`;

export const Search = styled.input`
  padding: 10px 35px;
  border-radius: 5px;
  border: none;
  background-color: var(--primaryBackground);
  color: var(--gray);
  font-size: 11px;
  width: 100%;
  height: 35px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  background-color: var(--primaryBackground);
  border: none;
  border-radius: 5px;
  color: var(--gray);
  font-size: 11px;
  height: 35px;
`;

export const Option = styled.option`
  
`;
