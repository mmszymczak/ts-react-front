import React, { Fragment } from "react";
import { useAuth0 } from "../../services";
import { RouteComponentProps } from "react-router";

const Profile = (props: RouteComponentProps) => {
  const { loading, user, getTokenSilently } = useAuth0();

  // simple test to check if RBAC is working correctly, if user logged as admin@example.com it should resolve succesfully, otherwise should return 403 or 401 status code
  getTokenSilently().then((token: string) => {
    console.log("token", token);
    fetch("http://localhost:5000/items/1", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: "DELETE"
    }).then(response => {
      console.log("response", response);
    });
  });

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  );
};

export default Profile;