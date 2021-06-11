import styled from 'styled-components';

const NavStyle = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5rem 10rem 0 10rem;
  @media screen and (min-width: 1025px) { // v big screen
  }
  @media screen and (max-width: 768px) { // tablet
    padding: 5rem 3rem 0 5rem;
  }
  @media screen and (max-width: 500px) { // phone
    padding: 2rem 1rem 0 1rem;
  }
`

const NavSelectStyle = styled.select`
  color: #3b9bd1; 
  border: none; 
  background: "#fff";
  @media screen and (max-width: 768px) { // tablet
    font-size: 1.2rem;
    
  }
`

const NavLabelStyle = styled.label`
  font-size: 2rem;
  @media screen and (max-width: 768px) { // tablet
    margin: 0;
    
  }
`

const NavImg = styled.img`
  @media screen and (max-width: 768px) { // tablet
    position: relative;
    top: -1.1rem;
    
  }
`

export { NavStyle, NavSelectStyle, NavLabelStyle, NavImg };