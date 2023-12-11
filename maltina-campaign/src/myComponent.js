import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating an API call or data fetching
    setTimeout(() => {
      // Assuming data is fetched successfully
      setData({
        title: 'Sample Title',
        description: 'This is a sample description',
      });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <Skeleton height={200} width={300} />
          <Skeleton count={3} />
        </div>
      ) : (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
};

export default MyComponent;