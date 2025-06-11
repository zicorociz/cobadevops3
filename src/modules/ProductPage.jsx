import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loadrer from '../utiliy/Loadrer';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleCart = (product) => {
    toast('Added to cart!');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find(item => item.id === product.id);

    if (isProductExist) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
    }
  };

  if (Object.keys(product).length === 0) return <Loadrer />;

  return (
    <section className="text-gray-400 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product?.title || 'Product image'}
            className="lg:w-1/2 w-full lg:h-auto max-h-[35rem] h-64 object-contain object-center rounded"
            src={product?.image || '/fallback.jpg'}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {product?.category}
            </h2>
            <h1 className="text-gray-500 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    fill={i < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed mb-4">
              {product?.description || 'No description available.'}
            </p>
            <div className="flex items-center pb-5 border-b-2 border-gray-800 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-800 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border border-gray-700 focus:ring-2 focus:ring-yellow-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-yellow-500 pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl">
                ${product?.price}
              </span>
              <button
                onClick={() => handleCart(product)}
                className="flex ml-auto text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded"
              >
                Add to Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ProductPage;
// This code defines a ProductPage component that fetches product details based on the product ID from the URL parameters.