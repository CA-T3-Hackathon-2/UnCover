import styled from "styled-components";

const HeroButton = styled.button`
  background: #f9efbe;
  font-size: 2rem;
  padding: 1.2rem 3rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 3px 0 rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 3rem;

  &:hover {
    transition: 0.2s;
    transform: translateY(-2px);
  }
`;

export default HeroButton;
