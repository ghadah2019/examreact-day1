import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setInfo(response.data);
      console.log(response);
    });
  }, []);

  const filterSearch = info.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase()) 
    // item.price.toLowerCase().includes(search.toLowerCase())

  );

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4"
      />

      <div className="grid grid-cols-4 gap-4">
        {filterSearch.map((item) => (
          <div key={item.id} className="border border-[#FFD815]">
            <div className="flex flex-col p-4">
              <Link to={`Details/${item.id}`}>
                <img src={item.image} alt={item.title} className="mb-2" />
              </Link>
              <p className="text-red-500">Price: {item.price}</p>
              <p>Product name: {item.title}</p>
              <p> product category:{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <Link to="/Signup">
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Signup
        </button>
      </Link> */}
    </div>
  );
}

export default Home;
