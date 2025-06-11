import { useEffect, useState } from 'react';
import Loadrer from '../utiliy/Loadrer';

export const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) return <Loadrer />;

  return (
    <div className="px-4 mx-auto py-4 md:py-6">
      <div className="container m-auto flex md:text-left text-center md:justify-between justify-center items-center">
        <div className="m-auto">
          <h2 className="text-3xl font-medium">Popular Categories</h2>
        </div>
      </div>
      <div className="my-10 container m-auto">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              className="bg-gray-100 rounded-xl flex flex-col justify-center items-center p-4 md:p-6"
              key={category}
            >
              <img
                className="h-20 w-20"
                src="../image/shopping.png"
                alt={category}
              />
              <div className="font-bold mt-4 text-center uppercase">
                {category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// ✅ Tambahkan validasi props jika diperlukan
// Category.propTypes = {