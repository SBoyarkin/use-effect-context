import React from 'react';
import {useJsonFetch} from "../../script.js";
import {BASE_URL} from "../../App.jsx";


export const ErrorComponent = ({endpoint}) => {
  const [data, loading, error] = useJsonFetch(BASE_URL, endpoint);

  if (loading) return <div>Loading error data...</div>;

  return (
    <div>
      <h2>Error Component</h2>
      {error ? (
        <div style={{ color: 'red' }}>Error: {error}</div>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};