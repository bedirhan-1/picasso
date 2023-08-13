import React from "react";
import myUser from "../actions/getUser";

const UserProfile: React.FC = async () => {
  const myCurrentUser = await myUser();
  return (
    <div>
      <div>
        <h1>Merhaba, </h1>
      </div>
    </div>
  );
};

export default UserProfile;
