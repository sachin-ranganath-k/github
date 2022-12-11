import React from "react";

const DisplayRepos = ({ allRepos }) => {
  console.log("fsf", allRepos);
  return (
    <div>
      {allRepos.map((repo) => (
        <p>{repo.name}</p>
      ))}
    </div>
  );
};

export default DisplayRepos;
