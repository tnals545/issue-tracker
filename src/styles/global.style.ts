import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: 'Noto Sans KR', sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
    }

    button {
        cursor: pointer;
        border: none;
        font-family: 'Noto Sans KR',
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;
