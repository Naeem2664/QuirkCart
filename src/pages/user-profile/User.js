import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  FunnelIcon,
 
} from "@heroicons/react/20/solid";
import { Link ,Outlet} from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (

      <div className="bg-white">
        <div>
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <form className="mt-4 border-t border-gray-200">
                      <Disclosure as="div" className="border-b border-gray-200">
                      <Link to={'/user-profile/:id/profile'} style={{textDecoration:'none',color:'black'}} >
                     <h5 className="hover:bg-gray-700 hover:text-white rounded p-1 delay-100">My Profile</h5> 
                    </Link>
                      </Disclosure>
                      <Disclosure as="div" className="border-b border-gray-200">
                      <Link to={'/user-profile/:id/orders'} style={{textDecoration:'none',color:'black'}} >
                     <h5 className="hover:bg-gray-700 hover:text-white rounded p-1 delay-100">My Orders</h5> 
                    </Link>
                      </Disclosure>
                      <Disclosure as="div" className="border-b border-gray-200">
                      <Link to={'/user-profile/:id/returns'} style={{textDecoration:'none',color:'black'}} >
                     <h5 className="hover:bg-gray-700 hover:text-white rounded p-1 delay-100">My Returns</h5> 
                    </Link>
                      </Disclosure>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>

              <div className="flex items-center">
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <form className="hidden lg:block">
                  <Disclosure as="div" className="border-b border-gray-200">
                  <Link to={'/user-profile/:id/profile'} style={{textDecoration:'none',color:'black'}} >
                     <h5 className="hover:bg-gray-700 hover:text-white rounded p-1 delay-100">My Profile</h5> 
                    </Link>
                  </Disclosure>
                  <Disclosure as="div" className="border-b border-gray-200">
                  <Link to={'/user-profile/:id/orders'} style={{textDecoration:'none',color:'black'}} >
                     <h5 className="hover:bg-gray-700 hover:text-white rounded p-1 delay-100">My Orders</h5> 
                    </Link>
                  </Disclosure>
                  <Disclosure as="div" className="border-b border-gray-200">
                    <Link to={'/user-profile/:id/returns'} style={{textDecoration:'none',color:'black'}} >
                     <h5 className="hover:bg-gray-700 hover:text-white rounded p-1 delay-100">My Returns</h5> 
                    </Link>
                  </Disclosure>
                </form>
                <div className="lg:col-span-3">
                    <Outlet/>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
  );
}
