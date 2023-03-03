import styled, { createGlobalStyle } from "styled-components";
import BottomBar from "./components/SideBar/BottomBar";
import LeftBar from "./components/SideBar/LeftBar";
import ToDoList from "./components/ToDo/ToDoList";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atom";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
font-family: 'Source Sans Pro', sans-serif;
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
  font-family: 'Source Sans Pro', sans-serif;
  /* background: url(${(props) => props.theme.bgImg}) no-repeat;
  background-size: cover; */
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}
a{
  text-decoration: none;
  color: inherit;
}
`;

const Middle = styled.div`
  display: flex;
  width: 70%;
  height: 70%;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 20px;

  margin-bottom: 10px;
`;

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ToggleBox = styled(motion.div)`
  position: relative;
  background-color: white;
  width: 80px;
  height: 40px;
  border-radius: 40px;

  > button {
    width: 50%;
    height: 100%;
    border-radius: 50%;
    border: 0;
  }
`;
const ToggleNight = styled(motion.button)`
  position: absolute;
  left: 0;
`;
const ToggleDay = styled(motion.button)`
  position: absolute;
  right: 0;
`;

function App() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const [darkMode, setDarkMode] = useState(true);
  const toggleClicked = () => {
    setIsDark((prev) => !prev);
    setDarkMode((prev) => !prev);
  };
  const toggleVariant: Variants = {
    Daymode: {
      backgroundColor: "pink",
      transition: {
        type: "tween",
        duration: 3,
      },
    },
    Nightmode: {
      backgroundColor: "gray",
      transition: { type: "tween" },
    },
  };
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <AppWrapper>
        <GlobalStyle />
        <Middle>
          <LeftBar />
          <ToDoList />
        </Middle>
        <BottomBar />
        <ToggleBox onClick={toggleClicked}>
          <AnimatePresence initial={false}>
            <motion.i
              className={`icon far fa-${darkMode ? "moon" : "sun"}`}
              key={darkMode ? "moon" : "sun"}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </ToggleBox>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
