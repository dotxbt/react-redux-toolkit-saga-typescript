import { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import Page2 from "../pages/page2";
import Page3 from "../pages/page3";
import Page4 from "../pages/page4";
import PostPage from "../pages/postPage";
import {
  NavBar,
  NavItem,
  NavItemContainer,
  NavLink,
} from "../styles/nav.style";

export interface NavModel {
  title: string;
  to: string;
  isSelected: boolean;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined;
}

export const initData: NavModel[] = [
  {
    title: "Home",
    to: "/",
    isSelected: true,
    component: PostPage,
  },
  {
    title: "History",
    to: "/history",
    isSelected: false,
    component: Page2,
  },
  {
    title: "Profile",
    to: "/profile",
    isSelected: false,
    component: Page3,
  },
  {
    title: "Setting",
    to: "/setting",
    isSelected: false,
    component: Page4,
  },
];

export const Navigation = () => {
  const [dataNav, setDataNav] = useState(initData);
  const clickHandle = (nav: NavModel) => {
    setDataNav(
      dataNav.map((data: NavModel) => {
        if (data.to === nav.to) {
          return {
            ...data,
            isSelected: true,
          };
        } else {
          return {
            ...data,
            isSelected: false,
          };
        }
      })
    );
  };
  return (
    <NavBar bottom={"0px"} borderRadius={"30px 30px 0px 0px"} boxShadow={"0px -1px 24px #8c00ff77"}>
      <NavItemContainer>
        {dataNav.map((data: NavModel) => (
          <NavItem>
            <NavLink
              to={data.to}
              isSelected={data.isSelected}
              onClick={() => clickHandle(data)}
            >
              {data.title}
            </NavLink>
          </NavItem>
        ))}
      </NavItemContainer>
    </NavBar>
  );
};

export const TopNavigation = (props: any) => {
  return (
    <NavBar top={"0px"} boxShadow={"0px 1px 12px #8c00ff77"}>
      <div style={{display: "flex", width: "100%", alignItems: "center", margin: "0px 10px"}}>
        <div style={{ padding: "10px 20px", color: "white", backgroundColor: "blue"}}> Back </div>
        <div style={{ padding: "10px 24px", color: "white", display: "flex", flex: "100%", textAlign: 'center', flexGrow: 10}}>{props.data}</div>
      </div>
    </NavBar>
  );
};
