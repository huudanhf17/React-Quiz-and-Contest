import { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../container/Main";

const Layout = (): ReactElement => {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
