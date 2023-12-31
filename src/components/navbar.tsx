'use client'
import { Fragment, useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import SlideOver from './slideOver'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'About', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Location', href: '/location', current: false },
  { name: 'Reviews', href: '/reviews', current: false },
  { name: 'Contact', href: '#', current: false },
]

export default function Example() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname || null);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);

  useEffect(() => {
    setHoveredPath(pathname);
  }, [pathname]);


  return (
    <Disclosure as="nav" className="bg-white shadow-2xl">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    key={'Home'}
                    href={'/'}
                  >
                    <Image
                      src="/assets/images/logo.png"
                      width={250}
                      height={250}
                      className="h-8 w-auto"
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
                  {navigation.map((item) => {
                    const isActive = item.href === pathname;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`py-2 rounded-md text-md lg:text-lg font-semibold`}
                        aria-current={item.href === pathname ? 'page' : undefined}
                        onClick={(e) => {
                          if (item.name === 'Contact') {
                            e.preventDefault(); // prevent navigation
                            setIsSlideOverOpen(true);
                          }
                        }}
                      >
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
                <SlideOver isOpen={isSlideOverOpen} onClose={() => setIsSlideOverOpen(false)} />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item) => {
                const isActive = item.href === pathname;
                return (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium`}
                    aria-current={item.href === pathname ? 'page' : undefined}
                    onClick={(e) => {
                      if (item.name === 'Contact') {
                        e.preventDefault(); // prevent navigation
                        setIsSlideOverOpen(true);
                      }
                    }}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
