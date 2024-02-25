import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <section className="bg-white-50">
        <div className="container">
          <div className="row">
            <h4 className="font-weight-bold mt-0 mb-4">My Profile</h4>
            <div className="col-lg-12 mb-4 bg-white card shadow-sm">
              <div className="card card-style1 border-2">
                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                  <div className="row align-items-center">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-6 px-xl-10">
                      <div className="bg-gray-700 d-lg-inline-block py-3 px-2 rounded">
                        <h4 className="h2 text-white mb-0">Muhammad Naeem</h4>
                      </div>
                      <ul className="list-unstyled mb-1-9 mt-3">
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Email:
                          </span>{" "}
                          faltooswag@gmail.com
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Phone:
                          </span>{" "}
                          03032664863
                        </li>
                        <li className="mb-2 mb-xl-3 display-28">
                          <span className="display-26 text-secondary me-2 font-weight-600">
                            Address:
                          </span>
                          Shalimar Square near Al Jannat CNG Sadiqabad{" "}
                        </li>
                      </ul>
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={"/user-profile/:id/profile/edit"}
                      >
                        <button className="inline-block rounded-md border border-transparent bg-gray-900 px-3 py-2 text-center font-medium text-white hover:bg-gray-600">
                          {" "}
                          Update Profile
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
