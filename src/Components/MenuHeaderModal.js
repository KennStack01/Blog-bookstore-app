/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Menu, Transition } from '@headlessui/react'
import { 
    HiDotsVertical, 
} from 'react-icons/hi'

import { 
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoLinkedin, 
    IoLogoInstagram
} from 'react-icons/io5'

import { ImWhatsapp } from 'react-icons/im'




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MenuHeaderModal() {
    return (
        <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
            <>
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500">
                    <div className="flex flex-row font-semibold cursor-pointer"> 
                        <p className="text-xl font-semibold mt-0">menu</p>
                        <div className="mt-1 text-xl">
                            <HiDotsVertical/> 
                        </div>
                    </div>
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
                className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                >
                <div className="py-1">
                    <Menu.Item>
                    {({ active }) => (
                        <Link
                        to="/"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block mx-auto px-4 py-2 text-sm font-semibold cursor-pointer'
                        )}
                        >
                            <p className="flex flex-col mx-8">
                                <span>
                                    Vers et Chroniques <br /> 
                                </span>
                                <span className="text-xs text-gray-500 font-light mx-5">(Aller à l'Accueil)</span>
                            </p>
                        </Link>
                    )}
                    </Menu.Item>
                </div>
                <div className="py-1">
                    <Menu.Item>
                    {({ active }) => (
                        <Link
                        to="/bibliotheque"
                        className={classNames(
                            active ? 'bg-yellow-500 text-white' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        <span role="img">📚</span> Bibliothèque
                        </Link>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <Link
                        to="/quiSommesNous"
                        className={classNames(
                            active ? 'bg-yellow-500 text-white' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                            <span role="img">💡</span> Qui sommes-nous?
                        </Link>
                    )}
                    </Menu.Item>
                </div>
                <div className="py-1">
                    <Menu.Item>
                    {({ active }) => (
                        <Link
                        to="/contact"
                        className={classNames(
                            active ? 'bg-yellow-500 text-white' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                            <span role="img">📩</span>  Contactez-nous
                        </Link>
                    )}
                    </Menu.Item>
                </div>
                <div className="py-1">
                    <Menu.Item>
                    <div>
                        <p className="mt-5 text-center text-sm">Retrouvez-nous</p>
                        <div className="flex flex-row justify-around text-2xl my-2">
                            <div className="cursor-pointer hover:text-yellow-500">
                                <a href="https://www.facebook.com/profile.php?id=100063121575005" target="__blank">
                                    <IoLogoFacebook/>
                                </a>
                            </div>
                            <div className="cursor-pointer hover:text-yellow-500">
                                <a href="https://twitter.com/PenielKatombe?s=09" target="__blank">
                                    <IoLogoTwitter/>
                                </a>
                            </div>
                            <div className="cursor-pointer hover:text-yellow-500">
                                <a href="https://www.instagram.com/invites/contact/?i=123d70ua56cjk&utm_content=oizab8" target="__blank">
                                    <IoLogoInstagram/>
                                </a>
                            </div>
                            <div className="cursor-pointer hover:text-yellow-500">
                                <a href="https://wa.me/message/DWICK6VGS7TOI1" target="__blank">
                                    <ImWhatsapp/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </Menu.Item>
                </div>
                </Menu.Items>
            </Transition>
            </>
        )}
        </Menu>
    )
}