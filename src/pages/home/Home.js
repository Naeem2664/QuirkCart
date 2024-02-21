import { Link } from "react-router-dom"
import './style.css'
import Shop from '../shop/Shop'
import Contact from '../contact/Contact'

export default function Home() {
  console.log("Home page")
  return (
    <div>
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center shadow-lg"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center shadow-lg"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to='/shop'><button
                className="inline-block rounded-md border border-transparent bg-gray-900 px-8 py-3 text-center font-medium text-white hover:bg-gray-700"
              >
                Shop Collection
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Shop></Shop>
    </div>
    <div>
		<div>
<div className="container about">
    <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 mt-4 pt-2">
                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="https://www.bootdey.com/image/241x362/FFB6C1/000000" className="img-fluid" alt="Image" />
                                <div className="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        

                        <div className="col-12">
                            <div className="mt-4 pt-2 text-right">
                                <Link to="/about" className="btn btn-info">Read More</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                

                <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="https://www.bootdey.com/image/337x450/87CEFA/000000" className="img-fluid" alt="Image" />
                                <div className="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        

                        <div className="col-lg-12 col-md-12 mt-4 pt-2">
                            <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src="https://www.bootdey.com/image/600x401/FF7F50/000000" className="img-fluid" alt="Image" />
                                <div className="img-overlay bg-dark"></div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        

        <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div className="section-title ml-lg-5">
                <h1 className="text-custom font-weight-normal mb-3">About Company</h1>
                <h4 className="title mb-4">
                    Our mission is to <br />
                    make your shopping easier.
                </h4>
                <p className="text-muted mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit quod debitis praesentium pariatur temporibus ipsa, cum quidem obcaecati sunt?</p>

                <div className="row">
                    <div className="col-lg-6 mt-4 pt-2">
                    <div className="media align-items-center rounded shadow p-3">
                            <h5 className="ml-3 mb-0"><Link to="/blog" style={{textDecoration:'none'}} className="text-dark">Our Blog</Link></h5>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                    <div className="media align-items-center rounded shadow p-3">
                            <h5 className="ml-3 mb-0"><Link to="/terms-condition" style={{textDecoration:'none'}} className="text-dark">Our Legal Aspects</Link></h5>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                        <div className="media align-items-center rounded shadow p-3">
                            <h5 className="ml-3 mb-0"><Link to="/privacy-policy" style={{textDecoration:'none'}} className="text-dark">Our Privacy Policy</Link></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</div>

		</div>
    </div>
    <div>
      <Contact></Contact>
    </div>
    </div>
  )
}
