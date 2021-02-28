import { css } from '@emotion/react'

export const globalStyle=css`
    @font-face {
        font-family: 'BinggraeSamanco-Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/BinggraeSamanco-Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    html,
    body {
    padding: 0;
    margin: 0;
    font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    font-family: 'BinggraeSamanco-Bold';
    }

`;
