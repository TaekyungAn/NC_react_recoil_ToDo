import styled from "styled-components";
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
      <ToDoList />
    </MainStationWrapper>
  );
}
export default MainStation;
