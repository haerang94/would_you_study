import { css,  keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const backgroundStyle=css`
    background:#0F0C29;
    background:linear-gradient(
        to bottom,
        #000,
        #000,
        #0F0C29,
        #0F0C29, 
        #181739,
        #1E183D,
        #321A3F
      );
    font-family: 'BinggraeSamanco-Bold';
    color:#fff;
    
`;

export const pStyle=css`
    width:70%;
    font-size:20px;
`;

export const imgStyle=css`
    width:750px;
    height:400px;
`;

export const defaultFlexStyle=css`
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const navStyle=css`
        min-height:80px;
        width:100vw;
        background:none;
        padding:10px 0;
`;

export const buttonStyle=css`
    font-size:20px;
    background:none;
    border:none;
    color:#fff;
    width:80px;
    height:45px;
    border-radius:40px;
    &:hover{
        border:1px solid #fff;
        cursor:pointer;
    }
`;

export const Nav=styled.nav`
    ${navStyle};
`;

export const Container=styled.main`
    ${backgroundStyle};
    ${defaultFlexStyle};
    height:100vh;
    width:100vw;
    flex-direction:column;
    justify-content:start;
`;

export const ImgBox=styled.div`
    ${imgStyle};
    position:relative;

`;

export const FlexBox=styled.div`
    ${defaultFlexStyle};
    width:750px;
    justify-content:space-between;
    margin:20px 0;
`;

export const Button=styled.button`
    ${buttonStyle};
`;