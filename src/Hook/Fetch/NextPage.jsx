import React, { useState, useEffect } from "react";

const NextPage = () => {
  const [page, setPage] = useState(1);
  const [commits, setCommits] = useState([]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const firstPage = () => {
    setPage(1);
  };

  useEffect(() => {
    fetch(
      `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview",
        }),
      }
    )
      .then((data) => data.json())
      .then((response) => setCommits(response.items))
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div>
      {commits.length !== 0 && <button onClick={nextPage}> next page </button>}
      {commits.length === 0 && <button onClick={firstPage}>first page</button>}

      {/* {commits.map((item) => (
        <div key={item.sha}>
          {item.commit && (
            <div>
              <p>{item.commit.committer.name}</p>
              <p>{item.commit.message}</p>
            </div>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default NextPage;
