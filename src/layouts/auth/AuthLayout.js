import Container from "../container/Container";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

function AuthLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default AuthLayout;
