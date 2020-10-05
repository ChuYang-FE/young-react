import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
    })();
  }, [url]);

  return { data, loading };
};

const Fetch = () => {
  const { data, loading } = useFetch(
    "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
  );
  return (
    <div>{loading ? <em>loading...</em> : data.chengpinDetails[0].title}</div>
  );
};

export default Fetch;
