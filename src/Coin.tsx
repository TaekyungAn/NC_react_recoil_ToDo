import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

function Coin() {
  const Container = styled.div`
    padding: 0px 20px;
  `;

  const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor};
  `;

  const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Loader = styled.span`
    text-align: center;
    display: block;
  `;

  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  // interface ILocation {
  //   state: {
  //     name: string;
  //   };
  // }
  const { state } = useLocation();
  console.log(state);

  return (
    <Container>
      <Header>
        <Title>{state || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
