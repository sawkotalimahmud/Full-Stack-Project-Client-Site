import React from 'react';
import Product from './Product';

const Products = () => {
    const products = [
        {
            _id: '1',
            name: 'ToolBox',
            description: 'This is one of the best quality and useful easy to cary ToolBox for every home',
            min_order_quantity:'100',
            available_quantity: '10000',
            per_unit_price: '1000',
            image: 'https://i.ibb.co/n7M3FHB/1bdc5c63-45e1-47a4-a035-699528e01804-1-a088e4441aa76135a57a2c7c681d6845.png'
        },
        {
            _id: '2',
            name: 'Drill',
            description: 'This is one of the best quality and useful easy to cary and use Drill for your work',
            min_order_quantity:'100',
            available_quantity: '20000',
            per_unit_price: '2500',
            image: 'https://i.ibb.co/phSz7qH/download.png'
        },
        {
            _id: '3',
            name: 'Vise',
            description: ' This is one of the best in market Vise and best quality product for your work',
            min_order_quantity:'100',
            available_quantity: '15000',
            per_unit_price: '3000',
            image: 'https://i.ibb.co/VSWQSzy/4a72ba8890275a2da16eff7d6f78af0f.png'
        }
    ]
    return (
        <div>
            <div>
                <h2 className='text-2xl text-center my-20'>Our Products</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-28">
                {
                    products.map((product) => (<Product key={product._id} product={product}></Product>))
                }
            </div>
        </div>
    );
};

export default Products;