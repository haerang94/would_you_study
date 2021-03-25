import { css, Global, keyframes } from '@emotion/react'
import styled from '@emotion/styled'


export const flexStyles=css`
    width:100%;
    display:flex;
    align-items:center;
`;

export const Container=styled.nav`
    ${flexStyles};
    width:100%;
    height:70px;
    justify-content:flex-end;
`;

export const LinkBox=styled.li`
    ${flexStyles};
    width:50vw;
    justify-content:space-evenly;
    &>a:hover{
        text-decoration:underline;
    }
`;