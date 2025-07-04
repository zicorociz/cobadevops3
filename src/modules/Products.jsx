import React, { useEffect, useState } from 'react'

const Products = () => {

  const [categories, setCategories] = useState([])

     useEffect(()=>{
        const fetchCategories = async() => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${categories}`)
            const date = await response.json()
            console.log(date)
            setCategories(date)
        } 
        fetchCategories()
     }, [])
     
  return (
    <section className="text-gray-400 body-font bg-gray-900">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Pitchfork Kickstarter Taxidermy
        </h1>
        <div className="h-1 w-20 bg-yellow-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t
        heard of them man bun deep jianbing selfies heirloom prism food truck
        ugh squid celiac humblebrag.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
        {
            categories.map((item) =>(
                <div key={item.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.image}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
                    {item.title}
                  </h3>
                  <h2 className="text-lg text-white font-medium title-font mb-4">
                    {item.price}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
        }
      {/* <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/720x400"
            alt="content"
          />
          <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            Chichen Itza
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/721x401"
            alt="content"
          />
          <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            Colosseum Roma
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/722x402"
            alt="content"
          />
          <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            Great Pyramid of Giza
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/723x403"
            alt="content"
          />
          <h3 className="tracking-widest text-yellow-400 text-xs font-medium title-font">
            SUBTITLE
          </h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">
            San Francisco
          </h2>
          <p className="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p>
        </div>
      </div> */}
    </div>
  </div>
</section>

  )
}

export default Products
// import React from 'react';
//
// const FeatureCart = () => {