import Header from "../../components/Header";
import Card from "../../components/Card";
import { Container } from "../../Layout";
import { Banner, MCardLine, MCard } from "./MainStyle";

const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <MCardLine>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </MCardLine>
      </Container>
    </>
  );
};

export default Main;
