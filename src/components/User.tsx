import React from "react";
import { gql, useQuery } from "@apollo/client";

const USER_QUERY = gql`
  query USER_QUERY {
    users {
      id
      name
    }
  }
`;

interface User {
  name: string;
}

const User = () => {
  const { loading, error, data } = useQuery(USER_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  console.log("Data: ", data);
  return (
    <div>
      {data.users.map((user: User) => {
        return <p>{user.name}</p>;
      })}
    </div>
  );
};

export default User;
