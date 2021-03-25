import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const BgWrap=styled.div`
    position:relative;
    width:100%;
    min-height: 200px;
    background:url("/static/footer-bg.png");
    background-position: center;
    background-size: cover;
    display:flex;
    align-items:center;
    padding-top:33px;
`;

const wrapperStyles=css`
    color:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;  
`;

export const Container=styled.div`
    ${wrapperStyles};
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    height:100%;
    width:100%;
    padding:20px 100px;
`;

export const TitleWrapper=styled.div`

    & p:first-of-type, & p:nth-of-type(2){
        font-family: 'Almendra', serif;
        font-size:32px;
        line-height:1.2em;
        word-break:break-all;
    }
    & p:nth-of-type(3){
        font-weight:400;
        font-family:'Monteserrat';
        font-size:12px;
        margin-top:5px;
    }
`;

export const ContactUs=styled.div`
font-family: 'Nanum Gothic', sans-serif;
& p{
    margin-bottom:5px;
}
`;


