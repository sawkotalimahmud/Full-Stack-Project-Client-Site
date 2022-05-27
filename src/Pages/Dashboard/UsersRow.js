import React from "react";
import { toast } from "react-toastify";

const UsersRow = ({user, index, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
      fetch(`http://localhost:5000/user/admin/${email}`, {
        method : 'PUT',
        headers : {
          authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        refetch();
        console.log(data);
        toast.success('Successfully make admin')
      })
    }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role !== "admin" && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
      <td><button class="btn btn-xs">Delete User</button></td>
    </tr>
  );
};

export default UsersRow;
