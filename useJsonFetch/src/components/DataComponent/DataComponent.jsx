import React from 'react';
import {useJsonFetch} from "../../script.js";
import {BASE_URL} from "../../App.jsx";

export const DataComponent = ({endpoint}) => {
  const [data, loading, error] = useJsonFetch(BASE_URL, endpoint);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Data Component</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};