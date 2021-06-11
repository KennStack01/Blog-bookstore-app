import React from 'react'
import { Link } from 'gatsby'
import { 
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoLinkedin, 
    IoLogoInstagram
} from 'react-icons/io5'

import { ImWhatsapp } from 'react-icons/im'

const Navbar = () => {
    return (
        <div>
            <section className="flex flex-col text-xl bg-mirage-500 backdrop-filter backdrop-blur-lg text-white font-normal justify-center p-4">
                <h1 className="mb-10 font-semibold cursor-pointer">
                    <Link to="/">
                        Vers et Chroniques
                    </Link>
                </h1>
                <div className="flex-grow divide-y divide-white font-medium">
                    <h2 className="cursor-pointer"> 
                        <Link to="/bibliotheque">
                            <span role="img">📚</span> Bibliothèque
                        </Link>
                    </h2>
                    <div className="divide-y divide-white">
                        <h2 className="mt-10 cursor-pointer">
                            <Link to="/quiSommesNous">
                                <span role="img">💡</span> Qui sommes-nous?
                            </Link> 
                        </h2>
                        <h2 className="cursor-pointer"> 
                            <Link to="/contact">
                                <span role="img">📩</span>  Contactez-nous
                            </Link>
                        </h2>
                        <div></div>
                    </div>
                </div>

                <p className="mt-10 text-center">Retrouvez-nous</p>
                <div className="flex flex-row justify-around text-3xl mt-2">
                    <div className="cursor-pointer">
                        <a href="https://www.facebook.com/profile.php?id=100063121575005" target="__blank">
                            <IoLogoFacebook/>
                        </a>
                    </div>
                    <div className="cursor-pointer">
                        <a href="https://twitter.com/PenielKatombe?s=09" target="__blank">
                            <IoLogoTwitter/>
                        </a>
                    </div>
                    <div className="cursor-pointer">
                        <a href="https://www.instagram.com/invites/contact/?i=123d70ua56cjk&utm_content=oizab8" target="__blank">
                            <IoLogoInstagram/>
                        </a>
                    </div>
                    <div className="cursor-pointer">
                        <a href="https://wa.me/message/DWICK6VGS7TOI1" target="__blank">
                            <ImWhatsapp/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Navbar
