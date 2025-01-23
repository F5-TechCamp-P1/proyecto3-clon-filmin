import React, { useEffect, useState } from 'react';
import CardsSection from './CardsSection.jsx';

function List({ listTitle, fetchList }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchList();
      setItems(data.slice(0, 15));
    };
    fetchData();
  }, [fetchList]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="justify-self-start self-start">
        <h1 className="font-bold Graphik Medium text-white ml-3 ">{listTitle}</h1>
      </div>
      <div className="w-full p-7">
        <CardsSection items={items} />
      </div>     
    </div>
  );
}

export default List;
