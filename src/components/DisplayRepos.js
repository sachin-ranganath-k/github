import React, { useState } from "react";
import GithubAvatar from "../images/git.jpg";

const DisplayRepos = ({ allRepos, reposInfo, flag }) => {
  console.log(allRepos);
  const { count, gitUsername } = reposInfo;
  if (count > 0) {
    flag = true;
  }

  return (
    <div>
      {flag && (
        <>
          <section>
            <div className="container py-5 h-10">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-6">
                  <div className="card" style={{ borderRadius: "15px" }}>
                    <div className="card-body p-4">
                      <div className="d-flex text-black">
                        <div className="flex-shrink-0">
                          <img
                            src={allRepos[0].owner.avatar_url}
                            className="img-fluid"
                            style={{ width: "100px", borderRadius: "10px" }}
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="mb-1">{gitUsername}</h5>
                          {/* <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
    Senior Journalist
  </p> */}
                          <div
                            className="d-flex justify-content-start rounded-3 p-2 mb-4"
                            style={{ backgroundColor: "#efefef" }}
                          >
                            <div>
                              Total Repos
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
          <section>
            <div className="container">
              <div className="row">
                {allRepos.map((repo) => (
                  <div className="col-12">
                    <div className="card">
                      <p className="card-header">
                        {/* <a href={repo.html_url} target="_blank"> */}
                        {repo?.full_name}
                        {/* </a> */}
                      </p>
                      <div className="card-body">
                        <h5 className="card-title">{repo?.name}</h5>
                        <p className="card-text">
                          Created On : {repo?.created_at}
                          <br />
                          Updated On : {repo.updated_at}
                        </p>

                        <a
                          href={repo.html_url}
                          target="_blank"
                          className="btn btn-primary"
                        >
                          Visit Repository on GitHub
                        </a>
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default DisplayRepos;
