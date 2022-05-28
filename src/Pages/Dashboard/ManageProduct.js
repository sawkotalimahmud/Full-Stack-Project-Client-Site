import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const { data: product, isLoading, refetch } = useQuery('manageProduct', () => fetch('http://localhost:5000/manageProduct', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage Product {product.length}</h2>

            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Photo</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    {
        product.map((p, index) => <ProductRow
        key={p._id}
        p={p}
        index={index}
        refetch ={refetch}
        ></ProductRow>)
    }
  </table>
</div>
        </div>
    );
};

export default ManageProduct;