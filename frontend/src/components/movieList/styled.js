import styled from "styled-components";
import {FavoriteBorder} from 'styled-icons/material/FavoriteBorder'

export const ListStyle = styled.section`
  margin-bottom: 5em;
  @media(min-width:992px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const LoadingWrap = styled.div`
 width: 500px;
 height:300px;
 margin:auto;
 @media(min-width:1000px){
  width:650px;
 }
`

export const ContainerStyle = styled.section`

`

export const PosterContainer = styled.section`

@media(min-width:768px){
      display:flex;
}
`

export const CardStyle = styled.section`
  opacity: ${props => props.opacity};
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 8px;
  padding: 1em;
  margin: 1em;

  @media(min-width:768px){
      display:flex;
  }
  @media(min-width:992px){
      width:43%;
  }
  
`;

export const MovieDesc = styled.section`
text-align: left;
padding:1em;

`

export const PosterStyle = styled.section`
 div {
   margin-bottom:0.5em;
 }

  @media(min-width:768px){
    max-width: 200px;
  }

`

export const ButtonWrap = styled.section`
  button {
    margin-right:1em;
  }
  
  @media(min-width:768px){

  }

`

export const ButtonStyle = styled.button`
  color: ${props => props.color ? props.color : 'white'};
  background: ${props => props.background ? props.background : 'red'};
  padding: 0.8em;
  border-radius:5px;
  border:none;
  :hover{
      background:green;
  }

`

export const FavouriteIcon = styled(FavoriteBorder)`
   padding: 0.4em;
   :hover {
     color: orange;
   }
`

export const IframeStyle = styled.iframe`
    width:100%;
    height:100%;
    min-height:300px;
    @media screen and (min-width: 568px) {
      min-height:400px;
    }
    @media screen and (min-width: 768px) {
      min-height:500px;

    }
    @media screen and (min-width: 1000px) {
      max-width:1000px;

    }


`