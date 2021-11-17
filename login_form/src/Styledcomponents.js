import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box.sizing: border-box;
    background: #ffff;
    color: black;
}
body, html, #root {
    heigth: 100%;

}
`
export const Wrapper = styled.section`

display:flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`;

export const Subtitles = styled.span`
margin-left:20%;
margin-top:8%;
display:flex;
flex-direction:column;
justify-content: center;
align-items: flex-start;

`;

export const Form = styled.form`
margin-top:10%;
width: 100%;
max-width: 414px;
padding: 1.3rem;
display: flex;
flex-direction: column;
position: relative;
`;

export const Input = styled.input`
max-width: 100%;
padding: 11px 13px;
background: #ffff;
margin-bottom: 0.9rem;
outline: 0;
border: 2.5px solid black;
font-size: 14px;
`;

export const Button = styled.button`
max-width:20%;
margin-left: 40%;
font-size: 15px;
background:white;
border: 1px solid;
cursor: pointer;
box-shadow: 2px 2px 0px 1px #020202;
`;

export const Title = styled.h2`
font-weigth: normal;
font-size: 45px;
margin-left: -30%;
margin-top:-18%;
`;

export const Anchor = styled.a`
margin-left:33%;
margin-bottom:5%;
`;

export const Error = styled.p`
color: red;
`;

export const P = styled.p`
color:white;
width:2%;
`;
