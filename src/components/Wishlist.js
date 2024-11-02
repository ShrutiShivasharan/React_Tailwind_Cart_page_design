// import React, { useState, useEffect } from "react"
// const [products, setProducts] = useState([]);
// useEffect(() => {
//     fetch('https://dummyjson.com/products')
//         .then(res => res.json())
//         .then(data => setProducts(data.products));
// }, []);

import pic from '../pic.jpg'
const products = [
    {
        id: 1,
        title: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '350',
        category: 'Black',
    },
]

function Wishlist() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-gray-200 p-2">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    alt="pic"
                                    src={pic}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-black">
                                        {product.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                </div>
                                <h3 className="font-medium text-balck"><i class="fa-solid fa-rupee-sign"></i>. {product.price}</h3>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <button className="text-white bg-blue-500 p-1 rounded ">Add To Cart</button>
                                <button className="text-white bg-pink-500 p-1 rounded ">Remove From Wishlist</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Wishlist;
