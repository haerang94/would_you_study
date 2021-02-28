import { css,  keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const backgroundStyle=css`
    background:#0F0D26;
    font-family: 'BinggraeSamanco-Bold';
    color:#fff;
    
`;

export const pStyle=css`
    width:70%
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

export const buttonStyle=css`
    font-size:20px;
    background:none;
    border:none;
    color:#fff;
    width:80px;
    height:45px;
    &:hover{
        border-bottom:1px solid #fff;
    }
`;

export const Container=styled.main`
    ${backgroundStyle};
    ${defaultFlexStyle};
    height:100vh;
    width:100vw;
    flex-direction:column;
`;

export const ImgBox=styled.div`
    ${imgStyle};
    position:relative; 
`;

export const FlexBox=styled.div`
    ${defaultFlexStyle};
    width:750px;
    justify-content:space-between;
`;

export const Button=styled.button`
    ${buttonStyle};
`;