import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "../pages/Home";
import Private from "../pages/Private";
import Games from "../pages/Games";
import ToDoList from "../ToDo/ToDoList";

const MainStationWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0 20px 20px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${(props) => props.theme.boxColor};
`;

function MainStation() {
  return (
    <MainStationWrapper>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/games" element={<Games />} />
        <Route path="/mypage" element={<Private />} />
      </Routes>
    </MainStationWrapper>
  );
}
export default MainStation;
