import { css,  keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const backgroundStyle=css`
    background:#0F0D26;
    @font-face {
        font-family: 'BinggraeSamanco-Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/BinggraeSamanco-Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'BinggraeSamanco-Bold';
    color:#fff;
    
`;

export const pStyle=css`
    width:45%
`;

export const imgStyle=css`
    width:750px;
    height:400px;
`;

export const Container=styled.main`
${backgroundStyle};
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const ImgBox=styled.div`
    ${imgStyle};
    position:relative;
    
`;