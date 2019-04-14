import styled from 'styled-components';

export const BackgroundStyle = styled.img`
  min-height: 100%;
  min-width: 1024px;
  opacity: ${props => props.opacity};
  transition: opacity 1s;
  width: 100%;
  height: auto;
  position: fixed;
  z-index:-10;
  top: 0;
  left: 0;
  filter: blur(0px) grayscale(100%);
@media screen and (max-width: 1024px) {
    left: 50%;
    margin-left: -512px;
}
`
export const HeaderStyle = styled.header`
width:100%;
background:black;
color:white;
height:50px;
svg {
  vertical-align:unset;
}
`


export const ContentWrap = styled.section`
`