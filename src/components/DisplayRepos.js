import React, { useState } from "react";
import GithubAvatar from "../images/git.jpg";

const DisplayRepos = ({ allRepos, reposInfo, flag }) => {
  console.log(reposInfo);
  const { count, gitUsername } = reposInfo;
  if (count > 0) {
    flag = true;
  }

  return (
    <div>
      {flag && (
        <section>
          <div className="container py-3 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-8">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <div className="d-flex text-black">
                      <div className="flex-shrink-0">
                        <img
                          src={GithubAvatar}
                          className="img-fluid"
                          style={{ width: "50px" }}
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1">{gitUsername}</h5>
                        {/* <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                        Senior Journalist
                      </p> */}
                        <div
                          className="d-flex justify-content-start rounded-3 p-2 mb-2"
                          style={{ backgroundColor: "#efefef" }}
                        >
                          <div>
                            <p className="small text-muted mb-1">Total Repos</p>
                            <p className="mb-0">{count}</p>
                          </div>
                          {/* <div className="px-3">
                          <p className="small text-muted mb-1">Followers</p>
                          <p className="mb-0">976</p>
                        </div>
                        <div>
                          <p className="small text-muted mb-1">Rating</p>
                          <p className="mb-0">8.5</p>
                        </div> */}
                        </div>
                        {/* <div className="d-flex pt-1">
                        <button
                          type="button"
                          className="btn btn-outline-primary me-1 flex-grow-1"
                        >
                          Chat
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary flex-grow-1"
                        >
                          Follow
                        </button>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* {allRepos.map((repo) => (
        <p>{repo.name}</p>
      ))} */}
    </div>
  );
};

export default DisplayRepos;
