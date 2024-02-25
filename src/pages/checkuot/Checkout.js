import React from "react";
import { useState, useRef } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Checkout() {
  const [isOpenCardOption, setIsOpenCardOption] = useState(false);
  const [isOpenWalletOption, setIsOpenwalletOption] = useState(false);
  const cardRef = useRef(null);
  const walletRef = useRef(null);
  const handleRadioChangeCard = (event) => {
    setIsOpenCardOption(event.target.checked);
    if (cardRef.current) {
      cardRef.current.style.display = "block";
    } else {
      cardRef.current.style.display = "none";
    }
  };
  const handleRadioChangeWallet = (event) => {
    setIsOpenwalletOption(event.target.checked);
    if (walletRef.current) {
      walletRef.current.style.display ="block";
    } else {
      walletRef.current.style.display='none'
    }
  };
  return (
    <div className="mt-10 mb-10">
      <div className="container">
        <div className="row">
          <form className="grid md:grid-cols-2 bg-white">
            <div className="card p-3 m-2">
              <div className="border-b border-gray-900/10">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="phone"
                        autoComplete="phone"
                        className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-12 mt-5">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Payments Option
                </h2>
                <div className="mt-10 space-y-10">
                  <fieldset>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="cardOption"
                          name="payments"
                          type="radio"
                          onChange={handleRadioChangeCard}
                          checked={isOpenCardOption}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="card-option"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Credit/Debit Card
                        </label>
                      </div>
                      <div
                        ref={cardRef}
                        style={{ display: isOpenCardOption ? "block" : "none" }}
                      >
                        Card Option
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="mobileWallet"
                          name="payments"
                          type="radio"
                          onChange={handleRadioChangeWallet}
                          checked={isOpenWalletOption}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="mobileWallet"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Mobile Wallet
                        </label>
                      </div>

                      <div
                        ref={walletRef}
                        style={{
                          display: isOpenWalletOption ? "block" : "none",
                        }}
                      >
                        mobile Wallet
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="cod"
                          name="payments"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="cashOnDelivery"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Cash on delivery
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div class="md-col-span-2 m-2 bg-white">
              <div class="card position-sticky top-0">
                <div class="p-3 bg-light bg-opacity-10">
                  <h6 class="card-title mb-3">Order Summary</h6>
                  <div class="d-flex justify-content-between mb-1 small">
                    <span>Subtotal</span> <span>$214.50</span>
                  </div>
                  <div class="d-flex justify-content-between mb-1 small">
                    <span>Shipping</span> <span>$20.00</span>
                  </div>
                  <div class="d-flex justify-content-between mb-1 small">
                    <span>Coupon (Code: NEWYEAR)</span>{" "}
                    <span class="text-danger">-$10.00</span>
                  </div>
                  <hr />
                  <div class="d-flex justify-content-between mb-4 small">
                    <span>TOTAL</span>{" "}
                    <strong class="text-dark">$224.50</strong>
                  </div>
                  <button className="inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-2 text-center font-medium text-white hover:bg-gray-700">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
