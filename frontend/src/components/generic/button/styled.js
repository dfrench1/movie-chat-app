import styled from "styled-components";

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