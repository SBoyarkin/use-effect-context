import React from 'react';
import {useJsonFetch} from "../../script.js";
import {BASE_URL} from "../../App.jsx";

export const LoadingComponent = ({endpoint}) => {
  const [data, loading, error] = useJsonFetch(BASE_URL, endpoint);

  return (
    <div>
      <h2>Loading Component</h2>
      {loading && <div style={{ color: 'blue' }}>Loading... Please wait</div>}
      {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      {data && !loading && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};