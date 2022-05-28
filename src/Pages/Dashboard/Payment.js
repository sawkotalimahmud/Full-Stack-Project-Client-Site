import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from 'react-query';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4P0REt3xWjbM7ubr6nIBtUoL7et6RJTwuomaPr32jmNB1SiO5eL3HfIIDw3emi2gocyAdevEY56uLbW3NuCLxg00QrbVDaVG');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;

    const { data: orders, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
                    <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className=" font-bold">Hello, {orders.ordererName}</p>
                    <h2 class="card-title">Please Pay for: {orders.productName}</h2>
                    <p>Product Quantity: ${orders.quantity}</p>
                    <p>Please pay: ${orders.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders = {orders} />
                    </Elements>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Payment;