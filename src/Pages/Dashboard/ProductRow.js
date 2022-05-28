import React from "react";
import { toast } from "react-toastify";

const ProductRow = ({ p, index, refetch }) => {
    const {name, image, quantity, price, email} = p;

    const handleDelete = () => {
      window.alert('Are You Sure? you Want To Delete')
        fetch(`http://localhost:5000/product/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success('Delete Successfully')
                    refetch();
                }
            })
    }
  return (
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <th>
          <div class="avatar">
            <div class="w-20 rounded">
              <img
                src={image}
                alt={name}
              />
            </div>
          </div>
        </th>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td><button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button></td>
      </tr>
    </tbody>
  );
};

export default ProductRow;
