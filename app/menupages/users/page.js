"use client";
import PageTitle from "@/components/PageTitle";
import React, { useState, useEffect } from "react";

function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("userData")) || [];
    setUsers(usersData);
  }, []);

  return (
    <div>
      <div style={{ position: "fixed",left: "592px",top: "74px" }} >
         <PageTitle title="All Users" />
       </div>
      {users && users.length > 0 ? (
        <table style={{marginTop : "40px"}}>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default Page;
