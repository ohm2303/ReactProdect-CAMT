import { createGlobalStyle } from "styled-components";

const  GlobalStyle = createGlobalStyle`
.GrayBackground{
    background-color: #e7e7e7;
    border-radius: 5px;
    border: none;
    padding: 1.3%;
    margin-left: 25%;
    margin-right: 25%;
  
}
//Button
.ButtonNormal{
    border-radius: 30px;
    border: none;
    padding: 1.3%;

    background-image: linear-gradient(
      to right,
      #57646d,
      #edf0f1,
      #0d3142 100%,
      #20385B 200%
    );
    text-shadow: 0 1px 1px #333;
    transition: all 0.25s;
    transform: scale(0.8);
    background-position-x: 0%;
    background-size: 300%;
    height: 5.5vh;

    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-bottom-width:3px;
    border-bottom-color: #000000;
    border-bottom-style:solid;
    transform: scale(0.9);
}
.ButtonNormal:hover{
    cursor: pointer;
    background-position-x: 100%;
    transform: scale(1.05);
}
.iconInButtons{
    display:block;
    
}
.textInButtons{
    display:block;
    padding-left: 15%;
    font-family:'Noto Serif Thai', serif;
    font-size: 20px;
    font-weight:900;
}
// selectForpay
.cssB{
margin-top: 20%;
}
.buttonDelete{
    width: 70%;
    color: aliceblue;
    font-family:'Noto Serif Thai', serif;
}
.titleBook{
    font-size: 20px;
    line-height: 20%;
}
.pic{
    display: block;
    width: 15%;
}
img{
    width: 100%;
}
.icon{
    width: 30%;
}
`;
export default GlobalStyle;