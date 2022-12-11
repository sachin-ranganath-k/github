import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBContainer } from "mdb-react-ui-kit";
import { MDBInputGroup } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

export default function Github() {
  return (
    <div className="container">
      <br />
      <br />
      <div className="card">
        <div className="card-header">GitHub Repositories</div>
        <div className="card-body">
          <h5 className="card-title">Enter GitHub Username</h5>
          <div className="md-form">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">https://github.com/</div>
              </div>
              <input
                type="text"
                class="form-control py-0"
                id="inlineFormInputGroup"
                placeholder="Enter Username"
              />
            </div>
          </div>
          <br />
          <a href="#!" className="btn btn-primary">
            Fetch Repos
          </a>
        </div>
      </div>
    </div>
  );
}
