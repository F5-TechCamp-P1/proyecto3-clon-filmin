import React, { useEffect, useState } from 'react';
import CardsSection from './CardsSection.jsx';

function List({ listTitle, fetchList }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchList();
      setItems(data.slice(0, 5));
    };
    fetchData();
  }, [fetchList]);

  return (
    <div>
      <h2>{listTitle}</h2>
      <CardsSection items={items} />
    </div>
  );
}

export default List;
