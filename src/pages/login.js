import React from "react";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <main className="loginDiv">
        <form>
          <label htmlFor="">Username</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
        </form>
        LoginPage
      </main>
    </>
  );
};

export default LoginPage;
