import React from "react";
import { connect } from "react-redux";

const UsersList = ({ users }) => {
  return (
    <div>
      
      <h1>All Astronauts!</h1>
      {users.map((user) => (
        <div className="list" key={user.id}>
          {user.username}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(UsersList);
