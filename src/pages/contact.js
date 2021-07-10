import React from 'react'
import { Link } from 'gatsby'
import Layout from '../Components/Layout'
import ContactForm from '../Components/Contact/ContactForm'
import Seo from '../Components/Seo'

import { 
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram
} from 'react-icons/io5'

import { ImWhatsapp } from 'react-icons/im'

const contact = () => {
    return (
        <div>
            <Seo title="Qui sommes-nous?" description="Découvrir l'Equipe de Vers et Chroniques" />
            <Layout>
                <div className="mt-6 mb-4 text-mirage-500">
                    <div className="mb-5">
                        📩 <span className="underline font-sans font-semibold text-mirage-500"> Retrouvez-nous sur: </span> 👇 <br/>   
                    </div>
                    <div className="grid grid-cols-2 place-items-center text-xl md:text-2xl mt-2">
                        <div className="cursor-pointer my-2">
                            <a href="https://www.facebook.com/profile.php?id=100063121575005" target="__blank" className="flex flex-row">
                                <IoLogoFacebook/>
                                <p className="text-sm md:text-lg text-mirage-500"> Facebook </p>
                            </a>
                        </div>
                        <div className="cursor-pointer my-2">
                            <a href="https://twitter.com/PenielKatombe?s=09" target="__blank" className="flex flex-row">
                                <IoLogoTwitter/>
                                <p className="text-sm md:text-lg text-mirage-500"> Twitter </p>
                            </a>
                        </div>
                        <div className="cursor-pointer my-2">
                            <a href="https://www.instagram.com/invites/contact/?i=123d70ua56cjk&utm_content=oizab8" target="__blank" className="flex flex-row">
                                <IoLogoInstagram/>
                                <p className="text-sm md:text-lg text-mirage-500 "> Instagram </p>
                            </a>
                        </div>
                        <div className="cursor-pointer my-2">
                            <a href="https://wa.me/message/DWICK6VGS7TOI1" target="__blank" className="flex flex-row">
                                <ImWhatsapp/>
                                <p className="text-sm md:text-lg text-mirage-500"> WhatsApp </p>
                            </a>
                        </div>
                    </div>
                </div>

                <ContactForm/>

                <button className="bg-mirage-500 mx-auto mt-10 p-3 rounded-md font-semibold text-white"> 
                    <Link to="/">
                        Page d'Accueil <span role="img">🏡</span> 
                    </Link>
                </button>
            </Layout>
        </div>
    )
}

export default contact
