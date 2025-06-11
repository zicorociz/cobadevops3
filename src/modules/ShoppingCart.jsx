import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ErrorPage from './ErrorPage';

const ShoppingCart = () => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => {
      const price = parseInt(item.price.toString().replace(/[^0-9]/g, ''));
      return acc + (price * item.quantity);
    }, 0);

    const originalTotal = cart.reduce((acc, item) => {
      const original = parseInt(item.originalPrice?.toString().replace(/[^0-9]/g, '') || item.price);
      return acc + (original * item.quantity);
    }, 0);

    setTotal(newTotal);
    setDiscount(originalTotal - newTotal);
  }, [cart]);

  const handleInc = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDec = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removerProduct = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return <ErrorPage title='Cart is Empty' des='Your Shopping Cart is Empty' buttonOne='Continue Shopping' buttonTwo='Go Home' />;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Shopping Cart</h1>
      <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section className="lg:col-span-8 bg-white dark:bg-slate-600">
          <ul className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cart.map(product => (
              <div key={product.id} className="px-4">
                <li className="flex py-6 sm:py-6">
                  <div className="flex-shrink-0">
                    <Link to={`/ProductPage/${product.id}`}>
                      <img src={product.image} alt={product.title} className="h-24 w-24 rounded-md object-contain object-center sm:h-38 sm:w-38" />
                    </Link>
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link to={`/ProductPage/${product.id}`} className="font-medium text-lg text-gray-700 dark:text-white">
                              {product.title}
                            </Link>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500 dark:text-gray-200">{product.color}</p>
                          {product.size && (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500 dark:text-gray-200">{product.size}</p>
                          )}
                        </div>
                        <div className="mt-1 flex items-end">
                          <p className="text-xs line-through font-medium text-gray-500 dark:text-gray-100">{product.originalPrice}</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">&nbsp;&nbsp;{product.price}</p>
                          &nbsp;&nbsp;
                          <p className="text-sm font-medium text-green-500">{product.discount}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="flex mb-2">
                  <div className="flex min-w-24 dark:text-white">
                    <button type="button" className="h-7 w-7 rounded-full border border-[#e0e0e0]" onClick={() => handleDec(product.id)}>-</button>
                    <input type="text" className="h-7 w-9 text-center mx-1 border dark:bg-white dark:text-black" value={product.quantity} readOnly />
                    <button type="button" className="h-7 w-7 rounded-full border border-[#e0e0e0] flex justify-center items-center" onClick={() => handleInc(product.id)}>+</button>
                  </div>
                  <div className="ml-4 flex flex-1 sm:ml-6 dark:text-white">
                    <button className="font-medium mr-4">SAVE FOR LATER</button>
                    <button className="font-medium text-yellow-400 hover:text-yellow-200" onClick={() => removerProduct(product.id)}>REMOVE</button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-md bg-white dark:bg-slate-600 lg:col-span-4 lg:mt-0 lg:p-0">
          <h2 className="px-4 py-3 sm:p-4 border-b border-gray-200 text-lg font-medium text-gray-900 dark:text-gray-200">Price Details</h2>
          <div>
            <dl className="space-y-1 px-6 py-4 sm:p-6">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-800 dark:text-gray-200">Price ({cart.length} item)</dt>
                <dd className="text-sm font-medium text-gray-900 dark:text-gray-100">₹ {total}</dd>
              </div>
              <div className="flex items-center justify-between pt-4">
                <dt className="text-sm text-gray-800 dark:text-gray-200">Discount</dt>
                <dd className="text-sm font-medium text-green-700 dark:text-green-400">- ₹ {discount}</dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="text-sm text-gray-800 dark:text-gray-200">Delivery Charges</dt>
                <dd className="text-sm font-medium text-green-700 dark:text-green-400">Free</dd>
              </div>
              <div className="flex items-center justify-between py-4 border-y border-dashed">
                <dt className="text-base font-medium text-gray-900 dark:text-white">Total Amount</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">₹ {total}</dd>
              </div>
            </dl>
            <div className="px-6 pb-4 font-medium text-green-700 dark:text-green-400">
              You will save ₹ {discount} on this order
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ShoppingCart;
