import React, { useState } from 'react';

export function FoodsIndex({ foods }) {
  const [sortKey, setSortKey] = useState('name'); // default sorting by name

  // Sort foods based on sortKey
  const sortedFoods = [...foods].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return -1;
    if (a[sortKey] > b[sortKey]) return 1;
    return 0;
  });

  return (
    <div className="container mt-4">
      <h1>Baby Foods:</h1>
      <div className="row">
        {/* Sidebar for sorting */}
        <div className="col-md-3">
          <h5>Sort by:</h5>
          <select
            className="form-select"
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </div>

        {/* Cards grid */}
        <div className="col-md-9">
          <div className="row">
            {sortedFoods.map((food) => (
              <div key={food.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={food.image_url}
                    className="card-img-top"
                    alt={food.name}
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{food.name}</h5>
                    <p className="card-text">{food.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
