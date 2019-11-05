import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import Loader from '../Loader';
import './index.css'

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <Loader />
    );
  }

  return (
    <Fragment>
      <img src={user.picture} className="profile-pic" alt="Profile" />

      <h2>{user.name}</h2>

      <div className="profile-data">
        <h4><span>Nickname: </span>{user.nickname}</h4>
        <h4><span>First Name: </span>{user.given_name}</h4>
        <h4><span>Last Name: </span>{user.family_name}</h4>
        <h4><span>Email: </span>{user.email}</h4>
        <h4><span>Email Verified: </span>{user.email_verified === true ? 'Yes' : 'No'}</h4>
      </div>

      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
  );
};

export default Profile;