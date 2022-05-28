import React from "react";
import { toast } from "react-toastify";

const UsersRow = ({user, index, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
      fetch(`https://fathomless-coast-67251.herokuapp.com/user/admin/${email}`, {
        method : 'PUT',
        headers : {
          authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => {
        if(res.status === 403){
          toast.error('Failed To Make Admin')
        }
        return res.json()})
      .then(data => {
        if(data.modifiedCount > 0){
          refetch()
          toast('SuccessFull')
          console.log(data);
        }
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
