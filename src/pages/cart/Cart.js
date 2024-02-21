import React from 'react';
import './style.css';

import { RiDeleteBin2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


function Cart() {
  
	return (
		<div>
			<div className="container px-3 my-5 m-5">
            <h2>Shopping Cart</h2>
        <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered m-0">
                <thead>
                  <tr>
                    
                    <th className="text-center py-3 px-4" style={{/*min-width: 400px;*/}}>Product Name &amp; Details</th>
                    <th className="text-right py-3 px-4" style={{/*width: 100px;*/}}>Price</th>
                    <th className="text-center py-3 px-4" style={{/*width: 120px;*/}}>Quantity</th>
                    <th className="text-right py-3 px-4" style={{/*width: 100px;*/}}>Total</th>
                    <th className="text-center align-middle py-3 px-0" style={{/*width: 40px;*/}}><a href="#/" className="shop-tooltip float-none text-light" title="" data-original-title="Clear cart"><i className="ino ion-md-trash"></i></a></th>
                  </tr>
                </thead>
                <tbody>
        
                  <tr>
                    <td className="p-4">
                      <div className="media align-items-center">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" className="d-block ui-w-40 ui-bordered mr-4" alt=""/>
                        <div className="media-body">
                          <a href="#/" className="d-block text-dark">Product 1</a>
                          <small>
                            <span className="text-muted">Size: </span> EU 37 &nbsp;
                            <span className="text-muted">Ships from: </span> China
                          </small>
                        </div>
                      </div>
                    </td>
                    <td className="text-right font-weight-semibold align-middle p-4">$57.55</td>
                    <td className="align-middle p-4">
                      <input type="text" className="block rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      placeholder="Quantity"
                    /></td>
                    <td className="text-right font-weight-semibold align-middle p-4">$115.1</td>
                    <td className="text-center align-middle p-2"><button><RiDeleteBin2Line className='text-gray-950 hover:text-gray-600'></RiDeleteBin2Line></button> </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
        
            <div className="d-flex flex-wrap justify-content-between align-items-center pb-4">
              <div className="mt-4">
                <label className="text-muted font-weight-normal">Promocode</label>
                <input type="text" className="block rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      placeholder="ABC"
                    />
              </div>
              <div className="d-flex">
                <div className="text-right mt-4 mr-5">
                  <label className="text-muted font-weight-normal m-0">Discount</label>
                  <div className="text-large"><strong>$20</strong></div>
                </div>
                <div className="text-right mt-4">
                  <label className="text-muted font-weight-normal m-0">Total price</label>
                  <div className="text-large"><strong>$1164.65</strong></div>
                </div>
              </div>
            </div>
        
            <div className="float-right">
            <Link to='/' style={{textDecoration:'none',color:''}}><button type="button" className=" inline-block border-transparent text-gray-900 pr-2 hover:text-gray-600">Back to shopping</button></Link>
              <Link to='/checkout'><button className="inline-block rounded-md border border-transparent bg-gray-900 px-8 py-2 text-center font-medium text-white hover:bg-gray-700">
                      Checkout
                    </button></Link>
            </div>
        
          </div>
      </div>
  </div>
	);
}
export default Cart;