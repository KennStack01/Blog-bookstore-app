import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Menu, Transition } from '@headlessui/react'
import { HiOutlineShare } from 'react-icons/hi'
import { TiSocialLinkedin, TiSocialTwitter, TiSocialFacebook } from 'react-icons/ti'
import { ImWhatsapp } from 'react-icons/im'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ShareToSocial({ title, description, slug }) {

  return (
    <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
            <>
                <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500">
                        {/* <p className="text-md">
                            Partager
                        </p> */}
                        <div className="text-3xl cursor-pointer">
                            <HiOutlineShare/>
                        </div>
                        {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                    </Menu.Button>
                </div>

                <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                    static
                    className="origin-bottom-right absolute right-9 bottom-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                    <div className="py-1">
                        <Menu.Item>
                        {({ active }) => (
                            <p
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block mx-auto px-4 py-2 text-sm font-semibold cursor-pointer'
                            )}
                            >
                                <p className="flex flex-col text-xs">
                                    <span className="mx-auto">
                                        Partager avec les Amis😍  <br /> 
                                    </span>
                                    <span className="text-xs text-gray-500 font-light mx-auto">En un Clic!</span>
                                </p>
                            </p>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href={`https://www.facebook.com/sharer.php?u=https://www.versetchroniques.blog/chroniques/${slug}`}
                            target="_blank"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-2 text-sm'
                            )}
                            >
                                <div className="my-3 p-2 cursor-pointer flex flex-row shadow rounded-md justify-center">
                                    <div className="text-4xl text-blue-500">
                                        <TiSocialFacebook/>
                                    </div>
                                    <h2 className="text-md mt-3 font-medium">Facebook</h2>
                                </div>
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.versetchroniques.blog/chroniques/${slug}&title=${title}&summary=${description}`}
                            target="_blank"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-2 text-sm'
                            )}
                            >
                                <div className="my-3 p-2 cursor-pointer flex flex-row shadow rounded-md justify-center">
                                    <div className="text-4xl text-blue-500">
                                        <TiSocialLinkedin/>
                                    </div>
                                    <h2 className="text-md mt-3 font-medium">LinkedIn</h2>
                                </div>
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href={`https://twitter.com/intent/tweet?text=${title}%0A%0A&url=https://www.versetchroniques.blog/chroniques/${slug}&via=versetchroniques`}
                            target="_blank"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-2 text-sm'
                            )}
                            >
                                <div className="my-3 p-2 cursor-pointer flex flex-row shadow rounded-md justify-center">
                                    <div className="text-4xl text-blue-500">
                                        <TiSocialTwitter/>
                                    </div>
                                    <h2 className="text-md mt-3 font-medium">Twitter</h2>
                                </div>
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href={`whatsapp://send?text=*${title.trim()}*%0A%0A%20%20%20${description}%0A%0A%20https://www.versetchroniques.blog/chroniques/${slug}`}
                            target="_blank"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-2 text-sm'
                            )}
                            >
                                <div className="my-3 p-2 cursor-pointer flex flex-row shadow rounded-md justify-center">
                                    <div className="text-4xl text-green-500">
                                        <ImWhatsapp/>
                                    </div>
                                    <h2 className="text-md mt-3 font-medium">WhatsApp</h2>
                                </div>
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    </Menu.Items>
                </Transition>
            </>
        )}
        </Menu>
    )
}
