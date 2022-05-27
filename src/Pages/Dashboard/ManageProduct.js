import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

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
        </div>
    );
};

export default ManageProduct;