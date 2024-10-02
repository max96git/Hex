import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Inventory = ({ match }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const response = await axios.get(`http://localhost:5000/api/inventory/${match.params.userId}`);
      setItems(response.data);
    };
    fetchInventory();
  }, [match.params.userId]);

  return (
    <div>
      <h2>Your Inventory</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
