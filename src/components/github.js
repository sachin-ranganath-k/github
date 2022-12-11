import React, { useState } from "react";
import axios from "axios";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DisplayRepos from "./DisplayRepos";

const Github = () => {
  const [input, setInput] = useState();
  const [repos, setRepos] = useState([]);

  const handleInputs = (e) => {
    setInput(e.target.value);
  };

  const getRepos = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=user:${input}+is:public`
      )
      .then((res) => {
        setRepos(res.data.items);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="card">
        <div className="card-header">GitHub Repositories</div>
        <div className="card-body">
          <h5 className="card-title">Enter GitHub Username</h5>
          <div className="md-form">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">https://github.com/</div>
              </div>
              <input
                type="text"
                className="form-control py-0"
                id="inlineFormInputGroup"
                placeholder="Enter Username"
                onChange={handleInputs}
              />
            </div>
          </div>
          <br />
          <button className="btn btn-primary" onClick={getRepos}>
            Fetch Repos
          </button>
        </div>
      </div>
      <DisplayRepos allRepos={repos} />
    </div>
  );
};

export default Github;
