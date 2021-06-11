import styled from 'styled-components'

const AboutMainBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 7rem;
`

const AboutColumn = styled.div`
  margin: 0 3rem;
  display: flex;
  flex-direction: column;
  width: 50%;
`

const AboutImagePosition = styled.img`
  width: 50%;
  height: auto;
  margin-top: 2rem;
  align-self: center;
`

const TeamHandAndBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
`

const BoxStyles = styled.div`
  border: solid black 2px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
`

const HandStyles = styled.img`
  width: 6rem;
  height: 6rem;
  margin-right: 1rem;
`


export { AboutMainBox, AboutColumn, AboutImagePosition, TeamHandAndBox, BoxStyles, HandStyles }