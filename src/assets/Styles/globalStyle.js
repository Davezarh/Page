import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Dancing+Script:wght@400;700&family=Indie+Flower&display=swap');
    html {
    box-sizing: border-box;
}
    *,*::after, *::before{
    box-sizing:inherit;
}
    body{
        font-family: 'Caveat', cursive;
        font-family: 'Dancing Script', cursive;
        font-family: 'Indie Flower', cursive;
}
    a,button{
        font-family: 'Caveat', cursive;
        font-family: 'Dancing Script', cursive;
        font-family: 'Indie Flower', cursive;
} 
`;
