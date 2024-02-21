import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function MyOrders() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h4 className="font-weight-bold mt-0 mb-4">My Orders</h4>
          <div className="col-md-12">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane  fade  active show"
                role="tabpanel"
                aria-labelledby="orders-tab"
              >
                <div className="bg-white card mb-4 order-list shadow-sm">
                  <div className="gold-members p-4">
                    <a href="#/"></a>
                    <div className="media">
                      <a href="">
                        <img className="m-1" src="" alt="product image" />
                      </a>
                      <div className="media-body">
                        <span className="float-right text-gray-900">
                          Status: Delivered
                        </span>
                        <h6 className="mb-2">
                          <a href="#/"></a>
                          <a href="#/" className="text-black">
                            Black T-Shirt
                          </a>
                        </h6>
                        <p className="text-dark">Quanitity:3</p>
                        <p>Color: Black</p>
                        <p>Size: Large</p>
                        <hr />
                        <div className="float-right">
                          <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to={"/products/:id"}
                          >
                            <button className="inline-block rounded-md border border-transparent bg-gray-900 px-3 py-3 text-center font-medium text-white hover:bg-gray-600">
                              Purchase Again
                            </button>
                          </Link>{" "}
                        </div>
                        <p className="mb-0 text-black text-primary pt-2">
                          <span className="text-black font-weight-bold">
                            Amount:
                          </span>
                          $300
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyOrders;
