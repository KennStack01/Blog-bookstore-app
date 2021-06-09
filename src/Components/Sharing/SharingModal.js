import React from 'react'
import { TiSocialLinkedin, TiSocialTwitter, TiSocialFacebook } from 'react-icons/ti'
import { ImWhatsapp } from 'react-icons/im'

const SharingModal = () => {
    return (
        <div className="">
            <div className="flex justify-center">
                <h1 className="font-semibold">Partager avec les Amis 😍</h1>
            </div>
            <div className="flex flex-col mt-5">
                <div className="my-3 p-2 cursor-pointer flex flex-row shadow rounded-md justify-center">
                    <div className="text-4xl text-blue-500">
                        <TiSocialFacebook/>
                    </div>
                    <h2 className="text-lg mt-2 font-medium">Facebook</h2>
                </div>
                <div className="my-3 p-2 cursor-pointer flex flex-row shadow rounded-md justify-center">
                    <div className="text-4xl text-blue-500">
                        <TiSocialLinkedin/>
                    </div>
                    <h2 className="text-lg mt-2 font-medium">LinkedIn</h2>
                </div>
                <div className="my-3 p-2 cursor-pointer flex flex-row shadow rounded-md justify-center">
                    <div className="text-4xl text-blue-500">
                        <TiSocialTwitter/>
                    </div>
                    <h2 className="text-lg mt-1 mr-6 font-medium"> Twitter</h2>
                </div>
                <div className="my-3 p-2 cursor-pointer flex flex-row shadow rounded-md justify-center">
                    <div className="text-3xl text-green-500">
                        <ImWhatsapp/>
                    </div>
                    <h2 className="text-lg mt-1 mr-2 font-medium"> WhatsApp</h2>
                </div>
            </div>
        </div>
  );
}

export default SharingModal
