import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import styles from '../styles/Home.module.css'
import taytelogo from '../public/Tayte.svg'
import Image from 'next/image'
import { motion } from "framer-motion"

const navigation = [
  { name: 'home', href: '#', current: true },
  { name: 'skills', href: '#', current: false },
  { name: 'github', href: 'https://github.com/taytey', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
<motion.div
    initial={{y: -200, opacity: 0}}
    animate={{ y:0, opacity: 1}}
    transition={{delay: 3, ease: 'easeInOut', duration: 1}} 
    >

  <Disclosure as="nav" className=" text-slate-50">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 justify-between ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:justify-start">
                  <div className="flex-shrink-0 items-center w-20 h-20">
                      <Image src={taytelogo} />
                  </div>
                  <motion.div>

                  <div className="hidden sm:ml-10 sm:block">
                    
                    <div className="items-center space-x-8">
                    {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                        item.current ? ' text-white' : 'text-white',  'hover:text-gray-700', 'font-JosefinLight',
                        'px-3 py-2 rounded-md text-sm font-medium', 'transition-all', 'duration-1000'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
            </div>

                  </motion.div>
                 
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className=" font-JosefinLight hover:transition-all duration-1000 h-10 w-20 m-2 p-1 text-white outline outline-offset-2 outline-1 rounded-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800 hover:bg-gray-700"
                  >
                    <h2>resume</h2>
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

</motion.div>
    
  )
}
