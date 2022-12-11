import React, { useState } from "react";
import axios from "axios";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DisplayRepos from "./DisplayRepos";
import Toaster from "./Toaster";

const Github = () => {
  const [input, setInput] = useState("");
  const [repos, setRepos] = useState([]);
  const [repoData, setRepoData] = useState({});
  const [repoNotFound, setRepoNotFound] = useState(false);

  const handleInputs = (e) => {
    setInput(e.target.value);
  };

  const reset = () => {
    setInput("");
  };

  const getRepos = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=user:${input}+is:public`
      )
      .then((res) => {
        setRepos(res.data.items);
        setRepoData({
          count: res.data.total_count,
          gitUsername: res?.data?.items[0]?.owner?.login,
        });
        reset();
      })
      .catch((err) => {
        setRepoNotFound(true);
      });
  };

  return (
    <>
      <p style={{ textAlign: "right", marginRight:"10%"}}>
        <br />
        Developed by Sachin(Ranganath) K{" "}
      </p>
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
        <DisplayRepos allRepos={repos} reposInfo={repoData} flag={false} />
      </div>
    </>
  );
};

export default Github;
