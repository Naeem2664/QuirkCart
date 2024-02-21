import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
	return (
		<div className='m-10'> 
			<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"/>
<div>
    <div className="contact__wrapper shadow-lg mt-n9">
        <div className="row no-gutters">
            <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2 bg-gray-800">
                <h3 className="color--white mb-5">Get in Touch</h3>
    
                <ul className="contact-info__list list-style--none position-relative z-index-101">
                    <li className="mb-4 pl-4">
                        <span className="position-absolute"><i className="fas fa-envelope"></i></span> 
                    </li>
                    <li className="mb-4 pl-4">
                        <span className="position-absolute"><i className="fas fa-phone"></i></span> (+92) 303-2664863
                    </li>
                    <li className="mb-4 pl-4">
                        <span className="position-absolute"><i className="fas fa-map-marker-alt"></i></span> KFUEIT RYK.
                        <br/> Punjab , Pakistan
                        <div className="mt-3">
                            <a href="https://www.google.com/maps" target="_blank" className="text-link link--right-icon text-white">Get directions <i className="link__icon fa fa-directions"></i></a>
                        </div>
                    </li>
                </ul>
    
                <figure className="figure position-absolute m-0 opacity-06 z-index-100" style={{/*bottom:0; right: 10px*/}}>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="444px" height="626px">
                        <defs>
                            <linearGradient id="PSgrad_1" x1="0%" x2="81.915%" y1="57.358%" y2="0%">
                                <stop offset="0%" stop-color="rgb(255,255,255)" stop-opacity="1"></stop>
                                <stop offset="100%" stop-color="rgb(0,54,207)" stop-opacity="0"></stop>
                            </linearGradient>
    
                        </defs>
                        <path fill-rule="evenodd" opacity="0.302" fill="rgb(72, 155, 248)" d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"></path>
                        <path fill="url(#PSgrad_1)" d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"></path>
                    </svg>
                </figure>
            </div>
    
            <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                <form action="#" className="contact-form form-validate" novalidate="novalidate">
                    <div className="row">
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label className="required-field" for="firstName">First Name</label>
                                <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" placeholder="First Name"/>
                            </div>
                        </div>
    
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label for="lastName">Last Name</label>
                                <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" placeholder="Last Name"/>
                            </div>
                        </div>
    
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label className="required-field" for="email">Email</label>
                                <input type="email" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" placeholder="example@xyz.com"/>
                            </div>
                        </div>
    
                        <div className="col-sm-6 mb-3">
                            <div className="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" placeholder="+92 303 2664863"/>
                            </div>
                        </div>
    
                        <div className="col-sm-12 mb-3">
                            <div className="form-group">
                                <label className="required-field" for="message">How can we help?</label>
                                <textarea className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6" id="message" name="message" rows="4" placeholder="Hi there, I would like to....."></textarea>
                            </div>
                        </div>
    
                        <div className="col-sm-12 mb-3">
                        <button type='submit'
                className="inline-block rounded-md border border-transparent bg-gray-900 px-8 py-3 text-center font-medium text-white hover:bg-gray-700"
              >
                Submit
              </button>
                        </div>
    
                    </div>
                </form>
            </div>
            
    
        </div>
    </div>
</div>
		</div>
	);
}
export default App;