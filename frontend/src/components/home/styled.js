import styled from 'styled-components';

export const BackgroundStyle = styled.img`
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  position: fixed;
  z-index:-1;
  top: 0;
  left: 0;
  filter: blur(0px) grayscale(100%);
@media screen and (max-width: 1024px) {
    left: 50%;
    margin-left: -512px;
}
`

export const ContainerStyle = styled.section`
 color: rgb(147, 146, 146);
 padding:1em;
 font-family: sans-serif;
 font-size: 14px;
`

export const ContentWrap = styled.section`
    display:flex;
    flex-wrap:wrap;
    @media (min-width: 768px) {
        display:inline-flex;
        flex-wrap:nowrap;
    }
`

export const NavWrap = styled.section`
    width:100%;
    @media (min-width: 768px) {
        
    }

`

export const VideoStyle = styled.video`
height: 100%;
width: 100%;
float: left;
top: 0;
padding: none;

`