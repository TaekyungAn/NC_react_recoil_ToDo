import styled, { createGlobalStyle } from "styled-components";
import BottomBar from "./components/SideBar/BottomBar";
import LeftBar from "./components/SideBar/LeftBar";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atom";
import MainStation from "./components/SideBar/MainStation";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'ChosunCentennial';
    src: url(../fonts/ChosunCentennial/ChosunCentennial.eot);
    src: url(../fonts/ChosunCentennial/ChosunCentennial.eot?#iefix) format('embedded-opentype'),
         url(../fonts/ChosunCentennial/ChosunCentennial.woff) format('woff'),
         url(../fonts/ChosunCentennial/ChosunCentennial.ttf) format('truetype');
         unicode-range: U+AC00-D7A3;
        }

@font-face {
    font-family: 'OpenSans';
    src: url(../fonts/OpenSans/OpenSans-Regular.eot);
    src: url(../fonts/OpenSans/OpenSans-Regular.eot?#iefix) format('embedded-opentype'),
         url(../fonts/OpenSans/OpenSans-Regular.woff) format('woff'),
         url(../fonts/OpenSans/OpenSans-Regular.ttf) format('truetype');
         unicode-range: U+26;
}
font-family: 'Alkatra', cursive;
font-family: 'Gowun Dodum', sans-serif;
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family: inherit;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.theme.bgImg});
  background-size: cover;
  /* background-color: ${(props) => props.theme.bgColor}; */
  color: ${(props) => props.theme.textColor};
  background: linear-gradient(${(props) => props.theme.bgGradient?.start}, ${(
  props
) => props.theme.bgGradient?.end});
}
a{
  text-decoration: none;
  color: inherit;
}
`;

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Middle = styled.div`
  display: flex;
  width: 70%;
  height: 70%;
  border-radius: 20px;

  margin-bottom: 10px;
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppWrapper>
        <Middle>
          <LeftBar />
          <MainStation />
        </Middle>
        <BottomBar />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
