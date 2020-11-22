import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function Login(props) {
  const { from } = props.location.state || { from: { pathname: "/" } };
  console.log(from);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      <center>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "40px" }}
          onClick={login}
        >
          Log in
        </Button>
      </center>
    </div>
  );
}

export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
};
