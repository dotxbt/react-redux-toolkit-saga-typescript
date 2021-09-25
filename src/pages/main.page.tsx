import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initData, Navigation, NavModel, TopNavigation } from "../components/nav.componten";
import {
  Container,
  DeviceContainer,
  MainContainer,
} from "../styles/container.style";

const MainPage = () => {
  const height = window.innerHeight;
  return (
    <DeviceContainer style={{ height: height }}>
      <Router>
        <MainContainer>
          <Container>
            <Switch>
              {initData.map((data: NavModel)=> {
                if (data.to==="/") {
                  return <Route exact path={data.to}  component={data.component} />
                }
                return <Route path={data.to}  component={data.component} />
              })}
            </Switch>
          </Container>
          <TopNavigation data="Best In The World!" />
          <Navigation />
        </MainContainer>
      </Router>
    </DeviceContainer>
  );
};

export default MainPage;
